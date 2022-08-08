import { useState, useEffect } from "react";

import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {

    const [ isLoading, setIsLoading ] = useState( true );
    const [ gifs, setGifs ] = useState( [] );

    const getImages = async () => {
        const gifsRequest = await getGifs( category )
        setGifs( gifsRequest );
        setIsLoading( false );
    }

    useEffect( () => {
        getImages();
    }, [] );

    
    return {
        gifs,
        isLoading
    }
}