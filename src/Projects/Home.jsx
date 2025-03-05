import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Link to="/task_manager" style={{ textDecoration: "none", padding: "10px", background: "blue", color: "white", borderRadius: "5px", display: "inline-block" }}>
        Go to Task Manager
      </Link>
      <Link to="/weather_app" >
      Go To Weather App
      </Link>
    </>
  );
}

export default Home;