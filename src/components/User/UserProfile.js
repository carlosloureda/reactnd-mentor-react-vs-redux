import React from "react";
import "./UserProfile.css";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
  ButtonToolbar
} from "react-bootstrap";

import PropTypes from "prop-types";

const UserProfile = props => {
  const { avatar, firstName, lastName, sex, email, loading } = props.formData;
  const { handlers } = props;

  if (loading) {
    return <h1>Loading ...</h1>;
  }
  return (
    <div className="col-sm-8 user-profile-form">
      <h1>User profile data</h1>
      <Form>
        <FormGroup className="row">
          <FormLabel>First Name</FormLabel>
          <FormControl
            type="text"
            name="firstName"
            value={firstName}
            placeholder="First Name"
            inline="true"
            onChange={handlers.onChange}
          />
        </FormGroup>
        <FormGroup className="row">
          <FormLabel>Last Name</FormLabel>
          <FormControl
            type="text"
            name="lastName"
            value={lastName}
            placeholder="Last Name"
            onChange={handlers.onChange}
          />
        </FormGroup>
        <FormGroup className="row">
          <FormLabel>Email</FormLabel>
          <FormControl
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handlers.onChange}
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
              checked={sex === "male"}
              onChange={handlers.onChange}
            />
            <Form.Check
              inline
              label="female"
              type="radio"
              name="sex"
              value="female"
              checked={sex === "female"}
              onChange={handlers.onChange}
            />
          </FormGroup>
        </FormGroup>
        <div className="row">
          <input
            className="fileInput"
            type="file"
            onChange={e => handlers.onImageChange(e)}
          />
          {avatar && (
            <div className="imgPreview">
              <img src={avatar} alt="avatar" />
            </div>
          )}
        </div>
        <FormGroup>
          <ButtonToolbar>
            <Button type="submit" onClick={handlers.onSubmit}>
              Submit
            </Button>
            <Button type="submit" onClick={handlers.onClearForm}>
              Clear Values
            </Button>
          </ButtonToolbar>
        </FormGroup>
      </Form>
    </div>
  );
};

UserProfile.propTypes = {
  formData: PropTypes.object.isRequired,

  handlers: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onImageChange: PropTypes.func.isRequired,
    onClearForm: PropTypes.func.isRequired
  }).isRequired
};

export default UserProfile;
