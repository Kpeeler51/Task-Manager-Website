import ContactForm from '../ContactForm/ContactForm';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default function Contact() {
  const handleFormSubmit = (formData: FormData) => {
    console.log('Form submitted', formData);
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <ContactForm onSubmit={handleFormSubmit} />
    </div>
  );
}