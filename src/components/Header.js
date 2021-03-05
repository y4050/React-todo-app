import { Link } from "react-router-dom";

const Header = () => {
    return (
       <header>
           <h1>Todo</h1>
           <nav>
               <Link to='/'>Home</Link>
               <Link to='/todos'>Todos</Link>
           </nav>
       </header>
    );
}

export default Header;
