import BreadCrumbs from "../components/BreadCrumbs";
import Meta from "../components/Meta";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumbs title="Contact Us" />
      <div className="store-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7003.064550431764!2d77.24335326611838!3d28.643777097975608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcde4dc07937%3A0xe8bda90243d34f7e!2sAtlantic%20Publishers%20%26%20Distributors%20(P)%20Ltd!5e0!3m2!1sen!2sin!4v1703679933013!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div className="col-12">
            <div className="contact d-flex justify-content-between py-5 gap-5">
              <div className="col-6">
                <h3 className="contact-title">Contact</h3>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Phone number"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Comment"></textarea>
                </div>
                <button type="button" className="btn btn-dark">
                  Send
                </button>
              </div>
              <div className="col-6">
                <h3 className="contact-title">Get in touch with us</h3>
                <div className="mb-3 d-flex gap-3">
                  <div>
                    <FaHome />
                  </div>
                  <div>
                    Mahatma Gandhi Marg, Bhikaji Cama Place, RK Puram, New Delh, 210607
                  </div>
                </div>
                <div className="mb-3 d-flex gap-3">
                  <div>
                    <FaPhoneAlt />
                  </div>
                  <div>011 4224 7217</div>
                </div>
                <div className="mb-3 d-flex gap-3">
                  <div>
                    <FaEnvelope />
                  </div>
                  <div>helpdesk@buyit.com</div>
                </div>
                <div className="mb-3 d-flex gap-3">
                  <div>
                    <FaBusinessTime />
                  </div>
                  <div>
                    Monday - Friday 10 AM - 6 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
