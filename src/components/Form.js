import React from 'react'
import "./Form.css";

const Form = () => {
  return (
    <div className='form-con'>
        <h1 className='head'>Do you have a message for me?</h1>
        <h3 className='sub'>Drop it here!</h3>
        <form>
            <label>Your Name</label>
            <input type="text" placeholder="Enter your name" />
            <label>Your Email</label>
            <input type="email" placeholder="Enter your Email" />
            <label>Subject</label>
            <input type="text" placeholder="Subject" />
            <label>Message</label>
            <textarea placeholder="Message" rows="6"></textarea>
            <button>Send Message</button>
        </form>
    </div>
  )
}

export default Form