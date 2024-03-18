import { Carousel } from "@material-tailwind/react";
import first from "./images/catalog/1.png";
import second from "./images/catalog/2.png";
import third from "./images/catalog/3.png";
import forth from "./images/catalog/4.png";

function Pagination()
{
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

    let page = 4;
    let pageCounter = Math.ceil(cardsData.length / page);
    console.log("Pages: " + pageCounter);

    for(let j = 0; j < pageCounter; j++)
    {
        for (let i = 0; i < page; i++)
        {
            <Card name = {cardsData[i].name} img = {cardsData[i].img} price = {formatter.format(cardsData[i].price)}/>
        }
    }
}

function Cards()
{
    return(
        <Carousel className="rounded-xl">
            <Pagination />
        </Carousel>
    );
}

function Card({img, name, price})
{
    return(
        <div className = "flex flex-col items-center bg-[#101010] rounded-xl p-[20px]">
            <img className = "w-[200px]" src = {img} alt = "картиночки"/>
            <p className = "text-white">{name}</p>
            <div className = "flex gap-[10px]">
                <p className = "text-mainOrange">{price}</p>
                <p className = "text-white">100ml</p>
            </div> 
        </div>
    );
}

export default Cards;