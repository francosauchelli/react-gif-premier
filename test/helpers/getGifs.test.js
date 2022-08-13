import { getGifs } from '../../src/helpers/getGifs'


describe( 'prueba getGifs', () => {

    test( 'debe devolver un array de objetos', async () => {

        const gifs = await getGifs( 'Ozark' );

        expect( gifs.length ).toBeGreaterThan( 0 );

        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            image: expect.any( String ),
        })

    })
})