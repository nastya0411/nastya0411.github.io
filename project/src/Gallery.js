import french from "./images/gallery/frenchFart.png";
import gift from "./images/gallery/gift.png";
import wood from "./images/gallery/woodCum.png";
import season from "./images/gallery/season.png";
import east from "./images/gallery/arabFunny.jpg";
import limit from "./images/gallery/limited.png";
import daily from "./images/gallery/everyday.png";

function Gallery()
{
    return (
      <div className="grid grid-cols-2 ">
            <div>
                <img className="object-cover  w-[650px] " src = {french} alt="бутылка из галереи"/>
            </div>
            <div>
                <img className="object-cover w-[3000px] " src = {gift} alt="бутылка из галереи"/>
            </div>
            <div>
                <img className="object-cover object-center" src = {wood} alt="бутылка из галереи"/>
            </div>
            <div>
                <img className="object-cover object-center" src = {season} alt="бутылка из галереи"/>
            </div>
            <div className = 'grid grid-cols-2' >
                <img className="object-cover object-center" src = {east} alt="бутылка из галереи"/>
                <img className="object-cover object-center" src = {limit} alt="бутылка из галереи"/>
            </div>
            <div>
                <img className="object-cover object-center" src = {daily} alt="бутылка из галереи"/>
            </div>

        
            {/* <div className="w=[660px]">
            <Image className = 'h-[660px]' src = {french}/></div>
            <Image src = {gift}/>
            <Image src = {wood}/>
            <Image src = {season}/>
            <Image src = {east}/>
            <Image src = {limit}/>
            <Image src = {daily}/> */}
      </div>
    );
}
// function Image({src})
// {
//     return(
//         <div>
//             <img className="object-cover object-center" src = {src} alt="бутылка из галереи"/>
//         </div>
//     );
// }

export default Gallery;