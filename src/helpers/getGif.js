const getGif = async( category )=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=L6hWh544TTT8bdJTeCW1WjkHFKgAC9tT&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const img = data.map( img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    } )

    return img;
}

export default getGif;