import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <>
    <section className="home-wrapper-1 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
            <div className="banner p-3">
              <img
                src="images/main-banner.jpg"
                className="img-fluid rounded-3"
                alt=""
              />
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt=""
              />
              <div className="banner-content">
                <h4>SUPERCHARGED FOR PROS</h4>
                <h5>Special Sale</h5>
                <p>
                  From &#8377;4500 or &#8377;199/mo <br /> for 24 months
                </p>
                <Link>BUY NOW</Link>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 p-3">
              <div className="s-banner">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt=""
                />
                <div className="s-banner-content">
                  <h4>BEST SALE</h4>
                  <h5>Laptop Max</h5>
                  <p>
                    From &#8377;149000 or <br />&#8377;6210/mo
                  </p>
                </div>
              </div>

              <div className="s-banner">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt=""
                />
                <div className="s-banner-content">
                  <h4>15% OFF</h4>
                  <h5>Smartwatch 7</h5>
                  <p>
                    Shop the latest band <br /> and colors
                  </p>
                </div>
              </div>

              <div className="s-banner">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt=""
                />
                <div className="s-banner-content">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy IPad Air</h5>
                  <p>
                  From &#8377;80800 or <br /> &#8377;3400/mo
                  </p>
                </div>
              </div>

              <div className="s-banner">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt=""
                />
                <div className="s-banner-content">
                <h4>FREE ENGRAVING</h4>
                  <h5>Air Pod Max</h5>
                  <p>
                    Hight-fidelity playback & <br /> ultra-low distortion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="services d-flex align-items-center justify-content-between">
                        <div><img src="images/service.png" alt='services'/>
                        <div>
                            <h6>Services</h6>
                            <p></p>
                        </div>
                        </div>
                        <div><img src="images/service.png" alt='services-02'/>
                        <div>
                            <h6>Services</h6>
                            <p></p>
                        </div>
                        </div>
                        <div><img src="images/service-03.png" alt='services'/>
                        <div>
                            <h6>Services</h6>
                            <p></p>
                        </div>
                        </div>
                        <div><img src="images/service-04.png" alt='services'/>
                        <div>
                            <h6>Services</h6>
                            <p></p>
                        </div>
                        </div>
                        <div><img src="images/service-05.png" alt='services'/>
                        <div>
                            <h6>Services</h6>
                            <p></p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}
