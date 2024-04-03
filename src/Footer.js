import logo from "./images/logo.png"

function Footer() {
    return(
        <div className = "w-full bg-cover bg-center bg-[url(images/footer.png)] pt-8 ">  
            <div  className="px-40 flex flex-col gap-7">
                <img className = "w-48 flex flex-col" src = {logo} alt = "лого"/>
                <p className = "text-2xl text-left text-white tracking-[.4rem]">Подпишитесь на нашу рассылку новостей:</p>
                <p className = "text-lg text-left text-white tracking-[.4rem] ">Получайте обновления о новых поступлениях и специальных <br /> предложениях!</p>
                <form>
                    <label className="block">
                        <input  type="email" name="email" className="mt-1 px-3 py-2 bg-gray-900 block w-96 h-12 rounded-md text-sm text-white tracking-[.2rem]" placeholder="Введите вашу почту" />
                    </label>
                </form>      
            </div>
            <div className="flex flex-col items-center "><p className='p-7 border-t border-gray-500 text-white w-4/5 rounded-sm text-center text-base '>2024 Mon Parfum. Все права защищены </p></div>
        </div>
    );
}
export default Footer;