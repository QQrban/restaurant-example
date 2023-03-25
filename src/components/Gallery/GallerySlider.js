import Slider from "react-slick";
import dish1 from "../../img/photo/slider-dish-1.jpg";
import dish2 from "../../img/photo/slider-dish-2.jpg";
import dish3 from "../../img/photo/slider-dish-3.jpg";
import dish4 from "../../img/photo/slider-dish-4.jpg";
import dish5 from "../../img/photo/slider-dish-5.jpg";
import dish6 from "../../img/photo/slider-dish-6.jpg";

const GallerySlider = () => {

    const dishes = [dish1, dish2, dish3, dish4, dish5, dish6];



    let settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1084,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 705,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]
    };

    return (
        <div className="gallery-slider">
            <Slider {...settings}>
                {dishes.map(dish => (
                    <div className="slider-item" key={dish}>
                        <img src={dish} alt="dish" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default GallerySlider