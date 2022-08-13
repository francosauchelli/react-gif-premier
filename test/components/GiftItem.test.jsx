import { render, screen } from "@testing-library/react";

import { GifItem } from "../../src/components/GifItem";


describe( 'Prueba <GiftItem />', () => {

    const title = 'Gif Title';
    const urlImage = 'https://url.com/img.jpg'


    test( 'debe hacer match el snapshot', () => {

        const { container } = render( <GifItem title={ title } image={ urlImage } /> );

        expect( container ).toMatchSnapshot();
    });

    test( 'debe mostrar imagen con el url y alt indicados', () => {
        render( <GifItem title={ title } image={ urlImage } /> );

        const { src, alt } = screen.getByRole( 'img' );

        expect( src ).toBe( urlImage );
        expect( alt ).toBe( title );

    });

    test( 'Debe existir el título en el componente', () => {
        render( <GifItem title={ title } image={ urlImage } /> );

        expect( screen.getByText( title ) ).toBeTruthy();
    })
})