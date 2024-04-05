import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex">
      <button className="btn btn-secondary">Breaking</button>
      <Marquee pauseOnHover = {true} speed={100}>
        <Link to='/' className="mr-12">Match Highlights: Germany vs Spain — as it happened. Match Highlights: Germany vs Spain as...</Link>
        <Link to='/' className="mr-12">Match Highlights: Germany vs Spain — as it happened. Match Highlights: Germany vs Spain as...</Link>
        <Link to='/' className="mr-12">Match Highlights: Germany vs Spain — as it happened. Match Highlights: Germany vs Spain as...</Link>

      </Marquee>
    </div>
  );
};

export default BreakingNews;