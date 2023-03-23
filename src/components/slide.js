import ReactCardSlider from "react-card-slider-component";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
function Slide(prop){
    const navigate = useNavigate()
    function slideClick(){
        navigate('/product')
    }
    const slides = [
        {image:"https://picsum.photos/200/300",title:"This is a title",description:"This is a description",clickEvent:slideClick},
        {image:"https://picsum.photos/600/500",title:"This is a second title",description:"This is a second description",clickEvent:slideClick},
        {image:"https://picsum.photos/700/600",title:"This is a third title",description:"This is a third description",clickEvent:slideClick},
        {image:"https://picsum.photos/500/400",title:"This is a fourth title",description:"This is a fourth description",clickEvent:slideClick},
        {image:"https://picsum.photos/200/300",title:"This is a fifth title",description:"This is a fifth description",clickEvent:slideClick},
        {image:"https://picsum.photos/800/700",title:"This is a sixth title",description:"This is a sixth description",clickEvent:slideClick},
        {image:"https://picsum.photos/300/400",title:"This is a seventh title",description:"This is a seventh description",clickEvent:slideClick},
    ] 
    Aos.init()
    return (
        <>
            <div className="container section-content mt-5" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <div className="d-flex justify-content-between mb-3">

                    <h2>Product</h2>
                    <button className="btn btn-dark text-white" onClick={() => navigate('/products')}>Show More...</button>
                </div>
                <ReactCardSlider slides={slides}/>
            </div>
        </>
    )
}
export default Slide;