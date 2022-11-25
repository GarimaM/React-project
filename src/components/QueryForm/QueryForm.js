import React, { useState } from "react";
import {
  Button,
  Form,
  Select,
  TextArea,
} from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

const QueryForm = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); 
  let formData = new FormData

  const handleChange = (ev, key) => {
    setValue({...value, [key]:ev.target.value})
  };

  const handleSubmit = (event) => {
    // alert("A name was submitted: " + value.firstName);
    setIsSubmitted(true)
    event.preventDefault();
  };

  const resetApp = () => {
    navigate('/');
  }

  return (
    <div id="form-container">
    {!isSubmitted &&
      <Form>
      <Form.Group widths="equal">
        <Form.Input
          // error={{ content: "First name can not be empty" }}
          label="First Name"
          placeholder="First Name"
          id="form-input-first-name"
          value={formData.firstName}
          onChange={(event) => handleChange(event, "firstName")}
        />
        <Form.Input
          label="Last Name"
          placeholder="Last Name"
          id="form-input-last-name"
          value={formData.lastName}
          onChange={(event) => handleChange(event, "lastName")}
        />
      </Form.Group>
      <Form.Field
        control={Select}
        label="Gender"
        options={options}
        placeholder="Gender"
        onChange={(event) => handleChange(event, "gender")}
      />
      <Form.Field
        control={TextArea}
        label="About"
        placeholder="Explain your query in detail..."
        value={formData.details}
          onChange={(event) => handleChange(event, "details")}
      />
      <Form.Checkbox
        label="I agree to the Terms and Conditions"
        onChange={(event) => handleChange(event, "terms")}
        value={formData.details}
        // error={{
        //   content: "You must agree to the terms and conditions",
        //   pointing: "left",
        // }}
        defaultChecked
      />
      <Form.Field control={Button} onClick={handleSubmit}>
        Submit
      </Form.Field>
    </Form>
    }
    {
      isSubmitted && 
          <div className="app">
      <div className="login-form">
        <div className="big-heading">Submitted</div>
        <div>Thank you {value.firstName} {value.lastName},</div>
        <div>your query was successfully submitted</div>
        <div className="button-container">
          <input type="back" value="Back to Log in" onClick={resetApp}/>
        </div>
      </div>
    </div>
    }
  </div>
  );
};
export default QueryForm;
