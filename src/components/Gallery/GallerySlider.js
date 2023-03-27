import Slider from 'react-slick';
import dish1 from '../../img/photo/slider-dish-1.jpg';
import dish2 from '../../img/photo/slider-dish-2.jpg';
import dish3 from '../../img/photo/slider-dish-3.jpg';
import dish4 from '../../img/photo/slider-dish-4.jpg';
import dish5 from '../../img/photo/slider-dish-5.jpg';
import dish6 from '../../img/photo/slider-dish-6.jpg';


const GallerySlider = () => {
    const dishes = [dish1, dish2, dish3, dish4, dish5, dish6];
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        customPaging: function (i) {
            return (
                <img src={require(`../../img/photo/slider-dish-${i + 1}.jpg`)} alt="dish" />
            )
        },
        dotsClass: "slick-dots slick-thumb"
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

/* const GallerySlider = () => {
    const dishes = [dish1, dish2, dish3, dish4, dish5, dish6];

    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    {dishes.map(dish => (
                        <img key={dish} src={dish} />
                    ))
                    }
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <h2>Custom Paging</h2>
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


export default GallerySlider */