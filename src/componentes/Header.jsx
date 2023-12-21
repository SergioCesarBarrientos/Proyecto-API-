import './Header.css'
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import HdOutlinedIcon from '@mui/icons-material/HdOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState, useEffect } from 'react';

function Header() {

    const [seDesplazo, setSeDesplazo] = useState(false);

    /* FUNCIONALIDAD DEL MENU DEL HEADER - CUANDO SE MUEVA AUTOMATICAMENTE TOMARÁ EL COLOR DEL FONDO DE LA PÁGINA*/

    useEffect(() => {
        const manejarDesplazamiento = () => {
          const scrollSuperior = window.scrollY;
          const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;
          if (scrollSuperior > alturaTotal * 0.0) {
            setSeDesplazo(true);
          } else {
            setSeDesplazo(false);
          }
        };
    
        window.addEventListener('scroll', manejarDesplazamiento);
        return () => {
          window.removeEventListener('scroll', manejarDesplazamiento);
        };
      }, []);

    return (
        <>
            <header className={seDesplazo ? 'scrolled' : ''}>
                <div className='logo'>
                    <MovieFilterIcon fontSize='large'></MovieFilterIcon>
                    <span>MubiCon.</span>
                </div>
              
                <nav>
                  <label className= 'label_hamburguesa' htmlFor='menu_hamburguesa'>
                  <MenuIcon fontSize='large'></MenuIcon>
                </label>

                <input className= 'menu_hamburguesa' type="checkbox" name="" id='menu_hamburguesa' />

                    <ul className='lista'>
                        <li>WebMovies</li>
                        <li>Tv Shows</li>
                        <li>Categories</li>
                        <li>Stars</li>
                        <li>Pricing</li>
                    </ul>

                </nav>

                <div className='registro'>
                    <SearchIcon className='lupa' fontSize='large'></SearchIcon>
                    <Button variant="contained" style={{ backgroundColor: 'var(--color-cuatro)', color: 'white', fontSize: '18px', borderRadius:'50px' }}>Sign It</Button>
                </div>

            </header>

            <div className="hero">
              <div className='todo'>
                <div className='uno'>
                    <h3> MubiCon.</h3>
                    <h2>Unlimited <span className='movie'>Movie</span>, Tv Shows, & More.</h2>
                </div>
                <div className='dos'>
                <HdOutlinedIcon className='icono' fontSize='large'></HdOutlinedIcon>
                <h3>Comedia/Fantasía</h3>
                <CalendarMonthIcon className='icono' fontSize='large'> </CalendarMonthIcon>
                <span>2023</span>
                <AccessTimeIcon className='icono' fontSize='large'> </AccessTimeIcon>
                <span>1h 54m</span>
                </div>
                <div className='tres'>
                    <Button className='boton_chico' variant="outlined">Watch Now</Button>
                </div>
                </div>
            </div>
        </>
    )
}
export default Header