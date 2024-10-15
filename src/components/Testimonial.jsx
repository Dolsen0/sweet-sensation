export default function Testimonial() {
    const testimonials = [
      {
        text: "The brigadeiros are to die for! I can't get enough of them!",
        author: "Maria S."
      },
      {
        text: "Best cake I've ever had!",
        author: "Carlos R."
      },
      {
        text: "The pão de mel is a must-try! So delicious!",
        author: "Ana M."
      },
    ];
  
    return (
      <div className="testimonial-flex">
        <h3>What Our Customers Are Saying</h3>
        <div className="testimonial-list">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-author">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  