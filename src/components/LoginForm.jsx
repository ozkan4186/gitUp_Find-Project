import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [values, setValues] = useState("")

  const navigate=useNavigate()

const handleSubmit=(e)=>{
e.preventDefault()
navigate("/home")
setValues("")
 sessionStorage.setItem("values", JSON.stringify(values));
}

  return (
    <div className="container">
      <Form className="form" onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label  >ENTER YOUR GİTHUB USERNAME</Form.Label>
          <Form.Control  className="p-3" type="text" value={values} onChange={(e)=> setValues(e.target.value) }  placeholder="Please Enter Your Username"  reguired />
        </Form.Group>

        <Button variant="danger" className="p-3 fs-2 fw-bold" type="submit" disabled={!values} >
          LOGİN
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
