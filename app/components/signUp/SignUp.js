import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return(
        <div className='p2'>
            <div className="form-section is-flex justify-content-center align-items-center">
                <div className='form-container p2 form-space'>
                    <div className='is-flex justify-content-center'>
                        <img src="../../../img/cruisebox.png" alt="logo" className='signup-logo' />
                    </div>
                    <Form>
                        <FormGroup>
                            <Label for="firstname">Firstname</Label>
                            <Input type="text" name="firstname" id="firstname" placeholder="Firstname" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="lastname">Lastname</Label>
                            <Input type="text" name="lastname" id="lastname" placeholder="Lastname" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Email" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" placeholder="Password" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="confirmpassword">Confirm Password</Label>
                            <Input type="password" name="confirmpassword" id="confirmpassword" placeholder="Confirm Password" />
                        </FormGroup>
                        <Link to='/'>
                            <Button>
                                Sign Up
                            </Button>
                        </Link>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;