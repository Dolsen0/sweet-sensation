export default function Offerings() {
    const offerings = [
      { 
        name: "Brigadeiros", 
        description: "Soft, rich, and fudgy chocolate truffles rolled in sprinkles." 
      },
      { 
        name: "Cakes & Pastries", 
        description: "Perfect for birthdays, weddings, or everyday indulgence." 
      },
      { 
        name: "Coffee & Espresso Drinks", 
        description: "Enjoy a taste of Brazil with every sip." 
      },
      { 
        name: "Savory Treats & Sandwiches", 
        description: "Freshly made and perfect for a quick bite." 
      }
    ];
  
    return (
      <section className="offerings">
        <h3>Our Offerings</h3>
        <div className="offerings-flex">
          <div className="image-container">
            <img 
              src='../../images/o-13.jpg'
              alt="Delicious Offerings" 
              className="responsive-image"
            />
          </div>
  
          <ul className="offerings-list">
            {offerings.map((offering, index) => (
              <li key={index}>
                <strong>{offering.name}:</strong> {offering.description}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
  