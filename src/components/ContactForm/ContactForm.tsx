import './ContactForm.css'
import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface ContactFormProps {
  onSubmit: (formData: FormData) => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="name-form">
        <label> First Name:
        <input
          className='name-field'
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          aria-label="First Name"
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
          aria-label="Last Name"
        />
        </label>
      </div>
      <div className="mail-form">
        <label> Email:
        <input
          className='mail-field'
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          aria-label="Email"
          size={60}
        />
        </label>
      </div>
      <div className="message-form">
        <label htmlFor='message' className='message-label'> Message: </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          aria-label="Message"
          rows={10} cols={60}
        ></textarea>
      </div>
      <button className='submit-button' type="submit">Submit</button>
    </form>
  );
}