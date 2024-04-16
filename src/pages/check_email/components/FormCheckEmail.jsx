import React, { useReducer, useState } from 'react';
import axios from 'axios';
import TextField from '../../../components/TextField';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
import Spacer from '../../../components/Spacer';

export default function FormCheckEmail() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const initialState = {
    email: "",
  }

  const reducer = (state, action) => {
    if (action.type === "input") {
      return { ...state, [action.field]: action.value };
    }
    return state;
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "input",
      field: e.target.name,
      value: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const queryParams = {
        email: state.email
      };
      console.log(queryParams)
      const response = await axios.post(
        'http://127.0.0.1:8000/api/v1/check-email',
        null,
        { params: queryParams }
      );

      if (response.data.status == "success") {
        navigate("/verify-code", { state: { type: 1, email: state.email } });
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error('Error occurred during signup:', error);
    }
  }

  return (
    <div className="d-flex vh-100 align-items-center h-custom-2 px-5 ms-xl-4 pt-5 pt-xl-0 mt-xl-n5">
      <form className="xform" onSubmit={handleSubmit} style={{ width: "280px" }}>
        <h3 className="mb-3 pb-3 xtitle">Check Email</h3>
        {error && <div className="alert alert-danger" role="alert">
          {error}
        </div>}
        <TextField label="Email" name="email" type="email" onChange={handleChange} value={state.email} />
        <Spacer height="1rem" />
        <Button name="Submit" type="submit" />
      </form>
    </div>
  );
}