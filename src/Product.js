import Header from './Header';
import Footer from './Footer';
import first from "./images/catalog/3.png";
import './Rating.css';
import { useState } from 'react';

const formatter = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
});

function Product() {

  const [count, setCount] = useState(1);

  function clickMinus() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function clickPlus(){
    if (count < 10) {
      setCount(count + 1);
    }
  }

  return(
    <div className = "font-medium bg-black tracking-[.25rem]">
        <Header />
        <div className='flex'>
          <div className='object-contain -mt-20 ps-72'>
            <img className = "w-[600px]" src = {first} alt = "продукт"/>
          </div>
          <div className=' flex flex-col justify-items-start w-[700px] gap-10 tracking-[.2rem] pt-20'>
              <p className = 'text-white text-4xl font-semibold'>Luxurious Elixir</p>
              <p className = 'text-white text-xl'>Окунитесь в мир непревзойденной роскоши с Luxurious Elixir, изысканным ароматом, который сплетает чарующую симфонию золота и роскоши. 
              Этот позолоченный эликсир - это праздник изысканности, созданный с использованием лучших эссенций и наполненный очарованием драгоценных золотых оттенков.</p>
              <div className="rating-result flex items-center">
                      <span className="active"></span>
                      <span className="active"></span>    
                      <span className="active"></span>  
                      <span className="active"></span>
                      <span className="active"></span>
                      <p className = 'text-white text-sm pl-2 '>(90) Отзывов и оценок</p>
              </div>
              <p className='text-mainOrange tracking-[.1rem]'>{formatter.format(25000)}</p>
              <div className="flex items-center">                  
                <p className = 'text-white pr-2 text-lg font-semibold'>Количество</p>
                <div className="flex items-center place-self-center text-white tracking-[.25rem] border-solid border-orange-800 border flex rounded-xl text-2xl ">
                  <p className={'pl-6 py-3 pr-6 rounded-l-xl transition-all' + (count <= 1 ? ' text-gray-600' : ' cursor-pointer hover:bg-orange-800')} onClick={clickMinus}>-</p>
                  <p className='px-4 py-3'>{count}</p>
                  <p className={'pl-6 py-3 pr-6 rounded-r-xl transition-all' + (count >= 10 ? ' text-gray-600' : ' cursor-pointer hover:bg-orange-800')} onClick={clickPlus}>+</p>
                </div>
              </div>
          </div>
        </div>
        <Footer />
    </div>
  );
  
}

export default Product;