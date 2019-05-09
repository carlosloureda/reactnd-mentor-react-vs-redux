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
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setUserProfile } from "../../actions";

class UserProfile extends Component {
  static propTypes = {
    userName: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    setUserProfile: PropTypes.func.isRequired
  };

  state = {
    avatar: null,
    firstName: "",
    lastName: "",
    email: "",
    sex: "",
    file: "",
    loading: false,
    isThanosAvatar: true
  };
  getDataFromGlobalState = () => {
    const { avatar, userName } = this.props;
    let userNameSplitted = userName.split(", ");
    let firstName = "Thanos";
    let lastName = "";
    if (userNameSplitted) {
      firstName = userNameSplitted[0];
      lastName = userNameSplitted.length > 1 ? userNameSplitted[1] : lastName;
    }
    return { avatar, firstName, lastName };
  };
  componentDidMount = () => {
    console.log("this.pros: ", this.props);
    this.setState({ loading: true });
    // Fake API retrieval
    let { avatar, firstName, lastName } = this.getDataFromGlobalState();
    setTimeout(() => {
      this.setState({
        avatar: avatar ? avatar : "/img/thanos.jpg",
        firstName,
        lastName,
        email: "thanos_titan@marvel.com",
        sex: "male",
        file: "",
        loading: false,
        isThanosAvatar: true
      });
    }, 1500);
  };
  onChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };
  resetState = e => {
    e.preventDefault();
    this.setState({
      avatar: null,
      firstName: "",
      lastName: "",
      email: "",
      sex: "",
      file: ""
    });
  };
  onSubmit = e => {
    e.preventDefault();
    /* Instead of saving file as it is in local folder, everytime you submit the form it will 
    change between the default thanos avatar into the ironman avatar and the other way round */

    let newAvatar = this.state.isThanosAvatar
      ? "/img/ironman.png"
      : "/img/thanos.jpg";

    this.setState(state => ({
      avatar: newAvatar,
      isThanosAvatar: !state.isThanosAvatar
    }));
    let userName = this.state.firstName;
    if (this.state.lastName) {
      userName = `${this.state.firstName}, ${this.state.lastName}`;
    }
    console.log("the userName is: ", userName);
    this.props.setUserProfile(userName, newAvatar);
  };

  handleImageChange = e => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        avatar: reader.result
      });
    };

    reader.readAsDataURL(file);
  };

  render() {
    let { avatar, firstName, lastName, sex, email } = this.state;

    if (this.state.loading) {
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
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup className="row">
            <FormLabel>Last Name</FormLabel>
            <FormControl
              type="text"
              name="lastName"
              value={lastName}
              placeholder="Last Name"
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup className="row">
            <FormLabel>Email</FormLabel>
            <FormControl
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={this.onChange}
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
                onChange={this.onChange}
              />
              <Form.Check
                inline
                label="female"
                type="radio"
                name="sex"
                value="female"
                checked={sex === "female"}
                onChange={this.onChange}
              />
            </FormGroup>
          </FormGroup>
          <div className="row">
            <input
              className="fileInput"
              type="file"
              onChange={e => this.handleImageChange(e)}
            />
            {avatar && (
              <div className="imgPreview">
                <img src={avatar} alt="avatar" />
              </div>
            )}
          </div>
          <FormGroup>
            <ButtonToolbar>
              <Button type="submit" onClick={this.onSubmit}>
                Submit
              </Button>
              <Button type="submit" onClick={this.resetState}>
                Clear Values
              </Button>
            </ButtonToolbar>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userName: state.userName,
  avatar: state.avatar
});
const mapDispatchToProps = dispatch => ({
  setUserProfile: (userName, newAvatar) =>
    dispatch(setUserProfile(userName, newAvatar))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
