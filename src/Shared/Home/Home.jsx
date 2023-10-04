import Header from "../../Pages/Header/Header";
import Navbar from "../../Pages/Navbar/Navbar";

const Home = () => {
  return (
    <div className=" bg-home-bg h-screen bg-cover">
      <div className="hero-overlay bg-opacity-80 py-5">
        <Navbar></Navbar>
        <div className="flex items-center container mx-auto h-fit">
          <Header></Header>
        </div>
      </div>
    </div>
  );
};

export default Home;
