import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-xl font-bold">Login With</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle></FaGoogle>
          Login With Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          Login With GitHub
        </button>
      </div>
      <div className="p-4  mb-6">
        <h2 className="text-xl mb-4 font-bold">Find Us On</h2>
        <a href="" className="p-4 flex text-lg items-center border rounded-t-lg font-bold" >
          <FaFacebook className="mr-3"></FaFacebook>
          <span>Facebook</span>
        </a>
        <a href="" className="p-4 flex text-lg items-center border-x font-bold">
          <FaTwitter className="mr-3"></FaTwitter>
          Twitter
        </a>
        <a href="" className="p-4 flex text-lg items-center border rounded-b-lg font-bold">
          <FaInstagram className="mr-3"></FaInstagram>
          InstaGram
        </a>
      </div>
      {/* q zone */}
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-xl font-bold">Q-Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
