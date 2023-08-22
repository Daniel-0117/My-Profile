import React, {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formState, setFormState] = useState({name: '', email: '', message: ''});

  const form = useRef();

  const [btnText, setBtnText] = useState('Submit');

  const handleChange = (e) => {
    e.preventDefault();
    setFormState({...formState, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    emailjs.sendForm('service_6j0zb4v', 'template_xnzart9', form.current, 'nZeMHEnU8WDoks32c')
    .then((result) => {
        console.log(result.text);
        setBtnText('Message Sent');
        setTimeout(() => {
        window.location.reload();
        }, 3000); 
      },
        (error) => {
        console.log(error.text);
        setBtnText('Failed to Send');
    });
  }

  return ( 
  <form ref={form} onSubmit={handleSubmit}>
    <div className="mb-3">
  <label htmlFor="name" class="form-label">Full Name</label>
  <input type="text" name='name' className="form-control"  placeholder="Enter name here" defaultValue={formState.name} onChange={handleChange} />
</div>
<div className="mb-3">
  <label htmlFor="email" class="form-label">Email address</label>
  <input type="email" name='email' className="form-control" placeholder="name@example.com" defaultValue={formState.email} onChange={handleChange} />
</div>
<div className="mb-3">
  <label htmlFor="messagw" className="form-label">Message</label>
  <textarea name='message' className="form-control" rows="3" defaultValue={formState.message} onChange={handleChange} ></textarea>
</div>
<button type="submit" className="btn btn-primary">btnText</button>  
  </form>
  );
};

export default Contact;