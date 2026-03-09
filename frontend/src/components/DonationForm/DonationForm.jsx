import React, { useState } from 'react';
import { FaLock } from 'react-icons/fa';
import style from './DonationForm.module.css';
// import mollieService from '../../firebase/mollieService';

/**
 * Donation Form Component
 *
 * Online payment processing is disabled. Donors can use bank transfer
 * or any money transfer system to the Ghana account below.
 */

const DonationForm = () => {
  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [transferMethod, setTransferMethod] = useState('');
  
  // Predefined donation amounts
  const donationAmounts = [10, 25, 50, 100, 250];
  
  // Handle amount selection
  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setAmount(amount.toString());
    setCustomAmount('');
    
  };
  
  // Handle custom amount input
  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    setAmount(value);
    setSelectedAmount(null);
    
  };
  
  return (
    <div className={style.donationForm}>
      <h2 className={style.formTitle}>Make a Donation</h2>
      <p className={style.formDescription}>
        Your contribution helps us continue our mission to provide quality education and opportunities for young people.
        Online card payments are currently unavailable. Please use bank transfer, mobile money, Remitly, or contact us directly.
      </p>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className={style.formGroup}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            className={style.formControl}
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        
        <div className={style.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className={style.formControl}
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
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
              className={style.formControl}
              placeholder="Enter custom amount"
              min="1"
              step="0.01"
              value={customAmount}
              onChange={handleCustomAmountChange}
            />
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

        <div className={style.donationSummary}>
          <h3 className={style.summaryTitle}>Bank Transfer Details (Ghana)</h3>
          <div className={style.summaryItem}>
            <span>Account Number:</span>
            <span>0061069461</span>
          </div>
          <div className={style.summaryItem}>
            <span>Bank Name:</span>
            <span>Absa</span>
          </div>
          <div className={style.summaryItem}>
            <span>Reference:</span>
            <span>Techten donation</span>
          </div>
          <div className={style.summaryItem}>
            <span>Method:</span>
            <span>Bank transfer or any money transfer system</span>
          </div>
        </div>

        <div className={style.formGroup}>
          <label htmlFor="transferMethod">Preferred Transfer Method</label>
          <select
            id="transferMethod"
            className={style.formControl}
            value={transferMethod}
            onChange={(e) => setTransferMethod(e.target.value)}
          >
            <option value="">Select a method</option>
            <option value="bank">Bank Transfer (Ghana)</option>
            <option value="momo">Mobile Money (Ghana)</option>
            <option value="remitly">Remitly (International)</option>
            <option value="contact">Contact Us Directly</option>
          </select>
        </div>

        {transferMethod === 'momo' && (
          <div className={style.donationSummary}>
            <h3 className={style.summaryTitle}>Mobile Money Details (Ghana)</h3>
            <div className={style.summaryItem}>
              <span>Number:</span>
              <span>+233596905337</span>
            </div>
            <div className={style.summaryItem}>
              <span>Reference:</span>
              <span>Techten donation</span>
            </div>
          </div>
        )}

        {transferMethod === 'remitly' && (
          <div className={style.donationSummary}>
            <h3 className={style.summaryTitle}>Remitly (International)</h3>
            <div className={style.summaryItem}>
              <span>Destination:</span>
              <span>Send to our bank or MoMo account</span>
            </div>
            <div className={style.summaryItem}>
              <span>Reference:</span>
              <span>Techten donation</span>
            </div>
          </div>
        )}

        {transferMethod === 'contact' && (
          <div className={style.donationSummary}>
            <h3 className={style.summaryTitle}>Contact Us</h3>
            <div className={style.summaryItem}>
              <span>Contact Form:</span>
              <span>
                <a href="/contact">Go to contact form</a>
              </span>
            </div>
          </div>
        )}
        
        <div className={style.securePaymentNote}>
          <FaLock className={style.secureIcon} />
          <span>Use the reference “Techten donation” so we can match your transfer.</span>
        </div>
      </form>
    </div>
  );
};

export default DonationForm;
