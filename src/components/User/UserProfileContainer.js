import React, { Component } from "react";
import { connect } from "react-redux";
import { setUserProfile } from "../../actions";
import UserProfile from "./UserProfile";
import PropTypes from "prop-types";

class UserProfileContainer extends Component {
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
  onClearForm = e => {
    console.log("clear form");
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
  onChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
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

  onImageChange = e => {
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
    const handlers = {
      onChange: this.onChange,
      onSubmit: this.onSubmit,
      onImageChange: this.onImageChange,
      onClearForm: this.onClearForm
    };
    return <UserProfile handlers={handlers} formData={this.state} />;
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
)(UserProfileContainer);
