/** FOOTER COMPONENT **/

import * as React from "react" 
import {Nav, Navbar, Container} from 'react-bootstrap'

export default function Footer () { 
  return (
    <footer className="text-center mt-0 p-5 bg-danger">
    © {new Date().getFullYear()}, Property of SMI
  </footer>
  )
} 
