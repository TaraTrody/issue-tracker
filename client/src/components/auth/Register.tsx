import React , {Component, useState} from 'react';
import { Link } from 'react-router-dom'

interface FormInputs {
  name: string;
  email: string;
  password: string;
  errors: {};
}


class Register extends Component<{}, any> {
  constructor () {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      errors: {}
    }
  }

  const onChange = e => {
    this.setState({[e.target.id]: e.target.value})
  }

  onSubmit = e => {
    e.preventDefault();
  
    const newUser = {
    name: this.state.name,
    email: this.state.email,
    password: this.state.password,
    }
  console.log(newUser)
  }
  render() {
    const {errors} = this.state;
    return (
      <div className="container">
        <div className="row">
          <Link to='/' className="btn-flat waves-effect">
            <i className="material-icons left">keyboard_backspace</i> Back to Home
          </Link>
          <div className="col s12"
              style={{paddingLeft: "11.250px"}}
          >
            <h4>
              <b>Register</b> below
            </h4>
            <p className="grey-text text-darken-1">
              Already have an account?
            </p>

          </div>
        </div>
      </div>
    )
  }
};
