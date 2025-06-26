import { httpsCallable } from 'firebase/functions';
import { functions } from './config';
import { collection, addDoc, doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from './config';

/**
 * Service for handling Mollie payments using Firebase Functions
 */
const mollieService = {
  /**
   * Create a payment with Mollie
   * @param {Object} paymentData - Payment data including amount, description, etc.
   * @returns {Promise<Object>} - Promise resolving to the payment result
   */
  createPayment: async (paymentData) => {
    try {
      // First, store the donation in Firestore
      const donationRef = await addDoc(collection(db, 'donations'), {
        ...paymentData,
        status: 'pending',
        createdAt: new Date(),
      });

      // Call the Firebase Function to create a payment with Mollie
      const createMolliePayment = httpsCallable(functions, 'createMolliePayment');
      const result = await createMolliePayment({
        ...paymentData,
        donationId: donationRef.id,
      });

      // Update the donation with the payment ID
      await updateDoc(doc(db, 'donations', donationRef.id), {
        paymentId: result.data.id,
        checkoutUrl: result.data.checkoutUrl,
      });

      return result.data;
    } catch (error) {
      console.error('Error creating payment:', error);
      throw error;
    }
  },

  /**
   * Get payment status
   * @param {string} paymentId - The Mollie payment ID
   * @returns {Promise<Object>} - Promise resolving to the payment status
   */
  getPaymentStatus: async (paymentId) => {
    try {
      const getPaymentStatus = httpsCallable(functions, 'getPaymentStatus');
      const result = await getPaymentStatus({ paymentId });
      return result.data;
    } catch (error) {
      console.error('Error getting payment status:', error);
      throw error;
    }
  },

  /**
   * Get donation by ID
   * @param {string} donationId - The donation ID
   * @returns {Promise<Object>} - Promise resolving to the donation data
   */
  getDonation: async (donationId) => {
    try {
      const donationDoc = await getDoc(doc(db, 'donations', donationId));
      if (donationDoc.exists()) {
        return { id: donationDoc.id, ...donationDoc.data() };
      } else {
        throw new Error('Donation not found');
      }
    } catch (error) {
      console.error('Error getting donation:', error);
      throw error;
    }
  }
};

export default mollieService;
