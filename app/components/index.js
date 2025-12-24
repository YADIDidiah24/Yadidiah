import dynamic from "next/dynamic";
import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";
import Tech from "./Tech";
import Experience from "./Experience";
import Works from "./Works";
import Education from "./Education";
import Blog from "./Blog";
import Feedbacks from "./Feedbacks";
import Certifications from "./Certifications";
import Contact from "./Contact";
import CanvasLoader from "./Loader";
import OtherTechnologies from "./OtherTechnologies";
import ThemeToggle from "./ThemeToggle";

const EarthCanvas = dynamic(() => import("./canvas/Earth"), { ssr: false });
const BallCanvas = dynamic(() => import("./canvas/Ball"), { ssr: false });
const ComputersCanvas = dynamic(() => import("./canvas/Computers"), { ssr: false });
const StarsCanvas = dynamic(() => import("./canvas/Stars"), { ssr: false });

export {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Education,
  Blog,
  Feedbacks,
  Certifications,
  Contact,
  CanvasLoader,
  EarthCanvas,
  BallCanvas,
  ComputersCanvas,
  StarsCanvas,
  OtherTechnologies,
  ThemeToggle,
};
