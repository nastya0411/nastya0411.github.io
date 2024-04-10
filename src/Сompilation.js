import Header from './Header';
import Footer from './Footer';
import first from "./images/catalog/1.png";


function Сompilation(){
    return(
        <div className = "font-medium bg-black tracking-[.25rem] grid gap-y-16 text-white">
        <Header />
            <div className = "flex flex-col items-center py-[16px] pb-5">
                <p className = "text-mainOrange text-6xl tracking-[.4rem] p-3 border-b border-orange-800 rounded-sm w-5/6 text-center">Подборки ароматов</p>
            </div>
                <div className="flex justify-space-around border-black border-b gap-28 justify-center items-center px-64 h-44 py-5">
                    <div className="flex justify-center">
                        <img src={first} className="h-64 cursor-pointer" alt="x" />
                    </div>
                    <div className='flex flex-col text-left mt-5 text-lg'>
                        <p>Верхние ноты: апельсин, виноград, яблоко</p>
                        <p>Средние ноты Белые розы, жасмин</p>
                        <p>Базовые ноты: амбра, ваниль, сандаловое дерево</p>
                    </div>
                    <div><p className='text-white text-4xl tracking-[.1rem]'>25000</p></div>
                    <div><p className='text-white text-4xl tracking-[.1rem]'>25000</p></div>
            </div>
        <Footer />
        </div>
    )
}

export default Сompilation;