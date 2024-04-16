import React, { useReducer, useState } from 'react';
import axios from 'axios';
import TextField from '../../../components/TextField';
import TextArea from '../../../components/TextArea';
import Button from '../../../components/Button';
import Spacer from '../../../components/Spacer';
import DropdownList from '../../../components/DropdownList';
import { useNavigate, useLocation } from 'react-router-dom';

export default function FormInvChild() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const initialState = {
    name: "",
    age: "",
    sex: "male",
    pathologie: "",
    eyerate: "",
    language: "en"
  }

  const reducer = (state, action) => {
    if (action.type === "input") {
      return { ...state, [action.field]: action.value };
    }
    return state;
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  function generateRandomColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  }
  const handleChange = (e) => {
    dispatch({
      type: "input",
      field: e.target.name,
      value: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    const color = generateRandomColor();
    console.log(color);
    const queryBody = {
      'user_id': location.state.userid,
      'name': state.name,
      'preferred_language': state.language,
      'sex': state.sex,
      'pathologie': state.pathologie,
      'age': state.age,
      'eye_rate': state.eyerate,
      'color': color
    };
    e.preventDefault();
    console.log(queryBody);
    setIsLoading(true);
    setError(""); // Reset error state

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/v1/children',
        queryBody
      );

      if (response.data.status === "success") {
        navigate("/children", { state: { id: location.state.userid } });
      } else {
        setError(response.data.message || "Something went wrong!");
      }

    } catch (error) {
      setError("An error occurred. Please try again later.");
      console.error('Error occurred during submission:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="d-flex vh-100 align-items-center h-custom-2 px-5 ms-xl-4 pt-5 pt-xl-0 mt-xl-n5">
      <form className="xform" onSubmit={handleSubmit} style={{ width: "280px" }}>
        <h3 className="mb-3 pb-3 xtitle">Your Child Info</h3>
        {error && <div className="alert alert-danger" role="alert">
          {error}
        </div>}
        <TextField label="Name" name="name" type="text" onChange={handleChange} value={state.name} />
        <TextField label="Age" name="age" type="number" onChange={handleChange} value={state.age} />
        <DropdownList label="Sex" name="sex" options={["Male", "Female"]} selected={state.sex} onChange={handleChange} />
        <DropdownList label="Preferred language" name="language" options={["English", "Arabic"]} selected={state.language} onChange={handleChange} />
        <TextField label="Eye Rate" name="eyerate" type="number" onChange={handleChange} value={state.eyerate} />
        <TextArea label="Pathologie" name="pathologie" type="text" onChange={handleChange} value={state.pathologie} />
        <Spacer height="1rem" />
        <Button name="Submit" type="submit" disabled={isLoading} />
      </form>
    </div>
  );
}
