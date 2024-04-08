import Header from './Header';
import Footer from './Footer';

function About()
{
  return(
    <div className = "font-medium bg-black tracking-[.25rem]">
        <Header />
        <div className=' flex flex-col items-center gap-14 w-full  bg-cover bg-center bg-[url(images/about/about1.png)] py-[165px] px-[300px] text-center text-white'>
            <p className = 'text-6xl'>О нас </p>
            <p className = 'text-xl tracking-[.2rem] indent-24'>В Mon Parfum убеждены, что парфюмерия - это нечто большее, чем просто ароматы, 
            это выражение индивидуальности и стиля человека. Наша страсть к изысканным ароматам привела нас к созданию коллекции, которая отражает сущность 
            самых разных личностей и дарит вам непревзойденные обонятельные ощущения.</p>
        </div>
        <div className='grid grid-cols-2'>

        </div>
        <Footer />
    </div>
  );
  
}

export default About;