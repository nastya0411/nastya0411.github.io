import { useContext, useState } from "react";
import Header from './Header';
import Footer from './Footer';
import first from "./images/catalog/3.webp";
import { CartContext } from "./contexts/CartContextProvider";

const formatter = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
  });
function Basket(){

    let { cart} = useContext(CartContext);
    
    let cartCardsJsx = [];

    for (let key of Object.keys(cart)) {
      cartCardsJsx.push(<CartProduct cartItem={cart[key]} />) ;
    }
    function alr(){
        alert("Ваш заказ оформлен!");
    }

    return(
        <div className = "font-medium bg-black tracking-[.25rem] grid gap-y-5 text-white">
        <Header />
          <div className="flex flex-col px-20 py-8">
            {cartCardsJsx}
          </div>
            <div className="flex flex-col items-center pt-5"><p className='p-7 border-t border-mainOrange w-4/5 rounded-sm text-center font-extralight text-3xl'>
            Общая стоимость заказа:</p>
                            <div className=" text-center text-mainOrange text-4xl tracking-[.1rem] ">
                    {formatter.format(25000 * Object.keys(cart).length)}
                </div>
            </div>
            <div className="">

                <div className="flex flex-col justify-center items-center gap-8">
                    <div>
                        <button onClick={alr} className="w-64 p-4 border border-solid border-black rounded-full
                            hover:bg-mainOrange hover:text-white hover:border-transparent hover:ease-in-out duration-300 text-2xl tracking-[.4rem] 
                            py-[15px] px-[30px] flex self-center justify-center rounded-xl text-4xl flex w-full place-self-center text-white tracking-[.25rem] ">
                                Оформить заказ
                        </button>
                    </div>
                </div>
            </div>
  
        <Footer />
    </div>
    )
}

function CartProduct({ cartItem }) {
  const [count, setCount] = useState(cartItem.count);
  
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

  return (
    <div className="flex justify-space-around border-black border-b gap-28 justify-center items-center text-2xl px-1 h-44 py-5">
      <div className="flex justify-center">
          <img src={first} className="h-96 cursor-pointer" alt="x" />
      </div>
      <div className="text-center">Luxurious Elixir</div>
      <div className="flex items-center place-self-center  tracking-[.25rem] border-solid border-mainOrange border flex rounded-xl text-2xl ">
        <p className={'pl-6 py-3 pr-6 rounded-l-xl transition-all' + (count <= 1 ? ' text-gray-600' : ' cursor-pointer hover:bg-mainOrange')} onClick={clickMinus}>-</p>
        <p className='px-4 py-3'>{count}</p>
        <p className={'pl-6 py-3 pr-6 rounded-r-xl transition-all' + (count >= 10 ? ' text-gray-600' : ' cursor-pointer hover:bg-mainOrange')} onClick={clickPlus}>+</p>
      </div>
      <div>
      <p className='text-white text-4xl tracking-[.1rem]'>{formatter.format(25000 * count)}</p>
      </div>
    </div>
  );
}

export default Basket;