import React, { useState } from 'react'
import {IoMdSearch} from "react-icons/io"
import {useNavigate} from "react-router-dom"

import "../styles/searc.css"
function Search() {
    const [value,setValue] = useState()
    const navigate = useNavigate()
    // let style={
    //     width: "400px",
    //     height: "100%"
    // }
  return (
    <form  className='center flex items searchForm'>
        <input type="text" name="q" onChange={(e)=>setValue(e.target.value)} value={value}></input>
        <div className="flex column searchBar">
            <IoMdSearch onClick={()=>{navigate(`/search?q=${value}`)}} />
        </div>
    </form>

  )
}

export default Search