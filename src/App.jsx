import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { Roadmap } from "./components/roadmap";
import { FeatureSlider } from "./components/featureSlider";
import { Content } from "./components/content";

import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation data={landingPageData.Menu} />
      <Header data={landingPageData.Header} />

      <Content data={landingPageData.Story}/>

      <FeatureSlider data={landingPageData.Features1} />
      <Features data={landingPageData.Features3} />
      <Features data={landingPageData.Features2} />
      <Roadmap data={landingPageData.Roadmap} />
      <Features data={landingPageData.Team} />

      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
