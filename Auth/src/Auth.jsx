import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

export default function Auth() {
  const [page, setPage] = useState("login");

  return (
    <div id="auth" className=" min-h-screen flex items-center justify-center">
      {page === "login" ? (
        <Login switchToSignup={() => setPage("signup")} />
      ) : (
        <Signup switchToLogin={() => setPage("login")} />
      )}
    </div>
  );
}
