import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Menambahkan useNavigate
import BackgroundWrapper from './Login/BackgroundWrapper';
import Button from './Login/Button';
import InputField from './Login/InputField';
import Ikonlogin from './Login/Ikonlogin';
import Remember from './Login/Remember';  // Mengimpor komponen Remember

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // state untuk Remember Me

  const navigate = useNavigate(); // Inisialisasi useNavigate

  const registeredUsers = {
    "rioga@email.com": "123",
    "ikhsan@email.com": "456",
    "subkhan@email.com": "789"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (registeredUsers[username] === password) {
      onLogin(); // Mengubah status login
      setError("");
      navigate('/'); // Navigasi ke halaman Home setelah login
    } else {
      setError("Email atau password salah. Silakan coba lagi.");
    }
  };

  return (
    <BackgroundWrapper>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        padding: '20px',
        backgroundColor: '#f4f4f4',
        borderRadius: '10px',
        textAlign: 'center',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <h2 style={{ marginBottom: '20px', color: '#333', fontSize: '24px' }}>Login</h2>

        <InputField 
          type="text"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <InputField 
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          showPasswordToggle={true}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />

        {error && <p style={{ color: 'red' }}>{error}</p>}

        {/* Menggunakan komponen Remember */}
        <Remember rememberMe={rememberMe} setRememberMe={setRememberMe} />

        <Button onClick={handleSubmit}>Masuk</Button>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          color: '#666',
          margin: '15px 0'
        }}>
          <hr style={{ flex: 1, border: 'none', borderTop: '1px solid #ccc' }} />
          <span style={{ margin: '0 10px' }}>Or login with</span>
          <hr style={{ flex: 1, border: 'none', borderTop: '1px solid #ccc' }} />
        </div>

        <Ikonlogin platform="Google" iconUrl="https://img.icons8.com/color/20/000000/google-logo.png">
          Login with Google
        </Ikonlogin>
        
        <Ikonlogin platform="Facebook" iconUrl="https://img.icons8.com/color/20/000000/facebook-new.png">
          Login with Facebook
        </Ikonlogin>

        <Ikonlogin platform="App X" iconUrl="https://img.icons8.com/ios-filled/20/000000/x.png">
          Login with App X
        </Ikonlogin>
      </div>
    </BackgroundWrapper>
  );
}

export default Login;
