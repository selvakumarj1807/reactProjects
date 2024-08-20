import React, { useState } from 'react';
import axios from 'axios';
import './Email.css'; // Import the CSS file

function App() {
    const [email, setEmail] = useState('');
    const [responseMsg, setResponseMsg] = useState('');

    const sendEmail = () => {
        const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
        const emailBody = `Your 6 Digit OTP Code: ${otp}`;

        axios.post('http://localhost:5000/send-email', {
            to: email,
            subject: 'Email Verification',
            text: emailBody,
        }).then((response) => {
            setResponseMsg(response.data.message);
        }).catch((error) => {
            setResponseMsg('Failed to send email');
        });
    };

    return (
        <div className="container">
            <h2>Email Verification</h2>
            <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={sendEmail}>Send OTP</button>
            <p>{responseMsg}</p>
        </div>
    );
}

export default App;
