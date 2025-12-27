import React from 'react';

/**
 * Component to test EmailJS configuration
 * Add this temporarily to any page to check if env variables are loaded
 */
const EmailJSConfigTest = () => {
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const isConfigured = serviceId && templateId && publicKey;

  return (
    <div style={{
      padding: '20px',
      margin: '20px',
      background: '#1a1a1a',
      color: '#fff',
      borderRadius: '8px',
      fontFamily: 'monospace'
    }}>
      <h3 style={{ color: isConfigured ? '#4ade80' : '#f87171' }}>
        EmailJS Configuration Status
      </h3>
      
      <div style={{ marginTop: '15px' }}>
        <div style={{ marginBottom: '10px' }}>
          <strong>Service ID:</strong>{' '}
          <span style={{ color: serviceId ? '#4ade80' : '#f87171' }}>
            {serviceId || '❌ NOT SET'}
          </span>
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <strong>Template ID:</strong>{' '}
          <span style={{ color: templateId ? '#4ade80' : '#f87171' }}>
            {templateId || '❌ NOT SET'}
          </span>
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <strong>Public Key:</strong>{' '}
          <span style={{ color: publicKey ? '#4ade80' : '#f87171' }}>
            {publicKey ? `${publicKey.substring(0, 10)}...` : '❌ NOT SET'}
          </span>
        </div>
      </div>

      {!isConfigured && (
        <div style={{
          marginTop: '20px',
          padding: '15px',
          background: '#7f1d1d',
          borderRadius: '5px',
          border: '1px solid #ef4444'
        }}>
          <strong>⚠️ Configuration Missing!</strong>
          <ol style={{ marginTop: '10px', paddingLeft: '20px' }}>
            <li>Create/check <code>.env</code> file in root directory</li>
            <li>Add all three environment variables</li>
            <li>Restart development server (npm start)</li>
            <li>See <code>HOW_TO_GET_EMAILJS_KEYS.md</code> for help</li>
          </ol>
        </div>
      )}

      {isConfigured && (
        <div style={{
          marginTop: '20px',
          padding: '15px',
          background: '#14532d',
          borderRadius: '5px',
          border: '1px solid #4ade80'
        }}>
          <strong>✅ Configuration looks good!</strong>
          <p style={{ marginTop: '10px' }}>
            If form still doesn't work, check:
          </p>
          <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
            <li>EmailJS service is connected</li>
            <li>EmailJS template is saved</li>
            <li>Values in .env match EmailJS dashboard</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default EmailJSConfigTest;

