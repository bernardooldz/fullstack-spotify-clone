import { Link } from 'react-router-dom'
import LogoSpotify from '../assets/logo/spotify-logo.png'

function Header() {

  return (
    <>
      <div className='header'>
        <Link to="/">
          <img src={LogoSpotify} alt="Logo do Spotify" />
        </Link>
        <Link className='header__link' to="/">
          <h1>Spotify</h1>
        </Link>

      </div>
    </>
  )
}

export default Header