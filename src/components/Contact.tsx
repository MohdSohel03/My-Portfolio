import React, { useState, useRef } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | 'loading' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });

  const [fieldErrors, setFieldErrors] = useState<{
    [key: string]: string;
  }>({});

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = 'service_rs7spkg'; // You'll need to create this in EmailJS
  const EMAILJS_TEMPLATE_ID = 'template_85tk6aj'; // You'll need to create this in EmailJS
  const EMAILJS_PUBLIC_KEY = 'gfw60VbCzbF5d1FJX';

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const errors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setFormStatus({
        type: 'error',
        message: 'Please fix the errors above and try again.',
      });
      return;
    }

    setFormStatus({
      type: 'loading',
      message: 'Sending your message...',
    });

    try {
      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Send email using EmailJS
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current!,
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setFormStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.',
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setFieldErrors({});
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again or contact me directly.',
      });
    }

    // Clear status message after 8 seconds
    setTimeout(() => {
      setFormStatus({
        type: null,
        message: '',
      });
    }, 8000);
  };

  const contactInfo = [
    {
      icon: <Mail size={20} className="text-primary" />,
      title: 'Email',
      value: 'sa87*****@gmail.com',
      link: 'mailto:sa8764981@gmail.com',
    },
    {
      icon: <Phone size={20} className="text-primary" />,
      title: 'Phone',
      value: '93******52',
      link: 'tel:+9193******52',
    },
    {
      icon: <MapPin size={20} className="text-primary" />,
      title: 'Location',
      value: 'Mumbai, Maharashtra - 400043',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <h2 className="section-title reveal">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="reveal">
            <h3 className="text-2xl font-bold mb-6">Let's talk about your project</h3>
            <p className="text-text-secondary mb-8 leading-relaxed">
              I'm interested in freelance opportunities – especially ambitious or large
              projects. However, if you have other requests or questions, don't hesitate
              to contact me using the form.
            </p>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start group">
                  <div className="w-12 h-12 rounded-xl bg-surface-raised flex items-center justify-center mr-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-lg">{item.title}</h4>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-text-secondary hover:text-primary transition-colors duration-300 text-lg"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-text-secondary text-lg">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-surface rounded-xl border border-surface-raised">
              <h4 className="font-bold mb-3 flex items-center">
                <CheckCircle size={20} className="mr-2 text-accent" />
                Quick Response
              </h4>
              <p className="text-text-secondary">
                I typically respond to messages within 24 hours during business days.
              </p>
            </div>
          </div>
          
          <div className="card bg-surface p-8 reveal delay-200 border border-surface-raised">
            <form ref={form} onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-lg">
                    Name <span className="text-error">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`input-field ${fieldErrors.name ? 'border-error focus:ring-error' : ''}`}
                    placeholder="Your full name"
                    required
                    disabled={formStatus.type === 'loading'}
                  />
                  {fieldErrors.name && (
                    <p className="mt-1 text-error text-sm flex items-center">
                      <AlertCircle size={14} className="mr-1" />
                      {fieldErrors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-lg">
                    Email <span className="text-error">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`input-field ${fieldErrors.email ? 'border-error focus:ring-error' : ''}`}
                    placeholder="your.email@example.com"
                    required
                    disabled={formStatus.type === 'loading'}
                  />
                  {fieldErrors.email && (
                    <p className="mt-1 text-error text-sm flex items-center">
                      <AlertCircle size={14} className="mr-1" />
                      {fieldErrors.email}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block mb-2 font-medium text-lg">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="What's this about?"
                  disabled={formStatus.type === 'loading'}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium text-lg">
                  Message <span className="text-error">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`input-field resize-none ${fieldErrors.message ? 'border-error focus:ring-error' : ''}`}
                  placeholder="Tell me about your project or question..."
                  required
                  disabled={formStatus.type === 'loading'}
                ></textarea>
                {fieldErrors.message && (
                  <p className="mt-1 text-error text-sm flex items-center">
                    <AlertCircle size={14} className="mr-1" />
                    {fieldErrors.message}
                  </p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={formStatus.type === 'loading'}
                className={`btn btn-primary w-full flex items-center justify-center hover-lift text-lg py-4 ${
                  formStatus.type === 'loading' 
                    ? 'opacity-70 cursor-not-allowed' 
                    : 'hover:shadow-lg hover:shadow-primary/25'
                }`}
              >
                {formStatus.type === 'loading' ? (
                  <>
                    <Loader size={18} className="mr-2 animate-spin" /> 
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" /> 
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;