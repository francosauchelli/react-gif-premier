import { render, screen, waitFor, fireEvent, renderHook } from '@testing-library/react';
import { useState } from 'react';

import { PremierGifApp } from '../src/PremierGifApp';
import { useFetchGifs } from '../src/hooks/useFetchGifs';

describe( 'Prueba sobre componente <PremierGifApp />', () => {

    const h3Category = 'Friends'
    
    test( 'prueba estado inicial del componente', () => {

        render( <PremierGifApp /> );

        const h3Tag = screen.getAllByRole( 'heading', { level: 3 } );

        expect( screen.getByText( h3Category ));
        expect( h3Tag.length ).toBe( 1 );
    })

    test( 'prueba que función onAddCategory no agregue agregue un título si ya existe', async() => {

        const newCategory = 'Ozark';

        render( <PremierGifApp /> );

        const input = screen.getByRole( 'textbox' );
        const form = screen.getByRole( 'form' );

        fireEvent.input( input, { target: { value: newCategory }});
        fireEvent.submit( form );

        const { result } = renderHook( () => useFetchGifs( newCategory ));
        
        await waitFor(
            () => expect( result.current.isLoading ).toBeFalsy()
        )

        expect( screen.getByText( 'Friends' ));
        expect( screen.getByText( 'ozark' ));

        fireEvent.submit( form );

        const h3Tag = screen.getAllByRole( 'heading', { level: 3 } );
        expect( h3Tag.length ).toBe( 2 );
    })
})