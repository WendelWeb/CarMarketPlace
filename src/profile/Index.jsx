import { Button } from "../components/ui/button";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <Header />
      <div className="px-10 md:px-20 py-10">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-4xl">My Listings</h2>
          <Link to="/add-listing">
            <Button>+ add listing</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
