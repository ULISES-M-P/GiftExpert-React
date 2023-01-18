export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=anpgP0p15AhHFYN7w9eBeLVipkWk5FXe&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;
}