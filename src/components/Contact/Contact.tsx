import ContactForm from '../ContactForm/ContactForm';
import './Contact.css';

// Define the type and structure for the form data
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

// Export Contact Page
export default function Contact() {
  // Handles form submissions and logs the form data to the console rather than submitting to a server.
  const handleFormSubmit = (formData: FormData) => {
    console.log('Form submitted', formData);
  };

  return (
    // Main contact page content. Header and ContactForm component.
    <main className="contact-page">
      <h1 className='contact-header'>Contact Us!</h1>
      <ContactForm onSubmit={handleFormSubmit} />
    </main>
  );
}