import { useEffect, useState } from "react";
import PortfolioList from "../PortfolioList/PortfolioList";
import "./Portfolio.scss";
import { webPortfolio } from "../../data";

const Portfolio = () => {
  const [selected, setSelected] = useState("web apps");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "web apps",
      title: "web apps",
    },
  ];

  useEffect(() => {
    if (selected === "web apps")
      return setData(webPortfolio);
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <a href={d.url}
              target="blank" 
              className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;