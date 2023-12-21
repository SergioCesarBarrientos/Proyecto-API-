import { useReducer, useRef } from 'react'
import './Section.css'
import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';

function Section() {   /* LISTA DE PELICULAS FAVORITAS */ 

    const inputRef = useRef();

    const [tasks, dispatch] = useReducer((state = [], action) => {
        switch (action.type) {
            case 'add_task': {
                return [
                    ...state,
                    { id: state.length, title: action.title }
                ]
            }
            case 'remove_task': {
                return state.filter((task, index) => index !== action.index);
            }


            default: {
                return state;
            }
        }

    });

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'add_task',
            title: inputRef.current.value
        })
    }

    return (
        <>
            <div className='seccion'>
                <div className='contenido'>
                    <div className='formulario'>
                        <h2><StarIcon style={{ color: 'yellow', fontSize: '30px', paddingRight: '5px'}}> </StarIcon>Enter the names of your movies and save them here! <StarIcon style={{ color: 'yellow', fontSize: '30px', paddingTop: '5px' }}></StarIcon></h2>
                        <form onSubmit={handleSubmit}>
                            <input className='barra' placeholder='Save your favorite movies...' type="text" name='title' ref={inputRef} />
                            <input className='boton' type="submit" value="Save" /> 
                        </form>
                    </div>

                    <div className='taski'>
                        {tasks && tasks.map((task, index) => (
                            <div className='task' key={index}>
                                <p>{task.title}</p>
                                <button onClick={() => dispatch({ type: 'remove_task', index })}><DeleteIcon large='small'></DeleteIcon></button>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}


export default Section