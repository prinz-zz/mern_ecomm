import ProductCard from './ProductCard';


export default function Collections() {
  return (
    <section className="home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
        <h3 className="section-heading pb-3">Featured Collections</h3>
          <div className="col-12 d-flex gap-3">
            
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
      </div>
    </section>
  );
}
