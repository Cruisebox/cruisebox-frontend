import React from 'react';
import './Login.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <div className='p2'>
            <div className="form-section is-flex justify-content-center align-items-center">
                <div className='form-container p2 form-space'>
                    <div className='is-flex justify-content-center'>
                        <img src="../../../img/cruisebox.png" alt="logo" className='signup-logo' />
                    </div>
                    <Form>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Email" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" placeholder="Password" />
                        </FormGroup>
                        <div className='forgot-password-link-wrapper'>
                            <p className='fs-small pointer forgot-password-link'>Forgot Password?</p>
                        </div>
                        <Link to='/'>
                            <Button>
                                Login
                            </Button>
                        </Link>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login;