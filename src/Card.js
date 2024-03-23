import { Carousel } from "@material-tailwind/react";
import first from "./images/catalog/1.png";
import second from "./images/catalog/2.png";
import third from "./images/catalog/3.png";
import forth from "./images/catalog/4.png";

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
        img: forth,
        name: "Luxurious Essence",
        price: 16000

    },
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
        img: forth,
        name: "Luxurious Essence",
        price: 16000

    },
    {
        img: third,
        name: "Luxurious Elixir",
        price: 25000

    },
    {
        img: forth,
        name: "Luxurious Essence",
        price: 16000

    },
]

const formatter = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
});

function Pages({firstPage, lastPage})
{
    const cards = cardsData.slice(firstPage,lastPage).map(
        (elem, i) => {
            return <Card img={elem.img} price={formatter.format(elem.price)} name={elem.name} key={i} />
        }
    );
    return(
        <div className = "flex gap-7">
            {cards}
        </div>
    );
}

function Cards()
{
    return(
        <Carousel className="rounded-xl" navigation={() => (<div></div>)}>
            <Pages firstPage = {0} lastPage = {4}/>
            <Pages firstPage = {4} lastPage = {8}/>
            <Pages firstPage = {8} lastPage = {10}/>
        </Carousel>
    );
}

function Card({img, name, price})
{
    return(
        <div className = "flex flex-col items-center bg-[#101010] rounded-xl p-5 w-[260px] ">
            <img  src = {img} alt = "картиночки"/>
            <p className = "text-white text-center tracking-[.15rem]">{name}</p>
            <div className = "flex gap-2.5  justify-beetwen">
                <p className = "text-mainOrange tracking-[.2rem]">{price}</p>
                <p className = "text-white tracking-[.2rem]">100ml</p>
            </div> 
        </div>
    );
}

export default Cards;