import Meta from "../components/Meta";
import { Link } from "react-router-dom";


export default function ForgotPassword(){
    return(
        <>
        <Meta title={"Forgot password"} />
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
                  <h3 className="text-center">Reset your password</h3>
                  <p className="reset">We will send you an email to restet your password</p>
                  <form>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  
                    <div className="d-flex justify-content-center gap-3 mb30">
                      <button type="submit" className="btn btn-primary">
                        Send
                      </button>
                    </div>
                    
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}