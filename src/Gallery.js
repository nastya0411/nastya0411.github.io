import french from "./images/gallery/frenchFart.png";
import gift from "./images/gallery/gift.png";
import wood from "./images/gallery/woodCum.png";
import season from "./images/gallery/season.png";
import east from "./images/gallery/arabFunny.jpg";
import limit from "./images/gallery/limited.png";
import daily from "./images/gallery/everyday.png";
import woman from "./images/gallery/woman.jpg";
import man from "./images/gallery/man.jpg";
import './Gallery.css';

function Gallery()
{
    return (
      <div className="grid grid-cols-3 gap-14 fade-out-siblings">
            <div>
                <img className="object-cover" src = {french} alt="бутылка из галереи"/>
            </div>
            <div>
                <img className="object-cover" src = {gift} alt="бутылка из галереи"/>
            </div> 
            <div>
                
            <img className="object-cover" src = {woman} alt="бутылка из галереи"/>
            </div>
            <div>
                <img className="object-cover" src = {wood} alt="бутылка из галереи"/>
            </div>
            <div>
                <img className="object-cover" src = {season} alt="бутылка из галереи"/>
            </div> 
            <div>
                <img className="object-cover" src = {man} alt="бутылка из галереи"/>
            </div>
            <div>
                <img className="object-cover" src = {east} alt="бутылка из галереи"/>
            </div>
            <div>
            <img className="object-cover" src = {limit} alt="бутылка из галереи"/>
            </div>
            <div>
                <img className="object-cover" src = {daily} alt="бутылка из галереи"/>
            </div>
      </div>
    );
}


export default Gallery;