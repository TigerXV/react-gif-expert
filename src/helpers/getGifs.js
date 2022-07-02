export const getGifs = async( cat,Gifnumber )  => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${cat}&limit=${Gifnumber}&api_key=C8q58MQGRBu7ruVAQvPkDMwaTxnvezMn`;
    const resp = await fetch( url );
    const { data = [] } = await resp.json();
    const gifs = data.map( img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
  
    return gifs;
}
    