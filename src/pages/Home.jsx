import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";

function Home() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1>Home</h1>
      {/* <a href="/pricing">Pricing</a> */}
      <Link to="/app">Go to App</Link>
    </div>
  );
}

export default Home;
