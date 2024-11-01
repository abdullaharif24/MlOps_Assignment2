import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  
  const navigate = useNavigate(); // Initialize useNavigate

  const handleResetPassword = async () => {
    const response = await fetch('http://localhost:5000/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, oldPassword, newPassword }),
    });
    const data = await response.json();
    if (data.success) {
      alert(data.message);
      navigate('/');
    } else {
      alert(data.error || 'Failed to reset password.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Reset Password</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <input
        type="password"
        placeholder="Previous Password"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <button onClick={handleResetPassword} style={{ width: '100%', padding: '10px', background: '#4CAF50', color: '#fff' }}>
        Reset Password
      </button>
      <p style={{ marginTop: '10px' }}>
        Remembered your password? <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => navigate('/')}>Login here</span>
      </p>
    </div>
  );
}

export default ForgotPassword;
