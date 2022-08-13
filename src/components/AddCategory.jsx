import { useState } from "react"

import Proptypes from 'prop-types';


export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState( '' );

    const onInputChange  = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();

        const newValue = inputValue.trim();
        if( newValue.length <= 1 ) return;

        onNewCategory( newValue );
        setInputValue('');
    }

    return (
        <form 
            onSubmit={ onSubmit } 
            aria-label='form' 
        >
            <input 
                type="text"
                placeholder="Buscar Gifs"
                onChange={ onInputChange }
                value={ inputValue } 
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: Proptypes.func.isRequired,
}