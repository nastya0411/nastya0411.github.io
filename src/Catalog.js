import first from "./images/catalog/1.png";
import second from "./images/catalog/2.png";
import third from "./images/catalog/3.png";
import fourth from "./images/catalog/4.png";
import fifth from "./images/catalog/5.png";
import sixth from "./images/catalog/6.png";
import seventh from "./images/catalog/7.png";
import eighth from "./images/catalog/8.png";
import ninth from "./images/catalog/9.png";
import tenth from "./images/catalog/10.png";
import eleventh from "./images/catalog/11.png";
import twelfth from "./images/catalog/12.png";
import Header from './Header';
import Footer from './Footer';

const cardsData = [
  {
      img: first,
      name: "Luxurious Elixir Rough",
      price: 20200

  },
  {
      img: second,
      name: "The Golden Legacy",
      price: 16000

  },
  {
      img: third,
      name: "Luxurious Elixir",
      price: 25000

  },
  {
      img: fourth,
      name: "Luxurious Essence",
      price: 16000

  },
  {
      img: fifth,
      name: "Aurum Aura",
      price: 24300

  },
  {
      img: sixth,
      name: "Gleaming Gilt",
      price: 17500

  },
  {
      img: seventh,
      name: "Gilded Elixir Rough",
      price: 24500

  },
  {
      img: eighth,
      name: "Golden Luminary",
      price: 18500

  },
  {
      img: ninth,
      name: "Decadent Opal",
      price: 28000

  },
  {
      img: tenth,
      name: "Gilded Elixir",
      price: 19700

  },
  {
    img: eleventh,
    name: "Glamourous Gilt",
    price: 21000

  },
  {
    img: twelfth,
    name: "Luxury Enigma",
    price: 14000

  },
]

const formatter = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
});

function Catalog()
{
  return(
    <div className = "font-medium bg-black tracking-[.25rem]">
        <Header />
        <div className = "flex flex-col items-center py-[16px] pb-5">
          <p className = "text-mainOrange text-6xl tracking-[.4rem] p-3 border-b border-orange-800 rounded-sm w-5/6 text-center">Каталог ароматов</p>
        </div>
        <div>
          {catalogCards()}
        </div>
        <Footer />
    </div>
  );
  
}

function catalogCards()
{
    const catalogCardsJsx = cardsData.map((elem, i) => {
      return <Card img={elem.img} price={formatter.format(elem.price)} name={elem.name} key={i} />
    });

    return (
        <div className="grid grid-cols-4 gap-7 fade-out-siblings pb-5 relative">
            {catalogCardsJsx}
      </div>
    );
}

function Card({img, name, price})
{
    return(
        <div className = "flex flex-col items-center bg-[#101010] rounded-xl p-5 w-[260px] ">
            <img  src = {img} alt = "картиночки"/>
            <p className = "text-white text-center tracking-[.1rem]">{name}</p>
            <div className = "flex gap-2.5  justify-beetwen">
                <p className = "text-mainOrange tracking-[.1rem]">{price}</p>
                <p className = "text-white tracking-[.1rem]">100ml</p>
            </div> 
        </div>
    );
}

export default Catalog;