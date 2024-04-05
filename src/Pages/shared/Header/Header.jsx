import logo  from "../../../assets/logo.png"
import moment from 'moment';
const Header = () => {
  return (
    <div className="text-center mt-6">
      <img className="mx-auto" src={logo} alt="" />
      <p className="text-xl">Journalism Without Fear or Favour</p>
      <p className="text-xl font-medium">{moment().format("dddd, MMMM  YYYY")}</p>
    </div>
  );
};

export default Header;