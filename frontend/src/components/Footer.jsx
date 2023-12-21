import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";






export default function Footer() {
  return (
    <footer className="page-footer font-small blue pt-4 text-white footer-bg">
      <div className="container-xxl text-md-left ">
        <div className="row">
          <div className="col-md-3 mt-md-0 mt-3">
            <h6 className="text-uppercase">Contact Us</h6>
            <address>
            Mahatma Gandhi Marg, Bhikaji Cama Place, RK Puram<br />
            New Delhi<br />
            210607<br />
            011 4224 7217<br />
            helpdesk@buyit.com
            </address>
            <div className="social-icons d-flex justify-content-center justify-content-between">
                <div><FaTwitter /></div>
                <div><FaFacebookF /></div>
                <div><FaInstagram /></div>
                <div><FaPinterestP /></div>
                <div><FaYoutube /></div>
            </div>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-2 mb-md-0 mb-2 text-center ">
            <h6 className="text-uppercase">Information</h6>
            <ul className="list-unstyled">
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
              <li>Shipping Policy</li>
              <li>Terms of Service</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className="col-md-2 mb-md-0 mb-2 text-center ">
            <h6 className="text-uppercase">Account</h6>
            <ul className="list-unstyled">
              <li>Search</li>
              <li>About Us</li>
              <li>FAQ</li>
              <li>Contact</li>
              <li>Size Chart</li>
            </ul>
          </div>

          <div className="col-md-2 mb-md-0 mb-2 text-center ">
            <h6 className="text-uppercase">Quick Links</h6>
            <ul className="list-unstyled">
              <li>Accessories</li>
              <li>Laptops</li>
              <li>Headphones</li>
              <li>Smart Watches</li>
              <li>Tablet</li>
            </ul>
          </div>

          <div className="col-md-3 mt-md-0 mt-3">
            <h6 className="text-uppercase">Our App</h6>
            <p>
              Download our App and get 15% discount on your first order.
            </p>
            <div className="d-flex">
                <div className='display-3'><FaGooglePlay/></div>
                <div className='display-3'><FaAppStore/></div>
            </div>
          </div>

        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © {new Date().getFullYear()} Copyright 
        <a href="#" className='gap-2'> <sub>BUY</sub>It</a>
      </div>
    </footer>
  );
}
