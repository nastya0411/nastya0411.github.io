import logo from "./images/logo.png"
import search from "./images/search.svg"
import profile from "./images/profile.svg"
import liked from "./images/liked.svg"
import busket from "./images/busket.svg"
import { Link as RouterLink } from "react-router-dom";

function Header()
{

    const links = [
        {
            text: "Акции",
            url: "/",
        },
        {
            text: "Каталог",
            url: "/catalog",
        },
        {
            text: "О нас",
            url: "/",
        },
        {
            text: "Статьи",
            url: "/",
        },
        {
            text: "Подборки",
            url: "/",
        },
    ];
    
    return(
    
        <header className = "bg-black flex justify-between items-center p-8">
            <img className = "w-48" src = {logo} alt = "лого"/>

            <nav className = "flex gap-[80px] px-32 text-2xl">
                {links.map((elem, i) => { return <Link text={elem.text} url={elem.url} key={i} /> })}
            </nav>
            <div className = "flex gap-4">
                <img src = {search} alt = "поиск"/>
                <img src = {profile} alt = "профиль"/>
                <img src = {liked} alt = "избранное"/>
                <img src = {busket} alt = "корзина"/>
            </div>
        </header>
    );
}

function Link({text, url}) {
  return(
    <RouterLink className="text-white" to={url}>{text}</RouterLink>
  );
}


export default Header;