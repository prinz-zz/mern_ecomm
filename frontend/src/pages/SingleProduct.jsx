import BreadCrumbs from "../components/BreadCrumbs";
import Meta from "../components/Meta";
import Colors from "../components/Colors";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { useState } from "react";
import Zoom from "react-img-zoom";

export default function SingleProduct() {
  const [orderedProduct, setOrderedProduct] = useState(true);

  return (
    <>
      <Meta title={"Single product"} />
      <BreadCrumbs title="Single product" />
      <div className="single-product-wrapper py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="product-image">
                <div>
                  <Zoom
                    img="https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    zoomScale={3}
                    width={600}
                    height={600}
                    objectFit={"cover"}
                    transitionTime={0.1}
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <h6>Lorem ipsum dolor, sit amet consectetur</h6>
              <p>
                <strong>₹100</strong>
              </p>
              <div className="d-flex gap-3">
                <ReactStars
                  count={5}
                  size={24}
                  value={3}
                  edit={false}
                  activeColor="#ffd700"
                />
                <p className="star-text">(2 Reviews)</p>
              </div>
              <div className="mb-3 d-flex gap-2">
              <p><strong>Type :</strong></p> 7:30
              <p>Hello</p>
              </div>
              <div className="mb-3 d-flex gap-2">
              <p><strong>Type :</strong></p> 7:30
              <p>Hello</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="single-product-wrapper py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4 className="">Description</h4>
              <p className="bg-white p-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reiciendis, excepturi? Harum illo consectetur molestias quae
                culpa nulla ab repellendus quam tenetur architecto voluptas,
                voluptatibus quod, sequi ad. Non, amet maiores.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="single-product-wrapper py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4 className="">Reviews</h4>
              <div className="bg-white p-3 rounded py-4">
                <h6>Customer reviews</h6>
                <div className="single-reviws py-4">
                  <div className="d-flex gap-3">
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="star-text">Start</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Based on 2 reviews</p>
                    <Link>write a review</Link>
                  </div>
                </div>

                <div className="single-reviws py-4">
                  <div className="d-flex gap-3">
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>

                  <div>
                    <h6>Lorem ipsum dolor, sit amet consectetur </h6>
                    <div className="d-flex justify-content-between align-items-end">
                      <p className="review-text">
                        Lorem ipsum dolor, sit amet consecteturLorem ipsum
                        dolor, sit amet consecteturLorem ipsum dolor, sit amet
                        consecteturLorem ipsum dolor, sit amet consecteturLorem
                      </p>
                      {orderedProduct && <Link>write a review</Link>}
                    </div>
                  </div>
                </div>

                <div className="py-4">
                  <h6>Write a review</h6>
                  <form>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Name"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-3">
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Review title"
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Comment"></textarea>
                    </div>
                    <button type="button" className="btn btn-dark">
                      Submit review
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
