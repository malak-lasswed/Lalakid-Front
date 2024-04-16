import React, { useState } from 'react';
import axios from 'axios';
import Button from '../../../components/Button';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import Spacer from '../../../components/Spacer';
import ButtonAddons from '../../../components/ButtonAddons';
import { type } from '@testing-library/user-event/dist/type';

export default function VerifyCode() {
  const navigate = useNavigate();
  const location = useLocation();
  const [state, setState] = useState({ code: "" });
  const [error, setError] = useState("");
  const [resendDisabled, setResendDisabled] = useState(false);
  const [resendCounter, setResendCounter] = useState(30);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const queryParams = {
        email: location.state.email,
        verification_code: state.code
      };
      const response = await axios.post(
        'http://127.0.0.1:8000/api/v1/verify-code',
        null,
        { params: queryParams }
      );
      if (response.data.status === "success") {
        if (location.state.type === 0) {
          navigate("/login");
        } else if (location.state.type === 1) {
          navigate("/reset-password", { state: { email: location.state.email, verificationCode: state.code } });
        }
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error('Error occurred during signup:', error);
    }
  }

  const handleResend = async () => {
    setResendDisabled(true);
    type = location.state.type;
    var link;
    if (type == 0) {
      link = 'http://localhost:8080/api/users/resend-verification-code';
    } else if (type == 1) {
      link = 'http://127.0.0.1:8000/api/v1/send-reset-password-email';
    }
    try {
      const queryParams = {
        email: location.state.email,
      };
      const response = await axios.post(
        link,
        null,
        { params: queryParams }
      );
      if (response.data.status === "success") {
        // Reset the countdown timer
        setResendCounter(30);
        // Start the countdown
        const intervalId = setInterval(() => {
          setResendCounter(prevCounter => {
            if (prevCounter === 1) {
              clearInterval(intervalId);
              setResendDisabled(false);
            }
            console.log(prevCounter);
            return prevCounter - 1;

          });
        }, 1000);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error('Error occurred during resend code:', error);
    }
  }

  return (
    <div className="d-flex vh-100 align-items-center h-custom-2 px-5 ms-xl-4 pt-5 pt-xl-0 mt-xl-n5">
      <form className="xform" onSubmit={handleSubmit} style={{ width: "280px" }}>
        <h3 className="mb-3 pb-3 xtitle">Verification</h3>
        {error && <div className="alert alert-danger" role="alert">
          {error}
        </div>}
        <ButtonAddons label="Code" nptname="code" npttype="text" onChange={handleChange} value={state.code} btnname={resendDisabled == true ? resendCounter : "Resend"} btntype="button" onClick={handleResend} disabled={resendDisabled} />
        <Spacer height="1rem" />
        <Button name="Verify" type="submit" />
      </form>
    </div>
  );
}
