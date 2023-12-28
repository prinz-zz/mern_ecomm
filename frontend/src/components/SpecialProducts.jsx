import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function SpecialProducts() {
  return (
    <div className="col-4">
      <div className="specialCard">
        <div className="d-flex justify-content-between">
            <div><img src='images/smartwatch.png'  alt=''/></div>

            <div className='special-product-content'>
                <h5 className="brand">Apple</h5>
                <h6 className="title">Some quick example text to build on the card title and make up the
            bulk of the card's content.</h6>
            <div className="card-star">
            <ReactStars
              count={5}
              
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
          </div>
          <p className="price">
         <span className="text-danger"> &#8377;100 </span>
         <span className='text-decoration-line-through'>&#8377;300</span>
          </p>
          <div className="discount-expires d-flex align-items-center">
            <p className='pb-0 mb-0'>
                <strong>5 <span className='secondary'>Days</span> </strong>
            </p>
            <div className="d-flex gap-2">
                <span className="badge rounded-circle bg-danger p-2">11</span>
                <span className="badge rounded-circle bg-danger p-2">22</span>
                <span className="badge rounded-circle bg-danger p-2">33</span>                
            </div>
          </div>
          <div className="product-count my-4">
              <p>Products : 5</p>
              <ProgressBar now={60} />
            </div>
            <Link className='btn btn-dark'>Add to Cart</Link>
            </div>
            
        </div>
      </div>
    </div>
  );
}
