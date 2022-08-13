import { fireEvent, render, screen } from '@testing-library/react';

import { AddCategory } from '../../src/components/AddCategory';

describe( 'prueba <AddCategory />', () => {

    const inputValue = 'One Punch';

    test( 'debe cambiar el estado', () => {

        render( <AddCategory onNewCategory={ () => {} } /> )
        const inputTest = screen.getByRole( 'textbox' );
        const target = { target: { value: 'One Punch' }} 
        fireEvent.input( inputTest , target );
        
        expect( inputTest.value ).toBe( inputValue );

    })

    test( 'debe llamar onNewCategory si el input tiene un valor', () => {

        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole( 'textbox' );
        const form = screen.getByRole( 'form' );

        fireEvent.input( input, { target: { value: inputValue }});
        fireEvent.submit( form );

        expect( input.value ).toBe( '' );

        expect( onNewCategory ).toHaveBeenCalled(); 
        expect( onNewCategory ).toHaveBeenCalledTimes( 1 );
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

    })

    test( 'que no se llame la función onNewCategory si el input está vacío', () => {
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const form = screen.getByRole( 'form' );
        
        fireEvent.submit( form );

        
        expect( onNewCategory ).toHaveBeenCalledTimes( 0 );
        expect( onNewCategory ).not.toHaveBeenCalled();

    })

})