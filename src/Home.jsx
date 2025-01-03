import { SignInButton, SignOutButton, SignUpButton } from "@clerk/clerk-react";
import { Button } from "./components/ui/button";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import MostSearchedCar from "./components/MostSearchedCar";
import Footer from "./components/Footer";
const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Categories />
      <MostSearchedCar />
      <Footer />
    </div>
  );
};

export default Home;
