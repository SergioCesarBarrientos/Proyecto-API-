import { useEffect, useState } from 'react'
import './App.css'
import NotStartedIcon from '@mui/icons-material/NotStarted';
import SearchIcon from '@mui/icons-material/Search';

function App() {

  const [pelicula, setPeliculas] = useState([])
  const [busqueda, setBusqueda] = useState('')

  /*PELICULAS DE LA API*/
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/all/week?api_key=6e5bdd3eedec361849100e6f509f06ac')
      .then(response => response.json())
      .then(data => {
        setPeliculas(data.results)
      })
  }, [])

  /*FUNCIONALIDAD DE LA BARRA DE BUSQUEDA*/

  const datos = e => {
    e.preventDefault()
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=6e5bdd3eedec361849100e6f509f06ac&query=${busqueda}`)
      .then(response => response.json())
      .then(data => {

        const { results } = data;
        setPeliculas(results);
      });

  };
  const cambiarState = e => {
    setBusqueda(e.target.value)
  };

     
  
  return (
    <> 
    {/* PARTE DE LA BARRA DE BUSQUEDA */}

      <div className='section'>
        <div className='contenedor'>
          <div className='cosas'>
            <h4> Online Streaming</h4>
            <div className='cosas-dos'>
              <h3> Upcoming Movies</h3>
              <NotStartedIcon className='reproductor' style={{ paddingTop: '10px', paddingLeft: '10px', fontSize: '50px' }}> </NotStartedIcon>
            </div>
          </div>
          <div className='buscador'>
            <form className='form' onSubmit={datos}>
              <input type="text" value={busqueda} placeholder='Search Movies...' onChange={cambiarState} />
              <SearchIcon style={{ fontSize: '25px', color: 'white', backgroundColor: 'var(--color-cinco)', borderRadius: '50px', padding: '10px 10px', cursor: 'pointer', position:'relative', right:'60px', top:'15px'}}></SearchIcon>
            </form>
          </div>
        </div>
      </div>

      {/* PARTE DE LAS CARDS DE PELICULAS */}

      <div className='primer-div'>{pelicula.map(peliculas => (
        <div className='cards' key={peliculas.id}>

          <div className='front'>
            <img src={`https://image.tmdb.org/t/p/w500/${peliculas.poster_path}`} alt={peliculas.title} />
            <h2> {peliculas.title} {peliculas.name}</h2>
          </div>
          
          <div className='back'>
            <h2>{peliculas.title} {peliculas.name}</h2>
            <p>{peliculas.overview}</p>
           </div>
        </div>

      ))}

      </div>
    </>
  )
}

export default App
