export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=CD7eubXaV7xjLTZEQrtZjrzbeLwuF3h8&q=${ category }&limit=10`
    const resp = await fetch( url )
    const { data } = await resp.json();

    const gifs = data.map( ({ id, title, images }) => ({
        id: id,
        title: title,
        image: images.downsized_medium.url,
    }))
    
    return gifs;
}