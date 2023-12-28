import BreadCrumbs from "../components/BreadCrumbs";
import Meta from "../components/Meta";
import Colors from "../components/Colors";

export default function SingleProduct() {
  return (
    <>
      <Meta title={"Single product"} />
      <BreadCrumbs title="Single product" />
      <div className="single-product-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">1</div>
            <div className="col-6">2</div>
          </div>
        </div>
      </div>
    </>
  );
}
