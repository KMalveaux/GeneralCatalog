import Multicarousel from "../Multicarousel";
import { CategoryCarousel } from "../Multicarousel";
import "../../css/HomePage.css";

export default function Homepage() {
  return (
    <>
      <h1 className="homepage-carousel-headers">New Listings</h1>
      <div className="multiCarousel-homepage">
        <Multicarousel />
      </div>
      <h2 className="homepage-carousel-headers">Categories</h2>
      <div className="multiCarousel-homepage">
        <CategoryCarousel />
      </div>
      <h3 className="homepage-carousel-headers">Deals</h3>
      <div className="multiCarousel-homepage">
        <Multicarousel />
      </div>
    </>
  );
}
