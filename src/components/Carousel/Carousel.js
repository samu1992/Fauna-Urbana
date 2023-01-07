import  'bootstrap/dist/css/bootstrap.min.css' ;
import './Carousel.css';
import foto3 from './foto3.jpg';
import foto1 from './foto1.jpg';
import foto2 from './foto2.jpg';

const ControlledCarousel = () => {
    return (
        <div className='container_carousel'>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={foto3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                        <h1><strong>9 DE CADA DIEZ CACHORROS</strong><br/>QUE NACEN NUNCA<br/>ENCUENTRAN UN HOGAR</h1>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src={foto1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1><strong>CUANDO LA VOLUNTAD EXISTE</strong><br/>HAY MIL RECURSOS</h1>                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src={foto2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                        <h1><strong>ADOPTA</strong><br/>Y SALVA UNA VIDA</h1>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default ControlledCarousel