import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container mt-auto py-3 bg-dark text-white">
      <div className="container">
        <section className="footer-content" id="footer">
          <section className="form-footer">
            <h5 className="footer-title text-center mb-2">Designed with VSCODE!</h5>
            <p className="footer-text text-center mb-0">
              <span className="footer-year">&copy; {new Date().getFullYear()}</span> All rights reserved.
            </p>
            <p className="footer-creator text-center">Creator/s: DavidHCCNguyen</p>
          </section>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
