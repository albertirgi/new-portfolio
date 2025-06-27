import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <div className="socials">
            {socialImgs.map((socialImg, index) => (
              <div key={index} className="icon">
                <a href={socialImg.href} target="_blank">
                  <img src={socialImg.imgPath} alt="social icon" />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div />
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            Made with ❤ by Albert Irgi © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
