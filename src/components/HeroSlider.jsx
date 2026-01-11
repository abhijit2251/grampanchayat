import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";

const HeroSlider = () => {
  return (
    // <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
    //   <div className="carousel-inner">
    //     <div className="carousel-item active">
    //       <img src={slider1} className="d-block w-100 hero-img" />
    //     </div>
    //     <div className="carousel-item">
    //       <img src={slider2} className="d-block w-100 hero-img" />
    //     </div>
    //   </div>

    //   <button
    //     className="carousel-control-prev"
    //     data-bs-target="#heroCarousel"
    //     data-bs-slide="prev"
    //   >
    //     <span className="carousel-control-prev-icon" />
    //   </button>
    //   <button
    //     className="carousel-control-next"
    //     data-bs-target="#heroCarousel"
    //     data-bs-slide="next"
    //   >
    //     <span className="carousel-control-next-icon" />
    //   </button>
    // </div>
    <div className="auto-carousel">
      <div className="track">
        <img src={slider1} />
        <img src={slider2} />
        <img src={slider3} />
      </div>
    </div>
  );
};

export default HeroSlider;
