import Marquee from "react-fast-marquee";

export default function Marque() {
  return (
    <section className="home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="marquee">
              <Marquee pauseOnHover={true}>
                <img src="images/brand-01.png" alt="brand" />
                <img src="images/brand-02.png" alt="brand" />
                <img src="images/brand-03.png" alt="brand" />
                <img src="images/brand-04.png" alt="brand" />
                <img src="images/brand-05.png" alt="brand" />
                <img src="images/brand-06.png" alt="brand" />
                <img src="images/brand-07.png" alt="brand" />
                <img src="images/brand-08.png" alt="brand" />
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
