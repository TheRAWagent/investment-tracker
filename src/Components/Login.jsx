import React from 'react';
import {Form,Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import "../index.css";
//import GoogleLoginComponent from "./googleButtonComponent"

function Login() {
  return (
    <div className="container mt-5">
  <h1>Login</h1>

  {/* {<div className="row">
    <div className="col-sm-8">
      <div className="card">
        <div className="card-body">
          <form action="/login" method="POST">
            <div className="form-group">
              <label for="email">Email</label>
              <input type="email" className="form-control " name="username" />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input type="password" className="form-control " name="password" />
            </div>
            <button type="submit" className="btn btn-dark">Login</button>
          </form>

        </div>
      </div>
    </div>

    <div className="col-sm-4">
      <div className="card">
        <div className="card-body">
          <a className="btn btn-block btn-social btn-google" href="/auth/google" role="button">
            <i className="fab fa-google"></i>
            Sign In with Google
          </a>
        </div>
      </div>
    </div>

  </div>} */}
  <Form action="/login" method="post">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label for="email">Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
 
  <Button variant="success" type="submit" className="my-1">
    Sign in
  </Button>
  <br/> 
</Form>
    </div>
  )
}

export default Login