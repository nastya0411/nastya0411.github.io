import { Link } from "react-router-dom";

function LogIn(){
    return(
        <enter className="flex flex-col justify-center items-center py-32 px-20 gap-4">
            <div className="text-[rgb(135,61,61)] font-bold text-2xl">
                ВХОД
            </div>
            <div className="gap-6">
                <form className="flex flex-col gap-2">
                    <input type="email" className="p-4 w-96 border bg-white rounded-lg" placeholder="Электронный адрес" />
                    <input type="password" className="p-4 w-96 border bg-white rounded-lg" placeholder="Пароль" />
                </form>
                <div className="flex text-black underline underline-offset-2 cursor-pointer justify-end">
                    <Link to="/zatrolen_loh">
                        Забыли пароль?
                    </Link>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="w-64 p-4 border border-solid border-black rounded-lg 
                    hover:bg-[rgb(135,61,61)] hover:text-white hover:border-transparent hover:ease-in-out duration-300">
                    <Link to="/">
                        Войти
                    </Link>
                </button>
            </div>
            <div className="flex flex-col justify-center items-center">
                Нет аккаунта?
                <div className="text-[rgb(135,61,61)] underline underline-offset-2 cursor-pointer">
                    <Link to="/registration">
                        Создать
                    </Link>
                </div>
            </div>
        </enter>
    )
}

export default LogIn;