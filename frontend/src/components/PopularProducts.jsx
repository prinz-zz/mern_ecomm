import ProductCard from './ProductCard';

export default function PopularProducts() {
  return (
    <section className="special py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading pb-3">Our Popular Products</h3>
          </div>
          <div className="col-3">
            <div className="famous-card-bg bg-dark text-white">
            <h5 className="">BIG SCREEN</h5>
            <h6 className="">Smart Series 7</h6>
            <p>From ₹80800 or ₹3400/mo</p>
            </div>
          </div>
          <div className="col-3"></div>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
    </section>
  );
}
