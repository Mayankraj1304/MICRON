import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

const Auth = React.lazy(() => import("auth/Auth"));
const Dashboard = React.lazy(() => import("dashboard/Dashboard"));
const Profile = React.lazy(() => import("profile/Profile"));

function Home() {
  return <h2>Home Page (Container)</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-500">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login">Login</Link>
        </nav>

        <ErrorBoundary>
          <Suspense fallback={<p>Loading...</p>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Auth />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </div>
    </BrowserRouter>
  );
}

export default App;
