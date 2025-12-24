import React from 'react';

const Contact = () => {
  const handleFormSubmit = (formData) => {
  
   const formInputData = Object.fromEntries(formData.entries());
   console.log(formInputData);
    
  };

  return (
    <section className="max-w-md px-4 py-12 mx-auto">
      <h1 className="mb-8 text-3xl font-semibold text-center text-white">Contact Us</h1>

      <form
         onSubmit={(e) => {
         e.preventDefault(); 
         const formData = new FormData(e.target);
        handleFormSubmit(formData); 
  }}
        className="space-y-6 text-white"
      >
       
        <input
          type="text"
          name="username"
          required
          placeholder="Enter your name"
          autoComplete="off"
          className="w-full py-2 placeholder-gray-400 bg-transparent border-b border-gray-600 focus:outline-none focus:border-white"
        />

      
        <input
          type="email"
          name="email"
          required
          placeholder=" Enter your email"
          autoComplete="off"
          className="w-full py-2 placeholder-gray-400 bg-transparent border-b border-gray-600 focus:outline-none focus:border-white"
        />

      
        <textarea
          name="message"
          rows="5"
          required
          placeholder="Your message"
          className="w-full py-2 placeholder-gray-400 bg-transparent border-b border-gray-600 resize-none focus:outline-none focus:border-white"
        ></textarea>

        
        <button
          type="submit"
          className="w-full px-6 py-3 font-medium text-white transition-all duration-200 bg-transparent border border-gray-600 rounded-md hover:border-white hover:bg-white/10"
         >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
