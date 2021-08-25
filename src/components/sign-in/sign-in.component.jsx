import React, { Component } from "react";
import { connect } from "react-redux";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
// import { auth, signInWithGoogle } from "../../firebase/firebase.util";
import {
  googleSingInStart,
  emailSingInStart,
} from "../../redux/user/user.action";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "shashi@abc.co",
      password: "dfdsfdsfs",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { emailSingInStart } = this.props;
    const { email, password } = this.state;
    emailSingInStart({ email, password });
    /*  try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }*/
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { googleSingInStart } = this.props;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            handleChange={this.handleChange}
            label="Email"
            type="email"
            value={this.state.email}
          />
          <FormInput
            name="password"
            handleChange={this.handleChange}
            label="Password"
            type="password"
            value={this.state.password}
          />
          <div className="button">
            <CustomButton type="submit">Submit Form</CustomButton>
            <CustomButton
              type="button"
              onClick={googleSingInStart}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSingInStart: () => dispatch(googleSingInStart()),
  emailSingInStart: ({ email, password }) =>
    dispatch(emailSingInStart({ email, password })),
});
export default connect(null, mapDispatchToProps)(SignIn);
