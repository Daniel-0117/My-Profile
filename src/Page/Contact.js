import React from 'react';

const Contact = () => {
  return <form >
    <div className="mb-3">
  <label htmlFor="name" class="form-label">Full Name</label>
  <input type="text" name='name' className="form-control"  placeholder="Enter name here" />
</div>
<div className="mb-3">
  <label htmlFor="email" class="form-label">Email address</label>
  <input type="email" name='email' className="form-control" placeholder="name@example.com" />
</div>
<div className="mb-3">
  <label htmlFor="messagw" className="form-label">Message</label>
  <textarea name='message' className="form-control" rows="3"></textarea>
</div>
<button type="submit" className="btn btn-primary">Submit</button>  
  </form>
};

export default Contact;