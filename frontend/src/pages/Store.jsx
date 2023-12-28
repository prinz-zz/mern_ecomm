import BreadCrumbs from "../components/BreadCrumbs";
import Meta from "../components/Meta";
import { useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Store() {
  const [grid, setGrid] = useState(3);

  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumbs title="Our Store" />
      <div className="store-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card">
                <div className="filter-title">Shop by categories</div>
                <div>
                  <ul className="ps-0">
                    <li>Watches</li>
                    <li>Laptops</li>
                    <li>Smart Phones</li>
                    <li>Cameras</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card">
                <div className="filter-title">Filter by</div>
                <div className="availiability">
                  <h5>Availability</h5>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault">
                      In Stock (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked">
                      Out of Stock (0)
                    </label>
                  </div>
                </div>

                <div className="availiability">
                  <h5>Price</h5>
                  <div className="input-group">
                    <span className="input-group-text">&#8377;</span>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="From"
                      aria-label=""
                    />
                    <span className="input-group-text">&#8377;</span>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="To"
                      aria-label=""
                    />
                  </div>
                </div>

                <div className="availiability">
                  <h5>Colors</h5>
                  <ul className="colors">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>

                <div className="availiability">
                  <h5>Size</h5>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault">
                      XXL
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault">
                      XL
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault">
                      L
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault">
                      M
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault">
                      S
                    </label>
                  </div>
                </div>
              </div>

              <div className="filter-card">
                <div className="filter-title">Products tags</div>
                <span className="btn btn-light">Headphones</span>
                <span className="btn btn-light">Watches</span>
                <span className="btn btn-light">Tablets</span>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-grid filter-card">
                <div className="d-flex justify-content-between align-items-center gap-5">
                  <div className="sort d-flex">
                    <p className="d-block">Sort by:</p>
                    <select
                      className="form-select"
                      aria-label="Default select example">
                      <option value="featured">Featured</option>
                      <option value="best-selling">Best selling</option>
                      <option value="price-ascending">
                        Price, low to high{" "}
                      </option>
                      <option value="price-descending">
                        Price, high to low
                      </option>
                      <option value="3">Three</option>
                    </select>
                  </div>

                  <div className="sort d-flex gap-2">
                    <p>21 Products</p>
                    <div className="d-flex justify-content-center  align-items-center grid">
                      <img
                        onClick={() => setGrid(3)}
                        src="images/gr4.svg"
                        alt=""
                        className="d-block"
                      />
                      <img
                        onClick={() => setGrid(4)}
                        src="images/gr3.svg"
                        alt=""
                        className="d-block"
                      />

                      <img
                        onClick={() => setGrid(6)}
                        src="images/gr2.svg"
                        alt=""
                        className="d-block"
                      />
                      <img
                        onClick={() => setGrid(12)}
                        src="images/gr.svg"
                        alt=""
                        className="d-block"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="productsList d-flex flex-wrap gap-2">
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
