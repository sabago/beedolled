import * as React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";

import "./styles/index.css";

export function Contact()  {
    const [state, setState] = useState({
      name:"",
      email:"",
      subject: "",
      message:""
    });
    const [formErrors, setFormErrors] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [errors, setErrors] = useState(false);
    //Email validation
    const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    // Form validation
    const formValid = ( formErrors: any, state: any ) => {
      let valid = true;
      // Validate form errors being empty
      Object.values(formErrors).forEach((val: any) => {
        val.length > 0 && (valid = false);
      });
        // Validate the form was filled out
      if(state.name.length <=3) {
        valid = false;
        formErrors.name = "Name must be at least 3 letters long";
      }
      if(typeof state.name !== "undefined"){
        if(!state.name.match(/^[a-zA-Z\d\s]+$/)){
          valid = false;
          formErrors.name = "Only letters allowed for name";
        }  
      }

      //Email
      if(state.email.length===0){
        valid = false;
        formErrors["email"] = "Email cannot be empty";
      }
      if(typeof state.email !== "undefined"){
        if(!emailRegex.test(String(state.email).toLowerCase())){
            valid = false;
            formErrors["email"] = "Email is not valid";
          }
      }  

      if(state.subject.length <=3) {
        valid = false;
        formErrors.subject = "Subject must be at least 3 letters long";
      }

      if(state.message.length <=10) {
        valid = false;
        formErrors.message = "Message must be at least 10 characters long";
      }     
      setFormErrors(formErrors);
      setErrors(true);  
      return valid;
    };
  
    const handleSubmit = (evt: any) => {
      evt.preventDefault();  
      if (formValid(formErrors,state)) {
        // Set template params
        let templateParams = {
          name: state.name,
          email: state.email,
          subject: state.subject,
          message: state.message,
        };

        emailjs.send('service_p29mryi', 'template_b5wg8r7', templateParams, 'user_Iza8lLVZ2tkUfZ5STVrwz');
  
        console.log(`
          --SUBMITTING--
          Name: ${state.name}
          Email: ${state.email}
          Subject: ${state.subject}
          Message: ${state.message}
        `);

        resetForm();
      } else {
        // Handle form validation failure
        console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
        console.log(formErrors);
      }
    };
  
    // Function to reset form
    const resetForm = () => {
      setState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    };

    const resetErrors = () => {
      setFormErrors({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }
  
    const handleChange = (evt:any) => {
      evt.preventDefault();
      resetErrors();
      const value = evt.target.value;
      setState({
        ...state,
        [evt.target.name]: value
      });
      setErrors(false);
    };
  
    return(
      <div id="contact">
        <h1 style={{color:"red"}}> Contact Us</h1>
          We are thrilled to have you visit our location at Krish Mall 6th Floor in Bugolobi.<br/>
          You can also call us @ +(256)078-274-6341<br/>
          Got questions, or conerns? Please leave us a note below!
        <form id="contact-form" onSubmit={handleSubmit} noValidate>
          <div>
            <input
              type="name"
              name="name"
              value={state.name}
              className={`form-control formInput ${formErrors.name.length > 0 ? 'error' : null}`}
              onChange={handleChange}
              placeholder='Name'
              autoComplete="name"
              ></input>
              {formErrors.name.length > 0 && (
                <span className='errorMessage'>{formErrors.name}</span>
              )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={state.email}
              className={`form-control formInput ${formErrors.email.length > 0 ? 'error' : null}`}
              onChange={handleChange}
              placeholder='Email'
              autoComplete="email"
            ></input>
            {formErrors.email.length > 0 && (
              <span className='errorMessage'>{formErrors.email}</span>
            )}
          </div>
          <div>
            <input
              type='subject'
              name='subject'
              value={state.subject}
              className={`form-control formInput ${formErrors.subject.length > 0 ? 'error' : null
              }`}
              onChange={handleChange}
              placeholder='Subject'
            ></input>
            {formErrors.subject.length > 0 && (
              <span className='errorMessage'>{formErrors.subject}</span>
            )}
          </div>
          <div>
            <textarea 
              className="contact-textarea"
              rows={5} 
              name="message" 
              value={state.message} 
              className={`form-control formInput ${formErrors.message.length > 0 ? 'error' : null
              }`}
              placeholder="Message" 
              onChange={handleChange}/>
                {errors && formErrors.message.length > 0 && (
                <span className='errorMessage'>{formErrors.message}</span>
                )}
          </div>
          <input type="submit"  style={{fontSize:16}}/>
        </form>
      </div>
    );
}