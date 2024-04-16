import logo from "./images/logo.png"
import profile from "./images/profile.svg"
import busket from "./images/busket.svg"
import { Link as RouterLink } from "react-router-dom";
import { CartContext } from "./contexts/CartContextProvider";
import { useContext } from "react";

function Header()
{

    const links = [
        {
            text: "Каталог",
            url: "/catalog",
        },
        {
            text: "О нас",
            url: "/about",
        },
        {
            text: "Подборки",
            url: "/podbor",
        },
    ];
    let { cart } = useContext(CartContext);
    
    return(
        <>
            <header className = "bg-black flex justify-between items-center p-4 h-28 fixed w-full z-10">
                <p className="text-white">{Object.keys(cart).length}</p>
                <RouterLink to = '/'><img className = "w-48" src = {logo} alt = "лого"/></RouterLink>
                <nav className = "flex gap-[80px] px-32 text-2xl">
                    {links.map((elem, i) => { return <Link text={elem.text} url={elem.url} key={i} /> })}
                </nav>
                <div className = "flex gap-4">
                <RouterLink to = '/enter'><img src = {profile} alt = "профиль"/></RouterLink>
                <RouterLink to = '/basket'><img src = {busket} alt = "корзина"/></RouterLink>
                </div>
            </header>
            <div className="pt-28" id="top" />
        </> 
    );
}

function Link({text, url}) {
  return(
    <RouterLink className="text-white" to={url}>{text}</RouterLink>
  );
}


export default Header;