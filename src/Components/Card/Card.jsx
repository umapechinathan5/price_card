import React from 'react'
import './Card.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

const Card = ({data}) => {
  return (
 
    <div className="card bg-light mb-3 mt-5" >
  <div className="card-header text-center"><h6 className='text-muted'>{data.title}</h6>
  <h3 className="card-title ">${data.cost}/month</h3></div>


    <ul className="card-text card-body">

      <li><TiTick />{data.user} User</li>

     {data.storage ? <li><TiTick /> 50GB Storage </li> : <li className='text-muted'><RxCross2 />50GB Storage</li> }

     {data.public ? <li><TiTick /> Unlimited Public Projects </li> : <li className='text-muted'><RxCross2 />Unlimited Public Projects</li> }

     {data.access ? <li><TiTick /> Community Access </li> : <li className='text-muted'><RxCross2 /> Community Access </li> }

     {data.private ? <li><TiTick /> Unlimited Private Projects </li> : <li className='text-muted'><RxCross2 />Unlimited Private Projects</li> }

     {data.support ? <li><TiTick /> Dedicated Phone Support </li> : <li className='text-muted'><RxCross2 />Dedicated Phone Support</li> }

     {data.domain ? <li><TiTick /> Free Subdomain </li> : <li className='text-muted'><RxCross2 /> Free Subdomain </li> }

     {data.report ? <li><TiTick /> Monthly Status Reports </li> : <li className='text-muted'><RxCross2 />Monthly Status Reports</li> }

    </ul>
    <div className='text-center mb-3'>
    <button className='btn btn-primary rounded-pill 'style={{paddingLeft:50,paddingRight:50}}>BUTTON</button>
    </div>
</div>

  )
}

export default Card


