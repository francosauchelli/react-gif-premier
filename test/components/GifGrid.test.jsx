import { render, screen } from "@testing-library/react";

import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock( '../../src/hooks/useFetchGifs' );


describe( 'Prueba <GifGrid />', () => {

    const category = 'Friends';

    const arrayGifs = [
        {
            id: 'abc',
            title: 'Ozark',
            image: 'https://localhost/ozark.jpg',
        },
        {
            id: 'def',
            title: 'LOR',
            image: 'https://localhost/lor.jpg',
        }
    ]

    test( 'Prueba estado inicial del componente', () => {

        useFetchGifs.mockReturnValue({
            gifs: [],
            isLoading: true
        })

        render( <GifGrid category={ category } />);

        expect( screen.getByText( 'Loading...' ) );
        expect( screen.getByText( category ) );
    });

    test( 'debe mostrar items cuando se cargan los gifs de useFetchGifs', () => {
        
        useFetchGifs.mockReturnValue({
            gifs: arrayGifs,
            isLoading: false
        })

        render( <GifGrid category={ category } />);

        expect( screen.getAllByRole( 'img' ).length ).toBe( 2 );
    })



})