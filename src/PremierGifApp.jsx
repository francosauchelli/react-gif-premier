import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const PremierGifApp = () => {

    const [ categories, setCategories ] = useState([ 'Friends' ]);

    const onAddCategory = ( newCategory ) => {
        if( categories.includes( newCategory.toLowerCase() )) return;

        const lowerCaseCat = newCategory.toLowerCase();
        setCategories( [ lowerCaseCat,...categories ] );
    }
    
    return(
        <>
            <h1>Premier Gif App</h1>
            <AddCategory onNewCategory={ onAddCategory } />
            { 
                categories.map( cat => 
                    <GifGrid 
                        key={ cat }
                        category={ cat }
                    /> 
                )
            }
        </>
    )
}