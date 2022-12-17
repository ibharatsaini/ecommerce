import React from 'react'
import {FaTruckMoving} from "react-icons/fa"
import {HiOutlineReceiptRefund } from "react-icons/hi"
import {MdOutlineHighQuality} from "react-icons/md"
import "../../styles/features.css"
function Features() {
  return (
    <div className='features'>
        <div className='divClass'>
            <div className='svgCls'>
                <FaTruckMoving />
            </div>
            <div className='head'>
                <h3>Free Delivery</h3>
                <span>For Orders above $300</span>
            </div>
        </div>
        <div className='divClass'>
            <div className='svgCls'>
                <HiOutlineReceiptRefund  />
            </div>
            <div className='head'>
                <h3>100% Delivery</h3>
                <span>Money Back after 7 days</span>
            </div>
        </div>
        <div className='divClass'>
            <div className='svgCls'>
                <MdOutlineHighQuality  />
            </div>
            <div className='head'>
                <h3>Premium Quality</h3>
                <span>Certify top quality terms</span>
            </div>
        </div>
        
    </div>
  )
}

export default Features