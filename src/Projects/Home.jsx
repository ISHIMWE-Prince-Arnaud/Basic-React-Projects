import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Link to="/task_manager">
        Go to Task Manager
      </Link>
      <Link to="/weather_app" >
      Go To Weather App
      </Link>
      <Link to="/expense_tracker" >
      Go To Expense Tracker App
      </Link>
    </>
  );
}

export default Home;