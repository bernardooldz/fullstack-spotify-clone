import LogoSpotify from '../assets/logo/spotify-logo.png'

function Header() {

    return (
      <>
        <div className='header'>
            <img src={LogoSpotify} alt="Logo do Spotify" />

            <a className='header__link' href="">
                <h1>Spotify</h1>
            </a>

        </div>
      </>
    )
  }
  
  export default Header