import { NavLink } from 'react-router-dom';
import Logo from '../assets/LogoRickMorty.png';
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container1">
        <div className="imagen">
          <img src={Logo} alt="logo" width={130} />
        </div>
        <div className="titulo">
          <h2>Rick & Morty</h2>
        </div>
      </div>
      <div className="container2">
        <ul className='options'>
            <li>
                <NavLink to='/characters'>Personajes</NavLink>
            </li>
            <li>
                <NavLink to='/creator'>Creadora</NavLink>
            </li>
        </ul>
      </div>
    </div>
  );
};
