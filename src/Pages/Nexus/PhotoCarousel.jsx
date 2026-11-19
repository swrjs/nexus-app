import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { driveAsset } from "../../constants/driveImages";

const photo1 = driveAsset("NexusPage/compressed_galler/1.jpg");
const photo8 = driveAsset("NexusPage/compressed_gallery/2.jpg");
const photo3 = driveAsset("NexusPage/compressed_galler/3.jpg");
const photo5 = driveAsset("NexusPage/compressed_galler/5.jpg");
const photo6 = driveAsset("NexusPage/compressed_galler/6.jpeg");
const photo7 = driveAsset("NexusPage/compressed_gallery/7.jpg");
const photo2 = driveAsset("NexusPage/compressed_gallery/8.jpg");
const photo9 = driveAsset("NexusPage/compressed_gallery/9.jpg");
const photo10 = driveAsset("NexusPage/compressed_galler/10.jpg");
const photo11 = driveAsset("NexusPage/compressed_gallery/11.jpg");
const photo12 = driveAsset("NexusPage/compressed_galler/12.jpg");
const photo13 = driveAsset("NexusPage/compressed_gallery/2.jpg");
const photo14 = driveAsset("NexusPage/compressed_galler/3.jpg");
const photo15 = driveAsset("NexusPage/compressed_gallery/7.jpg");
const photo16 = driveAsset("NexusPage/compressed_gallery/4.jpg");
const photo17 = driveAsset("NexusPage/compressed_galler/5.jpg");
const photo18 = driveAsset("NexusPage/compressed_gallery/11.jpg");
import "./PhotoCarousel.css"; // Import the CSS file for styling

const PhotoCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false
  };

  const photos = [
    photo1,
    photo2,
    photo3,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
    photo12,
    photo13,
    photo14,
    photo15,
    photo16,
    photo17,
    photo18,
  ];

  return (
    <Slider {...settings} className="photo-carousel">
      {photos.map((photo, index) => (
        <div key={index} className="photo-carousel-item">
          <img
            src={photo}
            alt={`Photo ${index}`}
            className="photo-carousel-image"
          />
        </div>
      ))}
    </Slider>
  );
};

export default PhotoCarousel;
