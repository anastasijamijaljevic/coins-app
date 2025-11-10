import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <span>Website</span>
        <span>Users</span>
        <span>Coins</span>
        <span>Exchanges</span>
      </div>

      <p className="footer-text">
        Crypto app made by: <b>Anastasija Mijajljevic</b>, <b>Daris Bihorac</b>, <b>Ali Alic</b>
      </p>
      <p className="footer-copy">© 2022 Crypto App</p>
    </footer>
  );
}

export default Footer;
