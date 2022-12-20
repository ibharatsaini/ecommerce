import React, { useState } from 'react'
import {IoMdSearch} from "react-icons/io"
import {useNavigate} from "react-router-dom"

import "../styles/searc.css"
function Search() {
    // const consol
    const navigate = useNavigate()
    const val = new URLSearchParams(window.location.search).get("q")
    const [value,setValue] = useState(val || "")

    // let style={
    //     width: "400px",
    //     height: "100%"
    // const input = document.querySelector(".searchForm input")
    // input.addEventListener("keypress",(e)=>{
    //      if(e.key == 'Enter'){
    //       console.log('enter')
    //      }
    // })
    // }
  return (
    <form action='/search' className='center flex items searchForm'>
        <input required={true} type="text" name="q" onChange={(e)=>setValue(e.target.value)} value={value}></input>
        <div className="flex column searchBar">
            <IoMdSearch onClick={()=>{navigate(`/search?q=${value}`)}} />
        </div>
    </form>

  )
}

export default Search