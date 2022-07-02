import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs'



export const useFetchGifs = (cat,Gifnumber) => {


    const [Images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getImages = async () => { 
        const newImages = await getGifs(cat)
        setImages(newImages);
        setIsLoading(false);
    }

    const setlimit =()=>{
        getGifs(Gifnumber);
    }



    useEffect(() => {
        setlimit();
        getImages();
    }, [])


    return {
        Images,
        isLoading
    }
}
