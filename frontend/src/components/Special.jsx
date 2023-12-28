import SpecialProducts from './SpecialProducts';

export default function Special() {
  return (
    <section className="special py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
          <h3 className="section-heading pb-3">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProducts/>
          <SpecialProducts/>
          <SpecialProducts/>
        </div>
      </div>
    </section>
  );
}
