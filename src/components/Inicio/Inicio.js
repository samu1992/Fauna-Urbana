import Aportes from "../Aportes/Aportes";
import ControlledCarousel from "../Carousel/Carousel";
import Testimonios from "../Testimonios/Testimonios";

const Inicio = () => {
    return (
        <div>
            <ControlledCarousel />
            <Aportes />
            <hr />
            <Testimonios />
        </div>
    )
}

export default Inicio