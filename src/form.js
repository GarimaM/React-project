import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Button,Checkbox,Form,Input,Select,TextArea,
} from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  handleSubmit(event) {
    console.log("triggered")
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
        <Form>
           <Form.Group widths='equal'>
          <Form.Input
            error={{content: "First name can not be empty"}}
            label="First Name"
            placeholder="First Name"
            id="form-input-first-name"
          />
          <Form.Input
            label="Last Name"
            placeholder="Last Name"
            id="form-input-last-name"
          />
          </Form.Group>
          <Form.Field
            control={Select}
            label='Gender'
            options={options}
            placeholder='Gender'
          />
          <Form.Field
          control={TextArea}
          label='About'
          placeholder='Explain your query in detail...'
        />
          <Form.Checkbox
          label='I agree to the Terms and Conditions'
          error={{
            content: 'You must agree to the terms and conditions',
            pointing: 'left',
          }}
        />
      <Form.Field control={Button} onClick={handleClick}>Submit</Form.Field>
        </Form>
    );
  }
}
export default NameForm;
