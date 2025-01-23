import './ContactForm.css';
import { useState, ChangeEvent, FormEvent } from 'react';

// Define the type and structure for the form data
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}
// Define the type and structure for the contact form properties.
interface ContactFormProps {
  onSubmit: (formData: FormData) => void;
}
// ContactForm component for handling user input and submission.
export default function ContactForm({ onSubmit }: ContactFormProps) {
  // State to hold the form data.
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
// handle input change and update the form.
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
// Handle form submission event and submit the form data to the parent component. 
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    // resets form after submission.
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Name Field */}
      <div className="name-form">
        <label> First Name:
        <input
          className='name-field'
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        </label>
        <label> Last Name:
        <input
          className='name-field'
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        </label>
      </div>
      {/* Email Field */}
      <div className="mail-form">
        <label> Email:
        <input
          className='mail-field'
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          size={60}
        />
        </label>
      </div>
      {/* Message Field */}
      <div className="message-form">
        <label htmlFor='message' className='message-label'> Message: </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          rows={10} cols={60}
        ></textarea>
      </div>
      {/* Submit Button */}
      <button className='submit-button' type="submit">Submit</button>
    </form>
  );
}