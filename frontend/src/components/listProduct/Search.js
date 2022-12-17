import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProduct } from '../../reduxStore/actions/productActions'
import "../../styles/search.css"
import Filters from './Filters'
import Main from './Main'
function Search() {
  const dispatch = useDispatch()
  const [filters,setFilters] = useState({cod:false,min:0,max:0,page:1})
  const [newpage,setNewPage] = useState(1)
  const keyword = new URLSearchParams(window.location.search).get("q")
  function changeFilter(updated){
        //  console.log(filters)
        setFilters((prev)=>({...prev,...updated}))
        // setFilters(ch)
        // console.log(filters)
  }

  function changePrev(pa){
      console.log( newpage)
      switch(pa){
            case 'prev':
                  setNewPage(p=>p-1)
                  return  dispatch(getAllProduct(keyword,filters,newpage))

            case 'next':
                  // setFilters((prev)=>({...prev}))
                  setNewPage(p=>p+1)
                  return  dispatch(getAllProduct(keyword,filters,newpage))

            default:
               return    console.log(newpage)
                  
      }

  }
  
  return(
        <div id='search'>
           <Filters changeFilter={changeFilter} filters={filters} keyword={keyword}/>
           <Main filters={filters} keyword={keyword}  />
           {/* <div id="pagination">
                {  newpage >1&&  <div onClick={()=>changePrev('prev')} className='prev'>Previous</div>}
                  <div className='current'>{newpage}</div>
                  <div onClick={()=>changePrev('next')} className='next'>Next</div>
           </div> */}
        </div>
  )
}

export default Search