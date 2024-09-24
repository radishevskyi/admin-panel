import { useState } from 'react';
import { useAuth } from '@/shared/context/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className='login'>
      <form className='login-container' onSubmit={handleSubmit}>
        <h1 className='login-title'>Log in to Document flow</h1>
        <div className='input-box'>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FontAwesomeIcon icon={faUser} className='input-box-icon' />
        </div>
        <div className='input-box'>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FontAwesomeIcon icon={faLock} className='input-box-icon' />
        </div>
        <button className='btn-login' type='submit'>
          Log in
        </button>
      </form>
    </div>
  );
}
