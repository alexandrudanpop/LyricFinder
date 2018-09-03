import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        Copyright @2018{" "}
        <a className="footer-a" href="http://www.control-f5.com/">
          Control-F5.com{" "}
        </a>
        . Powered by{" "}
        <a
          className="footer-a"
          style={{ textDecoration: "none" }}
          href="https://developer.musixmatch.com/documentation"
        >
          Musixmatch lyrics API
        </a>
      </div>
    </footer>
  );
};

export default Footer;
