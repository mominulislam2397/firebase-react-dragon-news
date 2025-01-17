import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import {useLoaderData} from "react-router-dom";
import NewsCard from "./NewsCard";


const Home = () => {

 const news = useLoaderData();
 console.log(news);
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        {/* new coming  */}
        <div className="md:col-span-2">
          {
            news.map(aNews => <NewsCard key={aNews._id} news={aNews} ></NewsCard>)
          }
        </div>
        <div className="border-2 border-green-500">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;