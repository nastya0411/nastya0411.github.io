import Header from './Header';
import Cards from './Card';
import bottleMain from "./images/bottleMain.png";
import './App.css';
import Gallery from './Gallery';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Main()
{
  return(
    <main className = "font-Med bg-black tracking-[.25rem]" >
      <Header />
      <div className = "gap-[150px] pb-[45px] w-full hidden md:flex items-center justify-center h-[850px] bg-[url(images/background.jpg)]">
        <div className = "flex flex-col gap-12 bg-[#00000044] p-[125px]">
          <p className = "text-7xl text-center text-mainOrange tracking-[.4rem]">Ощути гармонию и<br></br>роскошь</p>
          <p className = "text-3xl text-center text-white">Mon parfum - твой личный проводник в мир<br></br>изысканных араматов</p>
            <Link  to = '/catalog' type = "button" className = "bg-mainOrange py-[15px] px-[30px] flex self-center justify-center rounded-xl text-2xl">
              <p className = "flex w-full place-self-center text-white tracking-[.25rem]">Каталог</p>
            </Link>
        </div>
        <img className = "w-[500px]" src = {bottleMain} alt = "бутылка"/>
      </div>
      <div className = "bg-black flex flex-col items-center gap-[10px] pb-[30px]">
        <p className = "text-mainOrange text-7xl tracking-[.4rem] gap-[30px] py-[16px]">Хиты продаж</p>
        <div className='w-[1100px]'>
            <Cards />
          </div>
        </div>
        <div className='flex gap-[180px]  bg-[url(images/VectorAbout1.png)]'>
          <div className='w-[800px] h-[620px] bg-center bg-[url(images/bottleAbout.png)]'>
          </div>
          <div className=' flex flex-col items-center justify-between py-[130px] w-[700px] '>
            <p className = 'text-white text-6xl'>О нас</p>
            <p className = 'text-white text-xl tracking-[.2rem] indent-24 text-center'>Добро пожаловать в мир Mon Parfum - ваш источник роскошных ароматов и непревзойденного качества!<br>
            </br><br></br>Мы гордимся тем, что предлагаем только самые
            изысканные ароматы от ведущих мировых брендов. Каждая бутылочка наполнена не только элегантностью и стилем, но и неповторимым шармом, способным подчеркнуть 
            вашу уникальность!</p>
        </div>
        </div>
          <div className=' flex flex-col items-center gap-14 w-full  bg-cover bg-center bg-[url(images/welcome.png)] py-[165px] px-[300px] text-center'>
            <p className = 'text-mainOrange text-6xl'>Познакомтесь с миром ароматов </p>
            <p className = 'text-white text-xl tracking-[.2rem] indent-24'>Добро пожаловать в Mon parfum, где дух победы и триумфа оживает благодаря ароматам, которые придают силы и 
            вдохновляют. Наша коллекции - это праздник успеха, призванный раскрыть вашу победоносную сущность. Насладитесь сладким вкусом триумфа с пленительными ароматами, рассказывающими о 
            ваших достижениях. В Mon parfum мы считаем, что каждая победа заслуживает фирменного аромата, и мы стремимся создавать незабываемые ароматы, которые поднимут ваш дух и придадут сил 
            вашему путешествию.</p>
        </div>
        <div className = "bg-black flex flex-col items-center py-[16px]">
          <p className = "text-mainOrange text-6xl tracking-[.4rem]">Подборки ароматов</p>
          <div className='w-[1750px] py-[25px]'>
            <Gallery />
          </div>
        </div>
        <div className = "pb-[45px] flex justify-self-center  bg-cover bg-center bg-[url(images/sale.png)]">
          <div className = "flex flex-col gap-12 py-[120px] px-[80px]  ">
            <p className = "text-4xl text-left text-white tracking-[.4rem]">Распродажа парфюмерии!
            <br />
            скидка до 50%</p>
            <p className = "text-xl text-left text-white">Откройте для себя изысканную коллекцию<br></br>
             парфюмерии премиум-класса по невероятным ценам<br></br>
              на нашей эксклюзивной парфюмерной распродаже!</p>
              <Link to = '/catalog' type = "button" className = "bg-mainOrange py-[15px] px-[30px] flex self-center justify-center rounded-xl text-2xl">
              <p className = "flex w-full place-self-center text-white tracking-[.25rem]">Подробнее</p></Link>
          </div>
        </div>
        <Footer />
      </main>
    );
}

export default Main;