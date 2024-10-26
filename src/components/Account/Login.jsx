import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';

function Login() {
    const { dispatch } = useAppContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        // Call API to authenticate
        const user = await loginAPI(email, password);
        dispatch({ type: 'LOGIN', payload: user });
    };

    return (
        <div>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;