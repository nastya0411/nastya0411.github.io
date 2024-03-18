// import bg from './images/background.jpg';
import Header from './Header';
import Cards from './Card';
import bottleMain from "./images/bottleMain.png";
import './App.css';
import bottleAbout from './images/bottleAbout.png';

function Main()
{
    return(
        <main className = "font-Med bg-black" >
        <Header />
        <div className = "gap-[150px] pb-[45px] w-full flex items-center justify-center h-[850px] bg-[url(images/background.jpg)]">
          <div className = "flex flex-col gap-12 bg-[#00000044] p-[125px]">
            <p className = "text-7xl text-center text-mainOrange">Ощути гармонию и<br></br>роскошь</p>
            <p className = "text-3xl text-center text-white">Mon parfum - твой личный проводник в мир<br></br>изысканных араматов</p>
            <button type = "button" className = "bg-mainOrange py-[15px] px-[30px] flex self-center justify-center rounded-xl text-2xl"><p className = "flex w-full place-self-center text-white">Каталог</p></button>
          </div>
          <img className = "w-[500px]" src = {bottleMain} alt = "бутылка"/>
        </div>
        <div className = "bg-black flex flex-col items-center gap-[30px] pb-[50px]">
          <p className = "text-mainOrange text-7xl">Акции</p>
          <div>
            <Cards />
          </div>
        </div>
        <div className='flex gap-[100px]'>
          <img src = {bottleAbout} alt = 'о нас бутылка'/>
          <div className=' flex flex-col items-center gap-7 w-[700px]'>
            <p className = 'text-white text-7xl'>О нас</p>
            <p className = 'text-white text-4xl'>Добро пожаловать в мир Mon Parfum - ваш источник роскошных ароматов и непревзойденного качества!<br></br><br></br>Мы гордимся тем, что предлагаем только самые
            изысканные ароматы от ведущих мировых брендов. Каждая бутылочка наполнена не только элегантностью и стилем, но и неповторимым шармом, способным подчеркнуть 
            вашу уникальность!</p>
          </div>
        </div>
      </main>
    );
}

export default Main;