import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const savedUser = localStorage.getItem("registeredUser");
    const parsedUser = savedUser ? JSON.parse(savedUser) : null;

    const isRegistered =
    parsedUser &&
    username === parsedUser.username &&
    password === parsedUser.password;

    const isAdmin =
    username === "admin" && password === "qwe123";
    
    if (isAdmin || isRegistered) {
      navigate("/");
    } else {
      alert("Invalid login or password");
    }
  };

  return (
    <>
      <div className="card">
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-[10px]">
            <h2 className="text-[30px] text-[var(--primary)] uppercase">
              PetPJBuddy
            </h2>
            <button
              className="bg-[var(--primary)] w-[45px] h-[45px] text-[white] text-[30px] border-none rounded-[30px] pt-[3px]"
              onClick={() => navigate("/register")}
            >
              +
            </button>
          </div>

          <div className="w-full mb-[10px] flex flex-col">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="w-full mb-[20px] flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="w-full text-[20px] text-[white] bg-[var(--primary)] p-[15px] rounded-[10px] border-none mt-[20px] uppercase" onClick={handleLogin}>
            Login
          </button>

          <div className="w-full text-right mt-2">
            <a
              href="#"
              className="text-sm text-[var(--primary)]/40 no-underline pt-[10px]"
            >
              Forgot your password?
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
