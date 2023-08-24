import Logo from "../assets/img/treblig-blog.png";
const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="logo" />
      <span>
        Made with ❤️ and <b>React.js</b>
      </span>
    </footer>
  );
};

export default Footer;
