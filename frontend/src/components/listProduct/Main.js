import React, { useEffect ,useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getAllProduct } from '../../reduxStore/actions/productActions'
import Product from '../Product'
// import Filters from './Filters'

export default function Main({keyword,filters}) {
    const dispatch = useDispatch()
    const products = useSelector(state=>state.product)
    console.log(products)
    // console.log(filters)
    // const params = useParams()
    // console.log(match)
    // const params = new URLSearchParams(window.location.search)
    // console.log(params.get("q"))
    // const [ products,setProducts] = useState([])
    useEffect(()=>{
        dispatch(getAllProduct(keyword,filters))
        // let query="";
        // console.log("df")
        // if(filters.cod || filters.min>0 || filters.max){
        //        query+= filters.cod?`&cod=${filters.cod}` :""
        //        query+= filters.min>0? `&min=${filters.min}`:""
        //        query+= filters.max>0? `&max=${filters.max}`:""
        // }
        // (async()=>{
        //    console.log(query)
        //    dispatch(getAllProduct(params.get("q"),query))
        //    let data = ( await (await fetch(`http://localhost:8000/api/v1/product/all?keyword=${params.get("q")}${query}`)).json())
        //    setProducts(data.data)
        // })()
    },[])
    // const filters
  const image = "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/9/z/o/-original-imaghuf9guqmb65z.jpeg?q=70"
//   console.log(products.images)
  return products.product && (
        
        <div className='mainCls'>
          { products.product.map(prod=><Product name={prod.name}
                                             images={prod.images[0]} 
                                             desc={prod.description} 
                                             specs={prod.specs}
                                             price={prod.price}
                                             mrp={prod.mrp}
                                             rating={prod.ratings}
                                             id={prod._id}
                                                      />)}
            
        </div>
  )
}
