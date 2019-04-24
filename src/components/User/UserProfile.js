import React, { Component } from "react";
import "./UserProfile.css";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
  ButtonToolbar
} from "react-bootstrap";

export default class UserProfile extends Component {
  static propTypes = {};

  state = {
    preview: null,
    file: ""
  };

  handleImageChange = e => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      console.log("reader.result: ", reader.result);
      this.setState({
        file: file,
        preview: reader.result
      });
    };

    reader.readAsDataURL(file);
  };

  render() {
    let { preview } = this.state;

    return (
      <div className="col-sm-8 user-profile-form">
        <h1>User profile data</h1>
        <Form>
          <FormGroup className="row">
            <FormLabel>First Name</FormLabel>
            <FormControl
              type="text"
              name="firstName"
              value=""
              placeholder="First Name"
              inline="true"
            />
          </FormGroup>
          <FormGroup className="row">
            <FormLabel>Last Name</FormLabel>
            <FormControl
              type="text"
              name="lastName"
              value=""
              placeholder="Last Name"
            />
          </FormGroup>
          <FormGroup className="row">
            <FormLabel>Email</FormLabel>
            <FormControl
              type="email"
              name="email"
              value=""
              placeholder="Email"
            />
          </FormGroup>
          <FormLabel className="row">Sex</FormLabel>
          <FormGroup className="row">
            <FormGroup>
              <Form.Check
                inline
                label="male"
                type="radio"
                name="sex"
                value="male"
              />
              <Form.Check
                inline
                label="female"
                type="radio"
                name="sex"
                value="female"
              />
            </FormGroup>
          </FormGroup>
          <div className="row">
            <input
              className="fileInput"
              type="file"
              onChange={e => this.handleImageChange(e)}
            />
            {preview && (
              <div className="imgPreview">
                <img src={preview} alt="avatar" />
              </div>
            )}
          </div>
          <FormGroup>
            <ButtonToolbar>
              <Button type="submit">Submit</Button>
              <Button type="submit">Clear Values</Button>
            </ButtonToolbar>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
