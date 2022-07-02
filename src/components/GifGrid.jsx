import React, { useEffect, useState } from 'react'
import { Gifitem } from './Gifitem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ cat, Gifnumber }) => {

    const { Images, isLoading } = useFetchGifs(cat,Gifnumber);


    return (
        <>
            <h3> {cat} </h3>
            {
                isLoading &&( <h2>Cargando...</h2>)
               
            }
            <div className='card-grid'>
                {
                    Images.map((images) => (
                        <Gifitem key={images.id}

                            {...images}
                        ></Gifitem>
                    ))
                }


            </div>


        </>
    )
}
