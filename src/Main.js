import Header from './Header';
import Cards from './Card';
import bottleMain from "./images/bottleMain.png";
import './App.css';
import bottleAbout from './images/bottleAbout.png'
import Gallery from './Gallery';

function Main()
{
    return(
        <main className = "font-Med bg-black tracking-[.25rem]" >
        <Header />
        <div className = "gap-[150px] pb-[45px] w-full flex items-center justify-center h-[850px] bg-[url(images/background.jpg)]">
          <div className = "flex flex-col gap-12 bg-[#00000044] p-[125px]">
            <p className = "text-7xl text-center text-mainOrange tracking-[.4rem]">Ощути гармонию и<br></br>роскошь</p>
            <p className = "text-3xl text-center text-white">Mon parfum - твой личный проводник в мир<br></br>изысканных араматов</p>
            <button type = "button" className = "bg-mainOrange py-[15px] px-[30px] flex self-center justify-center rounded-xl text-2xl">
              <p className = "flex w-full place-self-center text-white tracking-[.25rem]">Каталог</p></button>
          </div>
          <img className = "w-[500px]" src = {bottleMain} alt = "бутылка"/>
        </div>
        <div className = "bg-black flex flex-col items-center gap-[30px] pb-[50px]">
          <p className = "text-mainOrange text-7xl tracking-[.4rem]">Хиты продаж</p>
          <div className='w-[1100px]'>
            <Cards />
          </div>
        </div>
        <div className='flex gap-[120px]   bg-[url(images/VectorAbout1.png)]'>
          <img src = {bottleAbout} alt = 'о нас бутылка'/>
          <div className=' flex flex-col items-center gap-7 w-[700px]'>
            <p className = 'text-white text-7xl'>О нас</p>
            <p className = 'text-white text-4xl tracking-[.45rem] indent-24 text-center'>Добро пожаловать в мир Mon Parfum - ваш источник роскошных ароматов и непревзойденного качества!<br>
            </br><br></br>Мы гордимся тем, что предлагаем только самые
            изысканные ароматы от ведущих мировых брендов. Каждая бутылочка наполнена не только элегантностью и стилем, но и неповторимым шармом, способным подчеркнуть 
            вашу уникальность!</p>
        </div>
        </div>
          <div className=' flex flex-col items-center gap-7 w-full bg-[url(images/welcome.png)] py-[180px] px-[300px] text-center'>
            <p className = 'text-mainOrange text-7xl'>Познакомтесь с миром ароматов </p>
            <p className = 'text-white text-2xl tracking-[.4rem] indent-24'>Добро пожаловать в Mon parfum, где дух победы и триумфа оживает благодаря ароматам, которые придают силы и 
            вдохновляют. Наша коллекции - это праздник успеха, призванный раскрыть вашу победоносную сущность. Насладитесь сладким вкусом триумфа с пленительными ароматами, рассказывающими о 
            ваших достижениях. В Mon parfum мы считаем, что каждая победа заслуживает фирменного аромата, и мы стремимся создавать незабываемые ароматы, которые поднимут ваш дух и придадут сил 
            вашему путешествию.</p>
        </div>
        <div className = "bg-black flex flex-col items-center gap-[30px] pb-[50px]">
          <p className = "text-mainOrange text-7xl tracking-[.4rem]">Подборки ароматов</p>
          <div className='w-[1750px]'>
            <Gallery />
          </div>
        </div>
        <div className = "gap-[150px] pb-[45px] flex justify-start bg-[url(images/sale.png)]">
          <div className = "flex flex-col gap-12 py-[140px] px-[80px]  ">
            {/* Шрифт меньше. Если кажется, что не заметно, то выделить иным способом */}
            <p className = "text-4xl text-left text-white tracking-[.4rem]">Распродажа парфюмерии!
            {/* br самозакрывать там же, где и открыт, можно вот так. Это гораздо читабельней */}
            <br />
            {/* Выделять лучше каким-либо цветом текста или фона, подчеркнув или жирностью. Иначе кажется, что на тебя кричат :D */}
            скидка до 50%</p>
            <p className = "text-xl text-left text-white">Откройте для себя изысканную коллекцию<br></br>
             парфюмерии премиум-класса по невероятным ценам<br></br>
              на нашей эксклюзивной парфюмерной распродаже!</p>
              {/* Стараться не писать в квадратных скобочках и использовать одни и те же значения */}
              {/* Можно задать значения шрифта для родительского блока */}
              {/* Можно создать специальные стили, которые будут наследовать несколько стилей css. */}
              {/* К примеру, для шрифта, которому ты хочешь задать и размер шрифта и tracking, то лучше прописывать это в css. */}
              {/* https://tailwindcss.com/docs/reusing-styles#extracting-classes-with-apply */}
            <button type = "button" className = "bg-mainOrange py-[15px] px-[30px] flex self-center justify-center rounded-xl text-2xl">
              <p className = "flex w-full place-self-center text-white tracking-[.25rem]">Подробнее</p></button>
          </div>
        </div>
      </main>
    );
}

export default Main;

