import News_overview from "../components/News_overview";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-[5rem] pt-[6rem] grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Link to="/123">
        <News_overview
          title="Kitten is a beautiful pet1111111111111111111111111111111111111111111"
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
  );
};

export default Home;
