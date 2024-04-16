import Header from './Header';
import Footer from './Footer';
import Gallery from './Gallery';


function Podbor(){
    return(
        <div className = "font-medium bg-black tracking-[.25rem] grid gap-y-16 text-white">
        <Header />
        <div className = "bg-black flex flex-col items-center py-[16px]">
          <p className = "text-mainOrange text-6xl tracking-[.4rem] border-b border-orange-800 rounded-sm w-5/6 text-center p-3">Подборки ароматов</p>
          <div className='w-[1750px] py-[25px]'>
            <Gallery />
          </div>
        </div>
        <Footer />
        </div>
    )
}

export default Podbor;