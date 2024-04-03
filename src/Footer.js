import logo from "./images/logo.png"
import vk from "./images/socialmedia/vk.png"
import tg from "./images/socialmedia/tg.png"
import mail from "./images/socialmedia/mail.png"
import whatsapp from "./images/socialmedia/whatsapp.png"

function Footer() {
    const links = [
        {
            text: "Акции",
            url: "/",
        },
        {
            text: "Каталог",
            url: "/",
        },
        {
            text: "О нас",
            url: "/",
        },
        {
            text: "Подборки",
            url: "/",
        },
    ];
    return(
        <div className = "w-full bg-cover bg-center bg-[url(images/footer.png)] pt-8 ">  
            <div  className="px-40 flex flex-col gap-7">
                <img className = "w-48 flex flex-col" src = {logo} alt = "лого"/>
                <p className = "text-2xl text-left text-white tracking-[.4rem] font-semibold">Подпишитесь на нашу рассылку новостей:</p>
                <p className = "text-lg text-left text-white tracking-[.4rem]">Получайте обновления о новых поступлениях и <br /> специальных предложениях!</p>
                    <div className="grid grid-cols-2 ">
                        <div>
                            <form>
                                <label className="block">
                                    <input  type="email" name="email" className="mt-1 px-3 py-2 bg-gray-900 block w-2/3 h-12 rounded-lg text-sm text-white tracking-[.2rem] font-semibold" placeholder="Введите вашу почту"/>
                                </label>
                            </form>      
                        </div>
                        <div className="object-left ">
                            <button type = "button" className = "bg-mainOrange mt-1 px-3 py-2 flex self-center justify-center h-12  rounded-r-lg text-lg -m-[420px]  ">
                                <p className = "flex w-full place-self-center text-white tracking-[.25rem]">Отправить</p></button>
                        </div>
                            <div className = " flex justify-between items-center p-8 w-2 px-40 flex flex-col gap-7">
                                <div className = "flex gap-4">
                                    <img src = {vk} alt = "вконтакте"/>
                                    <img src = {tg} alt = "тг"/>
                                    <img src = {mail} alt = "мэйл"/>
                                    <img src = {whatsapp} alt = "вотсап"/>
                                </div>
                            </div>
                            <div className = "flex justify-between items-center -mt-72">
                                    <nav className = "flex flex-col px-96 text-lg text-left text-white tracking-[.4rem] gap-7">
                                        {links.map((elem, i) => { return <Link text={elem.text} url={elem.url} key={i} /> })}
                                    </nav>
                            </div>
                        </div>
                </div>
            <div className="flex flex-col items-center "><p className='p-7 border-t border-gray-500 text-white w-4/5 rounded-sm text-center text-base '>2024 Mon Parfum. Все права защищены </p></div>
        </div>
    );
 



function Link({text, url}) {
    return(
        <a className = "text-white" href = {url}>{text}</a>
    );
}
}
export default Footer;