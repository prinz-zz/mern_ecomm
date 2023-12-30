import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

export default function ProductCard({grid}) {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  let location = useLocation();
  console.log(location.pathname);

  return (
    <div className={`${location.pathname == "/store" ? `gr-${grid} stores` : "col-3"}`}>
      <Link to="/:id" className="card position-relative">
        <div className="productImg">
          <img src="images/tab1.jpg" className="img-fluid" alt="..." />
          <img src="images/tab.jpg" className="img-fluid" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
             Lorem ipsum dolor. Lorem ipsum dolor.
          </p>
          <div className="card-star">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
          </div>
          <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.A numquam assumenda consequuntur quas deserunt ullam placeat, facere quisquam, earum nobis maxime odit alias consectetur facilis corporis cupiditate, consequatur harum eaque!
          </p>
          <p>
            <strong>&#8377;100</strong>
          </p>
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="" onClick={()=> alert('Hello')}/>
            </Link>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-3 gr12">
              <Link>
                <img src="images/add-cart.svg" alt="" />
              </Link>
              <Link>
                <img src="images/prodcompare.svg" alt="" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
