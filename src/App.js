import React, { useState } from "react";
import './index.css';

function App() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for volunteering, " + formData.name + "!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Welcome to Our NGO</h1>
      </header>
      <main className="main">
        <section className="section fade-in">
          <h2>About Us</h2>
          <p>
            We are dedicated to making a difference in the lives of those in need.
            Our mission is to empower communities through education, healthcare, and sustainable development.
          </p>
        </section>

        <section className="section fade-in">
          <h2>Volunteer With Us</h2>
          <form className="volunteer-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Why do you want to volunteer?"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
