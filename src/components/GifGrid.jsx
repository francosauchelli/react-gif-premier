import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';
import PropTypes from 'prop-types';


export const GifGrid = ({ category }) => {

    const { gifs, isLoading } = useFetchGifs( category );


    return (
        <>  
            {
                isLoading && ( <h2>Loading...</h2> )
            }
            <h3>{ category }</h3>
            <div className='card-grid'>

                { gifs && gifs.map( ( gif ) => 
                    <GifItem key={ gif.id }
                        { ...gif } 
                    /> 
                )}
            </div>        
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}