import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignup = async () => {
    const response = await fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
    });
    const data = await response.json();
    if (data.success) {
      alert('Signup successful!');
      navigate('/'); // Redirect to the login page
    } else {
      alert(data.error || 'Signup failed.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Signup</h2>
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <button onClick={handleSignup} style={{ width: '100%', padding: '10px', background: '#4CAF50', color: '#fff' }}>
        Signup
      </button>
      <p style={{ marginTop: '10px' }}>
        Want to login? <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => navigate('/')}>Login here</span>
      </p>
    </div>
  );
}

export default Signup;
