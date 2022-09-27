import React from 'react'
import useContact from '../hooks/useContact'
import {Form} from 'react-bootstrap'
import '../styles/ContactForm.css'

const ContactForm = ({handleClose}) => {

    const {form, handleChange,handleSubmit} = useContact()

    return (
        <>
            <span class="contact-icon material-icons material-icons-outlined" onClick={handleClose}>
                close
            </span>
            <Form className="formContainer--form" onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label></Form.Label>
                    <Form.Control id="inputContact" type="text" placeholder='Name' name="name" value={form.name} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3 formContainer--form__email" controlId="email">
                    <Form.Label></Form.Label>
                    <Form.Control id="inputContact" type="email" placeholder="name@example.com" name="email" value={form.email} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3 formContainer--form__topic">
                    <Form.Label></Form.Label>
                    <Form.Control id="inputContact" type="text" placeholder='Topic' name="topic" value={form.topic} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3 formContainer--form__message">
                    <Form.Label></Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Message" name="message" value={form.message} onChange={handleChange} />
                </Form.Group>
                <button id="formContainer--form__button" className="hero-container__button" type="submit">Send Signal</button>
            </Form>
        </>
    )
}

export default ContactForm