import { renderHook, waitFor } from '@testing-library/react';

import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe( 'Prueba de useFetchGifs', () => {

    const category = 'Ozark';

    test( 'prueba estado inicial del custom hook', () => {
        
        const { result } = renderHook( () => useFetchGifs( category ) )
        
        const { gifs, isLoading } = result.current;

        expect( gifs.length ).toBe( 0 );
        expect( isLoading ).toBeTruthy;

    })

    test ( 'prueba que el hook devuelva un array de gifs y que isLoading cambie a false', async() => {

        const { result } = renderHook( () => useFetchGifs( category ) )


        await waitFor(
            () => expect( result.current.gifs.length ).toBeGreaterThan( 0 )
        )

        const { gifs, isLoading } = result.current;
        
        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( isLoading ).toBeFalsy;

    })
})