import axios from 'axios'
import { useState } from 'react'

const Search = () => {
    const[searchWord, setSearchWord] = useState([])

    
    return (
        <div className='Search'>
            <input type='text' placeholder='Search...' onChange={event => {setSearchWord(event.target.value)}}/>
        </div>
    )
}

export default Search
