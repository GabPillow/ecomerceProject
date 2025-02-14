import './header.css'
import { Link } from 'react-router-dom';

function Header () {
  return(
    <div className='header'>
      <h1>Stoom</h1>
      <Link to={`/login`}>Connexion</Link>
    </div>
  );
}

export default Header;
