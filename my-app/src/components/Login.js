import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async () => {
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (data.success) {
      alert('Login successful!');
    } else {
      alert(data.error || 'Login failed.');
    }
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password'); 
  };

  const handleSignUP = () => {
    navigate('/signup'); 
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Login</h2>
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <button onClick={handleLogin} style={{ width: '100%', padding: '10px', background: '#4CAF50', color: '#fff' }}>
        Login
      </button>
      <p style={{ textAlign: 'center', marginTop: '10px' }}>
        <span style={{ cursor: 'pointer', color: '#007BFF' }} onClick={handleForgotPassword}>
          Forgot Password?
        </span>
      </p>
      <div>
      <p style={{ textAlign: 'center', marginTop: '10px' }}>
        <span style={{ cursor: 'pointer', color: '#007BFF' }} onClick={handleSignUP}>
          or SignUp?
        </span>
      </p>
      </div>
    </div>
  );
}

export default Login;
