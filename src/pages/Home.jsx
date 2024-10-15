import Hero from "../components/Hero";
import Hours from "../components/Hours";
import Location from "../components/Location";
import Offerings from "../components/Offerings";
import Testimonial from "../components/Testimonial";
import Welcome from "../components/Welcome";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <Welcome className="fade-in" />
      <Offerings className="fade-in" />
      <Testimonial />
      <Location />
      <Hours />
    </div>
  );
}
