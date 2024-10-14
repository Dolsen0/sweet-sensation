import Hero from "../components/Hero";
import Location from "../components/Location";
import Offerings from "../components/Offerings";

export default function Home() {
  return (
    <div className="home">

    <Hero />


        <section className="welcome">
        <h3>Welcome to Sweet Sensation by Fran!</h3>
        <p> At Sweet Sensation by Fran, every bite tells a story of Brazilian tradition, passion, and family. Whether it’s our famous brigadeiros, delicate pão de mel, or fresh sandwiches made to order, we believe every treat should be an experience. From our morning coffee to our Brazilian sweets, we're here to brighten your day.</p>
        </section>

        {/* Offerings */}

        <Offerings />

        {/* Testimonials */}

        <h3>What Our Customers Are Saying</h3>
        <blockquote>
            "The brigadeiros are to die for! I can't get enough of them!" - Maria S.
        </blockquote>

        <blockquote>
            "Best cake I've ever had!." - Carlos R.
        </blockquote>

        <blockquote>
            "The pão de mel is a must-try! So delicious!" - Ana M.
        </blockquote>
        < Location />
            
            {/* Hours */}
        <h3>Hours</h3>
        <p>Monday - Saturday: 9am - 7pm</p>
        <p>Sunday: 10am - 5pm</p>
    </div>
  );
}