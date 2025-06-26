import React, { useState } from 'react';
import { FaCreditCard, FaLock, FaPaypal, FaApplePay, FaGooglePay } from 'react-icons/fa';
import style from './DonationForm.module.css';
import mollieService from '../../firebase/mollieService';

/**
 * Donation Form Component with Mollie Integration
 * 
 * This component is designed to integrate with Mollie payment gateway through a backend API.
 * 
 * To set up Mollie for this donation form:
 * 1. Create an account at https://www.mollie.com/
 * 2. Get your API keys from the Mollie Dashboard
 * 3. Set up a backend API endpoint that will handle the Mollie API calls
 * 4. Update the form submission to call your backend API
 * 
 * Note: The current implementation is prepared for integration with a backend API
 * that will handle the actual Mollie API calls. The frontend will send the donation
 * data to the backend, which will then create a payment with Mollie and return
 * the checkout URL for redirection.
 */

const DonationForm = () => {
  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('creditcard');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState('');
  const [formErrors, setFormErrors] = useState({});
  
  // Predefined donation amounts
  const donationAmounts = [10, 25, 50, 100, 250];
  
  // Handle amount selection
  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setAmount(amount.toString());
    setCustomAmount('');
    
    // Clear amount error if it exists
    if (formErrors.amount) {
      const { amount, ...rest } = formErrors;
      setFormErrors(rest);
    }
  };
  
  // Handle custom amount input
  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    setAmount(value);
    setSelectedAmount(null);
    
    // Clear amount error if it exists and value is valid
    if (formErrors.amount && value) {
      const { amount, ...rest } = formErrors;
      setFormErrors(rest);
    }
  };
  
  // Handle payment method selection
  const handlePaymentMethodSelect = (method) => {
    setPaymentMethod(method);
  };
  
  // Form validation
  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!name) {
      errors.name = "Name is required";
    }
    
    if (!email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Invalid email format";
    }
    
    if (!amount || parseFloat(amount) <= 0) {
      errors.amount = "Please select or enter a valid donation amount";
    }
    
    return errors;
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const errors = validateForm();
    setFormErrors(errors);
    
    // If there are errors, don't submit
    if (Object.keys(errors).length > 0) {
      return;
    }
    
    setIsSubmitting(true);
    setMessage(null);
    
    try {
      // Prepare payment data to send to Firebase Function
      const paymentData = {
        amount: {
          currency: 'EUR',
          value: parseFloat(amount).toFixed(2)
        },
        description: `Donation from ${name}`,
        redirectUrl: `${window.location.origin}/donate/thank-you`,
        metadata: {
          name: name,
          email: email
        },
        method: paymentMethod
      };
      
      // Create payment using Firebase Function
      const result = await mollieService.createPayment(paymentData);
      
      // Redirect to Mollie checkout page
      window.location.href = result.checkoutUrl;
      
    } catch (error) {
      console.error("Payment Error:", error);
      setMessage("An error occurred while processing your donation. Please try again later.");
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }
  };
  
  return (
    <div className={style.donationForm}>
      <h2 className={style.formTitle}>Make a Donation</h2>
      <p className={style.formDescription}>
        Your contribution helps us continue our mission to provide quality education and opportunities for young people.
      </p>
      
      {message && (
        <div className={messageType === 'success' ? style.successMessage : style.errorMessage}>
          {message}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            className={`${style.formControl} ${formErrors.name ? style.inputError : ''}`}
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {formErrors.name && <p className={style.errorText}>{formErrors.name}</p>}
        </div>
        
        <div className={style.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className={`${style.formControl} ${formErrors.email ? style.inputError : ''}`}
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {formErrors.email && <p className={style.errorText}>{formErrors.email}</p>}
        </div>
        
        <div className={style.formGroup}>
          <label>Donation Amount</label>
          <div className={style.amountOptions}>
            {donationAmounts.map((amt) => (
              <div
                key={amt}
                className={`${style.amountOption} ${selectedAmount === amt ? style.amountOptionSelected : ''}`}
                onClick={() => handleAmountSelect(amt)}
              >
                €{amt}
              </div>
            ))}
          </div>
          
          <div className={style.customAmount}>
            <label htmlFor="customAmount">Custom Amount (€)</label>
            <input
              type="number"
              id="customAmount"
              className={`${style.formControl} ${formErrors.amount ? style.inputError : ''}`}
              placeholder="Enter custom amount"
              min="1"
              step="0.01"
              value={customAmount}
              onChange={handleCustomAmountChange}
            />
          </div>
          
          {formErrors.amount && <p className={style.errorText}>{formErrors.amount}</p>}
        </div>
        
        <div className={style.paymentMethods}>
          <h3 className={style.paymentMethodTitle}>Payment Method</h3>
          <div className={style.paymentOptions}>
            <div
              className={`${style.paymentOption} ${paymentMethod === 'creditcard' ? style.paymentOptionSelected : ''}`}
              onClick={() => handlePaymentMethodSelect('creditcard')}
            >
              <FaCreditCard className={style.paymentIcon} />
              <div>Credit Card</div>
            </div>
            
            <div
              className={`${style.paymentOption} ${paymentMethod === 'paypal' ? style.paymentOptionSelected : ''}`}
              onClick={() => handlePaymentMethodSelect('paypal')}
            >
              <FaPaypal className={style.paymentIcon} />
              <div>PayPal</div>
            </div>
            
            <div
              className={`${style.paymentOption} ${paymentMethod === 'applepay' ? style.paymentOptionSelected : ''}`}
              onClick={() => handlePaymentMethodSelect('applepay')}
            >
              <FaApplePay className={style.paymentIcon} />
              <div>Apple Pay</div>
            </div>
            
            <div
              className={`${style.paymentOption} ${paymentMethod === 'googlepay' ? style.paymentOptionSelected : ''}`}
              onClick={() => handlePaymentMethodSelect('googlepay')}
            >
              <FaGooglePay className={style.paymentIcon} />
              <div>Google Pay</div>
            </div>
          </div>
        </div>
        
        {amount && (
          <div className={style.donationSummary}>
            <h3 className={style.summaryTitle}>Donation Summary</h3>
            <div className={style.summaryItem}>
              <span>Donation Amount:</span>
              <span>€{parseFloat(amount).toFixed(2)}</span>
            </div>
            <div className={style.summaryTotal}>
              <span>Total:</span>
              <span>€{parseFloat(amount).toFixed(2)}</span>
            </div>
          </div>
        )}
        
        <button
          type="submit"
          className={style.donateButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Processing...' : 'Complete Donation'}
        </button>
        
        <div className={style.securePaymentNote}>
          <FaLock className={style.secureIcon} />
          <span>Your payment is secure and encrypted</span>
        </div>
      </form>
    </div>
  );
};

export default DonationForm;
