import React from 'react';
import {useFetchGifs} from '../hooks/useFetchGifs';
import {GifGridItem} from './GifGridItem';

export const GifGrid = ( {category} ) => {

    //Hooks -> es una forma de extraer lógica de algun componente
    // y que sea sencilla de reutilizar

    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            
        <h3> {category} </h3>

        {loading && <p>Loading...</p>}

        <div className="card-grid">
               
                {
                    images.map( img => (
                       <GifGridItem 
                       key={img.id} 
                       {...img} />
                    ))
                }
               
        </div>
        </>
    )
}
