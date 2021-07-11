import { useEffect, useState } from 'react'
import getGif from '../helpers/getGif'

const useFetchGifs = (category)=> {
    const [state, setstate] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGif(category).then(e=> { setstate({
            data: e,
            loading: false
        }) } )    
    }, [category])

    return state;
}
export default useFetchGifs