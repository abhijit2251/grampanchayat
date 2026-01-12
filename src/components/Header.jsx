import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="container py-3 d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center gap-3">
        <img src={logo} alt="logo" height="60" />
        <div>
          <h5 className="mb-0 text-primary">पिंपळनेर ग्रामपंचायत</h5>
          <small>जिल्हा सोलापूर, महाराष्ट्र</small>
        </div>
      </div>

      <div className="d-flex gap-5">
        <div>
          <strong>CALL US</strong>
          <div>XXXXXXXXXX</div>
        </div>
        <div>
          <strong>EMAIL US</strong>
          <div>abc@xyz.com</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
