import React, { useState, useEffect,useCallback } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import './CSS/register.css'; // Assuming you have your CSS file

export const RegisterUser = ({ headers, onCreateUser }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        password: '',
        email: '',
        role_id: '',
    });
    const [roles, setRoles] = useState([]);


    const fetchRoles = useCallback(async () => {
        try {
            const response = await axios.get('http://localhost:9000/api/roles', { headers });
            setRoles(response.data);
        } catch (error) {
            console.error('Error fetching roles:', error);
        }
    }, [headers]);

    useEffect(() => {
        fetchRoles();
    }, [fetchRoles]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCreateSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/register', formData, { headers })
            .then(response => {
                console.log('Registration response:', response); // Log the response for debugging
                if (response.status === 201) {
                    Swal.fire({
                        icon: 'success',
                        text: 'User created successfully!',
                    });
                    onCreateUser(formData); // Call onCreateUser function with form data
                    // Optionally, you can reset the form data here
                    setFormData({
                        firstName: '',
                        lastName: '',
                        password: '',
                        email: '',
                        role_id: '',
                    });
                } else {
                    console.error('Unexpected response:', response);
                    Swal.fire({
                        icon: 'error',
                        text: 'Unexpected error occurred.',
                    });
                }
            })
            .catch(error => {
                console.error('Error during registration:', error);
                if (error.response && error.response.status === 500) {
                    // Internal Server Error
                    Swal.fire({
                        icon: 'error',
                        text: 'Email use already used.',
                    });
                }
            });
    };
    
    return (
        <div className="form_wrapper">
          <div className="title_container">
      <h2>Responsive Registration Form</h2>
    </div>
            <Form className="form_container" onSubmit={handleCreateSubmit}>
                <Form.Group controlId='name' className="row clearfix">
                    <Form.Label className="form-label col_half">Name</Form.Label>
                    <Form.Control type='text' name='firstName' value={formData.firstName} onChange={handleChange} placeholder="Enter name" className="col_half" />
                </Form.Group>
                <Form.Group controlId='user_id' className="row clearfix">
                    <Form.Label className="form-label col_half">User ID</Form.Label>
                    <Form.Control type='text' name='lastName' value={formData.lastName} onChange={handleChange} placeholder="Enter user ID" className="col_half" />
                </Form.Group>
                <Form.Group controlId='password' className="row clearfix">
                    <Form.Label className="form-label col_half">Password</Form.Label>
                    <Form.Control type='password' name='password' value={formData.password} onChange={handleChange} placeholder="Enter password" className="col_half" />
                </Form.Group>
                <Form.Group controlId='email' className="row clearfix">
                    <Form.Label className="form-label col_half">Email</Form.Label>
                    <Form.Control type='email' name='email' value={formData.email} onChange={handleChange} placeholder="Enter email" className="col_half" />
                </Form.Group>
                <Form.Group controlId='role_id' className="row clearfix">
                    <Form.Label className="form-label col_half">Role</Form.Label>
                    <Form.Control as='select' name='role_id' value={formData.role_id} onChange={handleChange} className="input_field select_option">
                        <option value=''>Select Role</option>
                        {roles.map((role) => (
                            <option key={role.role_id} value={role.role_id}>
                                {role.role_name}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Button className="submit-button" variant='primary' type='submit'>
                    Create User
                </Button>
            </Form>
        </div>
    );
};
