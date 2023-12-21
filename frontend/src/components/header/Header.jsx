import { NavLink, Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import HeaderTop from './HeaderTop';
import Menu from './Menu';


export default function Header() {
  return (
    <>
      <HeaderTop/>
      <Menu/>     

    </>
  );
}
