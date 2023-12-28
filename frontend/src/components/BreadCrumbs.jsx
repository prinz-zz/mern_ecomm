import { Link } from "react-router-dom";

export default function BreadCrumbs(props) {
  const { title } = props;
  return (
    <div className="bread-crumbs py-3">
      <div className="container-xxl">
        <div className="col-12 text-center">
          <p className='text-secondary fw-bolder'>
            <Link to="/">Home </Link> / {title}
          </p>
        </div>
      </div>
    </div>
  );
}
