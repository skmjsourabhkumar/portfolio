import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaCode } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Contact Me
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-start gap-10 p-6">
        {/* Contact Form */}
        <div className="contact-form w-full lg:w-2/2">
          <div className="form-container">
            <form>
              <div className="left-section">
                <div>
                  <input type="text" name="name" placeholder="Name" required />
                </div>
                <div>
                  <input type="email" name="email" placeholder="Email" required />
                </div>
                <div>
                  <input type="tel" name="phone" placeholder="Phone" required />
                </div>
                <div>
                  <input type="text" name="subject" placeholder="Subject" required />
                </div>
              </div>
              <div className="right-section">
                <textarea name="message" placeholder="Message" required></textarea>
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="w-full lg:w-1/3 flex flex-col items-center gap-6 text-white">
          <h3 className="text-xl font-bold mb-4">Connect with me</h3>
          <div className="flex gap-6 text-3xl">
            <a href="https://github.com/skmjsourabhkumar" target="_blank" rel="noopener noreferrer" className="hover:text-violet-500">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/sourabh-kumar-77997b22b/" target="_blank" rel="noopener noreferrer" className="hover:text-violet-500">
              <FaLinkedin />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-violet-500">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className="hover:text-violet-500">
              <FaTwitter />
            </a>
            <a href="https://leetcode.com/sourabh835210/" target="_blank" rel="noopener noreferrer" className="hover:text-violet-500">
              <FaCode />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
