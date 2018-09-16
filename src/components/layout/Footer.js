import React from "react";
import "./footer.css";

const Footer = () => (
  <footer className="footer">
    <div
      className="container text-center"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      Copyright{" "}
      <a
        className="footer-a"
        href="http://www.control-f5.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Control-F5.com {new Date().getFullYear()}
      </a>
      . Powered by{" "}
      <a
        className="footer-a"
        style={{ textDecoration: "none" }}
        href="https://developer.musixmatch.com/documentation"
        target="_blank"
        rel="noopener noreferrer"
      >
        Musixmatch lyrics API
      </a>
    </div>
  </footer>
);

export default Footer;
