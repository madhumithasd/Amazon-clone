import React from 'react'
import { Link } from 'react-router-dom'
import './Navlinks.css'

function Navlinks(){
    return(
        <div className="navlinks">
            <div class="navlinks__outer">
                <div class="navlinks__inner">
                <Link>Customers Services</Link>
                <Link>Best Sellers</Link>
                <Link>Gifts Cards</Link>
                <Link>Amazon Pay</Link>
                </div>
            </div>
           

        </div>
    )


}

export default Navlinks