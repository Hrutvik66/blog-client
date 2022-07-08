import News_overview from "../components/News_overview";
import { Link } from "react-router-dom";
import { menuItems } from "../utils";

const Home = () => {
  return (
    <div className="p-[5rem] pt-[6rem] flex flex-col space-y-20">
      {/* Tazya batmya */}
      <div>
        <h3 className="text-xl font-bold">Tazya Batmya</h3>
        <div className="flex space-x-9">
          <div className="pr-2 py-2 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 flex-1">
            <Link to="/123">
              <News_overview
                title="Kitten is a beautiful pet111111111111111111 1111111111111111111111111"
                category="Entertainment"
                date="1 Jun, 2022"
                img="../../images/kitten.png"
              />
            </Link>
            <News_overview
              title="Kitten is a beautiful pet1111111111111111111111111111111111111111111"
              category="Entertainment"
              date="1 Jun, 2022"
              img="../../images/kitten.png"
            />
            <News_overview
              title="Kitten is a beautiful pet1111111111111111111111111111111111111111111"
              category="Entertainment"
              date="1 Jun, 2022"
              img="../../images/kitten.png"
            />
            <News_overview
              title="Kitten is a beautiful pet1111111111111111111111111111111111111111111"
              category="Entertainment"
              date="1 Jun, 2022"
              img="../../images/kitten.png"
            />
            <News_overview
              title="Kitten is a beautiful pet1111111111111111111111111111111111111111111"
              category="Entertainment"
              date="1 Jun, 2022"
              img="../../images/kitten.png"
            />
          </div>
          <div className="flex-[0.5] flex items-center justify-center border-black border-[1px]">
            Ad!
          </div>
        </div>
      </div>
      {/* Entertainment */}
      <div>
        <h1 className="text-xl font-bold">Entertainment</h1>
        <div className="flex space-x-9">
          <div className="pr-2 py-2 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 flex-1">
            <Link to="/123">
              <News_overview
                title="Kitten is a beautiful pet111111111111111111 1111111111111111111111111"
                category="Entertainment"
                date="1 Jun, 2022"
                img="../../images/kitten.png"
              />
            </Link>
            <News_overview
              title="Kitten is a beautiful pet1111111111111111111111111111111111111111111"
              category="Entertainment"
              date="1 Jun, 2022"
              img="../../images/kitten.png"
            />
            <News_overview
              title="Kitten is a beautiful pet1111111111111111111111111111111111111111111"
              category="Entertainment"
              date="1 Jun, 2022"
              img="../../images/kitten.png"
            />
            <News_overview
              title="Kitten is a beautiful pet1111111111111111111111111111111111111111111"
              category="Entertainment"
              date="1 Jun, 2022"
              img="../../images/kitten.png"
            />
            <News_overview
              title="Kitten is a beautiful pet1111111111111111111111111111111111111111111"
              category="Entertainment"
              date="1 Jun, 2022"
              img="../../images/kitten.png"
            />
          </div>
          <div className="flex-[0.5] flex items-center justify-center border-black border-[1px]">
            Ad!
          </div>
        </div>
      </div>
      {/* Sports */}
      <div className="text-xl font-bold">
        <h1>Sports</h1>
        <div className="flex space-x-9">
          <div className="pr-2 py-2 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 flex-1">
            <Link to="/123">
              <News_overview
                title="Kitten is a beautiful pet111111111111111111 1111111111111111111111111"
                category="Entertainment"
                date="1 Jun, 2022"
                img="../../images/kitten.png"
              />
            </Link>
            <News_overview
              title="Kitten is a beautiful pet1111111111111111111111111111111111111111111"
              category="Entertainment"
              date="1 Jun, 2022"
              img="../../images/kitten.png"
            />
            <News_overview
              title="Kitten is a beautiful pet1111111111111111111111111111111111111111111"
              category="Entertainment"
              date="1 Jun, 2022"
              img="../../images/kitten.png"
            />
            <News_overview
              title="Kitten is a beautiful pet1111111111111111111111111111111111111111111"
              category="Entertainment"
              date="1 Jun, 2022"
              img="../../images/kitten.png"
            />
            <News_overview
              title="Kitten is a beautiful pet1111111111111111111111111111111111111111111"
              category="Entertainment"
              date="1 Jun, 2022"
              img="../../images/kitten.png"
            />
          </div>
        </div>
      </div>
      <div className="flex space-x-10 bg-red-400">
        <div className="flex flex-col items-center space-y-2">
          <h4 className="text-lg font-[500]">Category</h4>
          {menuItems.map((item) => (
            <Link to={item.link}>{item.name}</Link>
          ))}
        </div>
        <div className="flex flex-col items-center space-y-2">
          <h4 className="text-lg font-[500]">Social Media</h4>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Youtube</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
