import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function Home() {
  return (
    <div>
      <PageNav />
      <h1>Home</h1>
      {/* <a href="/pricing">Pricing</a> */}
      <Link to="/pricing">Pricing</Link>
    </div>
  );
}

export default Home;
