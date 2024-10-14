import Location from "../components/Location";

export default function Contact() {
    return (
      <div className="contact">
        <h2>Contact Us</h2>
        <div className="image-container">
            <img 
              src="/images/o.jpg"
              alt="storefront"
              className="responsive-image"
            />
          </div>
        <p className="contact-text">
          Get in Touch with Us! We'd love to hear from you! Whether you have a question about 
          our menu, need to place a custom order, or just want to say hello, we're here to help.
        </p>
        <Location />
      </div>
    );
  }
  