import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom";
import Avatar from "../images/avatar.png"
import {BsFillStarFill, BsMoonStarsFill, BsStars} from "react-icons/bs"
import { updateCart } from '../reduxStore/actions/cartActions';
// import {}
import {getProduct} from "../reduxStore/actions/productActions"
import "../styles/productDetail.css"
import { toast } from 'react-hot-toast';
import Loading from './Loading';

function ProductDetail() {
  const {id} = useParams()
  console.log(id)
  let {product,loading} = useSelector(state=>state.newProduct)
  const [review,setReview] = useState({rating:0, comment:""})
  console.log(product)
  const dispatch = useDispatch()
  console.log(product)
  function changeImage({target}){
    document.querySelector(".imagFin > img").src = target.src
  }
  function createReview(){
    document.querySelector(".absWin").style.display='flex'
  }
  function fillStar(e){
        const value = Number(e)
        for(let i=1; i<=5; i++){
            const element = document.querySelector(`.starFill[value="${i}"`)
            if(i <= value ){
                element.style.color="yellow"
            }else{
                element.style.color="white"
            }
            setReview(prev=>({...prev,rating:value}))
        }     
  }
  
  function submitReview(){
        fetch(`/api/v1/product/create-review`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({product:id,review})
        }).then(data=>data.json())
          .then(data=>toast.success("Review submitted succesfully"))
          .catch(e=>toast.error("Review wasn't accepted"))
        //   .finally(data=>{console.log(data); data.success ? toast.success("review submitted") : toast.error("error")})
  }

  useEffect(()=>{
    //   product = product.product
      console.log("Hellow")
      console.log("id")
      dispatch(getProduct(id))
      product = {...product}
  },[dispatch,id])
  if(loading){
    return <Loading ></Loading>
  }
  if(!(product instanceof Object)) return (<h1>No product</h1>)
  console.log(product)
  return (
    <> 
                <div className='absWin'>
                    <div className='writeReview'>
                        <div className='dre'>Write a review <span onClick={()=>document.querySelector(".absWin").style.display='none'}>X</span></div>
                        <div className='starRat'>
                            {[1,2,3,4,5].map((el)=>{console.log(el); return (<BsFillStarFill onClick={()=>{fillStar(el)}} value={el} className="starFill" color="white" />)})}
                        </div>
                        <textarea onChange={(e)=>{setReview((prev)=>({...prev,"comment":e.target.value}))}} value={review.comment} />

                        <div onClick={submitReview} className='submit'>Submit Review</div>
                    </div>

                </div>
           
            <div id="productDetail">
                <div className='imageDiv'>
                    <div className='imagGall'>
                        {console.log(product)}
                        {product.images.map(el=>{
                            // console.log(el)
                            return (
                            <div onClick={(e)=>{changeImage(e)}}>
                                <img src={el} />
                            </div>

                        )
                        })}
                    </div>
                    <div className='imagFin'>
                        <img src={product.images[0]}/>
                    </div>
                </div>
                <div className='secDiv'>
                    <div className='title'>
                        {product.name}
                    </div>
                    <div className='ratRev'>
                        <div className='rating'>
                            {Math.floor(product.ratings)}&nbsp;
                            <BsFillStarFill color={"lightgoldenrodyellow"}/>
                        </div>
                        <span>{`${product.reviews.length} Reviews`}</span>
                    </div>
                    <div className='pricesDiv'>
                        <span className='priceSpan'> &#8377;{product.price}</span>
                        <span className='mrpSpan'> &#8377;{product.mrp}</span>
                    </div>
                    <div className='specDiv'>
                        <ul >
                            {product.specs.map(spec=><li>{spec}</li>)}
                        </ul>
                    </div>
                    <div className='cartAction'>
                        <div className='addCart' onClick={()=>{dispatch(updateCart(product))}}>Add to cart</div>
                    </div>
                </div>
            </div>
            <div id="reviews">
                <div id="headRev"><h2>Reviews </h2> <div onClick={createReview} className='write'>Write Review</div></div>
                <div className='revi'>
                    {
                        product.reviews.map(el=>{
                            const l=Math.floor(el.rating)
                            console.log(l)
                            return (
                                <div className='revDiv'>
                                    <div className='ratDiv'>
                                        {/* {} */}
                                        {Array(l).fill().map(()=>{return (<BsFillStarFill className='star' color={"gold"} />)})}
                                    </div>
                                    <section>
                                        {el.comment}
                                    </section>
                                    <div className='revInfo'>
                                        <img className='avatarImg' src={Avatar} />
                                        <h4>{`${el.user.userId.firstName} ${el.user.userId.lastName}`}</h4>
                                    </div>
                            
                                </div>
                            )
                        })
                    }
                </div>
            </div>
    </>
  )
}

export default ProductDetail