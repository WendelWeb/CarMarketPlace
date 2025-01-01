import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { Button } from "./ui/button";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
const Header = () => {
  const { isSignedIn } = useUser();
  const liClasses =
    "font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary";
  console.log(isSignedIn);

  return (
    <div
      className={`${styles.header} flex justify-between items-center shadow-sm p-4`}
    >
      <div className="flex gap-1 items-center relative pr-2">
        <img width={50} src="/car-logo.png" alt="" />
        <span>AutoHeaven</span>
        <div className={`${styles.logoSeparator} absolute`}></div>
      </div>
      <ul className="hidden font-bold md:flex gap-16">
        <Link to="/">
          <li className={liClasses}>Home</li>
        </Link>
        <li className={liClasses}>Search</li>
        <li className={liClasses}>New</li>
        <li className={liClasses}>Preowned</li>
      </ul>

      {isSignedIn ? (
        <div className="flex items-center gap-5">
          <UserButton />{" "}
          <Link to="/profile">
            <Button>Submit Listing</Button>
          </Link>
        </div>
      ) : (
        <SignInButton mode="modal">
          <Button>Sign In</Button>
        </SignInButton>
      )}
    </div>
  );
};

export default Header;
