import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './EnquiryForm.css';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '',
    date: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error message when user starts typing
    if (submitStatus === 'error') {
      setSubmitStatus(null);
      setErrorMessage('');
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name');
      return false;
    }
    if (!formData.phone.trim()) {
      setErrorMessage('Please enter your phone number');
      return false;
    }
    // Basic phone validation (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      setErrorMessage('Please enter a valid 10-digit phone number');
      return false;
    }
    if (!formData.guests || parseInt(formData.guests) < 1) {
      setErrorMessage('Please enter number of guests (minimum 1)');
      return false;
    }
    if (!formData.date) {
      setErrorMessage('Please select a date');
      return false;
    }
    // Check if date is in the past
    const selectedDate = new Date(formData.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      setErrorMessage('Please select a future date');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      // Format the date for display
      const formattedDate = new Date(formData.date).toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      // EmailJS service parameters
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      // Validate environment variables
      if (!serviceId || serviceId.trim() === '') {
        throw new Error('EmailJS Service ID is not configured. Please check your .env file.');
      }
      if (!templateId || templateId.trim() === '') {
        throw new Error('EmailJS Template ID is not configured. Please check your .env file.');
      }
      if (!publicKey || publicKey.trim() === '') {
        throw new Error('EmailJS Public Key is not configured. Please check your .env file.');
      }

      // Template parameters that will be sent to EmailJS
      const templateParams = {
        from_name: formData.name,
        phone: formData.phone,
        guests: formData.guests,
        date: formattedDate,
        raw_date: formData.date,
        to_email: 'neenoland4u@gmail.com'
      };

      // Send email using EmailJS
      console.log('Sending email with:', {
        serviceId,
        templateId,
        templateParams,
        publicKey: publicKey ? `${publicKey.substring(0, 5)}...` : 'missing'
      });

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('Email sent successfully:', response);

      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        guests: '',
        date: ''
      });
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      console.error('Error details:', {
        message: error.message,
        text: error.text,
        status: error.status,
        serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID ? 'Set' : 'Missing',
        templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID ? 'Set' : 'Missing',
        publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY ? 'Set' : 'Missing'
      });

      // Provide specific error messages
      let errorMsg = '';
      
      // Log full error for debugging
      console.error('Full EmailJS error:', error);
      
      if (error.message) {
        if (error.message.includes('Service ID')) {
          errorMsg = 'EmailJS Service ID is missing. Please check your .env file and restart the server.';
        } else if (error.message.includes('Template ID')) {
          errorMsg = 'EmailJS Template ID is missing. Please check your .env file and restart the server.';
        } else if (error.message.includes('Public Key')) {
          errorMsg = 'EmailJS Public Key is missing. Please check your .env file and restart the server.';
        } else {
          errorMsg = error.message;
        }
      }
      
      // Check for EmailJS specific errors
      if (error.text) {
        errorMsg = `EmailJS Error: ${error.text}`;
      } else if (error.status) {
        if (error.status === 400) {
          errorMsg = 'Invalid EmailJS configuration. Please check your Service ID, Template ID, and template variables.';
        } else if (error.status === 401) {
          errorMsg = 'EmailJS authentication failed. Please check your Public Key.';
        } else if (error.status === 404) {
          errorMsg = 'EmailJS service or template not found. Please verify your Service ID and Template ID.';
        } else {
          errorMsg = `EmailJS Error (${error.status}): ${error.text || 'Please check your EmailJS configuration.'}`;
        }
      }
      
      // Fallback message
      if (!errorMsg) {
        errorMsg = 'Failed to submit enquiry. Please check your EmailJS configuration and try again.';
      }

      setSubmitStatus('error');
      setErrorMessage(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="enquiry-form-container">
      <h3 className="enquiry-form-title">Book Your Party</h3>
      <p className="enquiry-form-subtitle">Fill in the details below and we'll get back to you soon!</p>
      
      <form onSubmit={handleSubmit} className="enquiry-form">
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your 10-digit phone number"
            required
            maxLength="10"
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="guests">Number of Guests *</label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            placeholder="Enter number of guests"
            required
            min="1"
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Preferred Date *</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            min={new Date().toISOString().split('T')[0]}
            disabled={isSubmitting}
          />
        </div>

        {submitStatus === 'error' && errorMessage && (
          <div className="form-message form-error">
            <span>⚠️</span> {errorMessage}
          </div>
        )}

        {submitStatus === 'success' && (
          <div className="form-message form-success">
            <span>✅</span> Thank you! Your enquiry has been submitted successfully. We'll contact you soon!
          </div>
        )}

        <button
          type="submit"
          className="submit-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="spinner"></span>
              Submitting...
            </>
          ) : (
            'Submit Enquiry'
          )}
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;

