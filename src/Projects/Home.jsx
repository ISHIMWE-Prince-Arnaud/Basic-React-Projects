import { Link } from "react-router-dom";
import './Home.css';  // Import the CSS file

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Your Productivity Hub</h1>
      
      {/* Summary of what the app does */}
      <p>
        This hub offers a variety of useful tools and features for everyday productivity 
        and personal management:
      </p>
      
      <h2>Task Manager</h2>
      <p>
        A simple yet effective task management app that helps users organize, 
        track, and manage tasks. Users can mark tasks as completed, set deadlines, 
        and add important notes.
      </p>
      <Link to="/task_manager" className="app-link">Go to Task Manager</Link>
      
      <h2>Weather App</h2>
      <p>
        This app fetches real-time weather information and provides forecasts 
        for different cities. Users can check the weather and get details like 
        temperature, humidity, wind speed, and more.
      </p>
      <Link to="/weather_app" className="app-link">Go to Weather App</Link>
      
      <h2>Expense Tracker</h2>
      <p>
        A finance management tool that allows users to track their daily expenses, 
        categorize them, and set budgets to stay on top of their finances.
      </p>
      <Link to="/expense_tracker" className="app-link">Go to Expense Tracker App</Link>
      
      <h2>Summary</h2>
      <p>
        In short, this hub is a one-stop solution for managing tasks, checking weather, 
        tracking expenses, and publishing blog content. It leverages React and React Router 
        for seamless navigation across different features, ensuring an efficient and 
        user-friendly experience.
      </p>
    </div>
  );
}
export default Home;