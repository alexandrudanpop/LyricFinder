import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <span className="text-muted">
          Powered by{" "}
          <a
            style={{ textDecoration: "none" }}
            href="https://developer.musixmatch.com/documentation"
          >
            Musixmatch lyrics API
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
