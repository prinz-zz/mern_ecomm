import Meta from "../components/Meta";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <Meta title={"Login"} />
      <div className="bread-crumbs py-3 header-upper">
        <div className="container-xxl">
          <div className="col-12 text-center">
            <h1>
              <a className="text-white" href="/">
                <sub>BUY</sub>It
              </a>
            </h1>
          </div>
        </div>
      </div>

      <div className="store-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="login-card">
                <h3 className="text-center">Login</h3>
                <form>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <Link to="/forgot" className="forgot">Forget password?</Link>
                  <div className="d-flex justify-content-center gap-3 mb30">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </div>
                  <div className="signUp">
                  <div className="strike">
                    <h6>New to BuyIT</h6>
                  </div>
                  <div className="text-center">
                    <Link to="/signup" className="btn btn-primary ">
                      Create your BuyIT account
                    </Link>
                  </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
