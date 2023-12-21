
import { NavLink, Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function HeaderTop(){
    return(
        <>
        <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6 align-middle">
              <p className="m-0 text-white">Free shipping over &#8377;500 </p>
            </div>
            <div className="col-6 align-middle">
              <p className="text-end m-0 text-white">
                Hotline :{" "}
                <a className="text-white" href="#">
                  +91 543219875
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2 text-white">
              <h1>
                <Link className="text-white" to={"/"}>
                  <sub>BUY</sub>It
                </Link>
              </h1>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search..."
                  aria-label="Search..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text py-3" id="basic-addon2">
                  <FaSearch />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between text-white">
                <div>
                  <Link className="d-flex align-items-center gap-2 text-white">
                    <img className="" alt="" src="/images/compare.svg" />
                    <p className="mb-0">
                      Compare
                      <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-2 text-white">
                    <img className="" alt="" src="/images/wishlist.svg" />
                    <p className="mb-0">
                      Favourite
                      <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-2 text-white">
                    <img className="" alt="" src="/images/user.svg" />
                    <p className="mb-0">
                      Log in
                      <br /> MyAccount
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-2 text-white">
                    <img className="" alt="" src="/images/cart.svg" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">&#8377;300</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <div className="navigation py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
                <div className="menu d-flex align"></div>
            </div>
          </div>
        </div>
      </div> */}
        </>
    )
}