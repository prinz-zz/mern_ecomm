import BreadCrumbs from "../components/BreadCrumbs";
import Meta from "../components/Meta";

export default function Wishlist() {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumbs title="Wishlist" />
      <div className="store-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
            <div className="col-3">
                <div className="compare-card position-relative">
                  <img
                    src="images/cross.svg"
                    alt="cross"
                    className="position-absolute cross img-fluid"
                  />
                  <div className="productImg">
                    <img
                      src="images/tab1.jpg"
                      alt="watch"
                      className="img-fluid"
                    />
                  </div>
                  <p className="card-text">Lorem ipsum dolor. Lorem ipsum dolor.</p>
                  <p className="p20">
                    <strong>₹100</strong>
                  </p>
                  
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      
    </>
  );
}
