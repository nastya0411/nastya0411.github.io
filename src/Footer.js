import logo from "./images/logo.png"

function Footer() {
    return(
        <div className = "flex flex-col items-center justify-end w-full bg-cover bg-center py-10 bg-[url(images/footer.png)]">  
            <img className = "w-48 " src = {logo} alt = "лого"/>
            <p className='p-7 border-t border-gray-500 text-white w-4/5 rounded-sm text-center text-x0.5 '>2024 Mon Parfum. Все права защищены </p>
        </div>
    );
}
export default Footer;