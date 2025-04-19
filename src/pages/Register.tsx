import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    const userData = {
      username,
      password,
    };

    localStorage.setItem("registeredUser", JSON.stringify(userData));

    console.log("Registered:", username, password);
    navigate("/");
  };

  return (
    <>
      <div className="card">
        <div className="flex flex-col">
          <div className="mb-[10px] text-center">
            <h2 className="text-[30px] text-[var(--primary)] uppercase">
              Registration
            </h2>
          </div>

          <div className="w-full mb-[10px] flex flex-col">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="w-full mb-[20px] flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="w-full text-[20px] text-[white] bg-[var(--primary)] p-[15px] rounded-[10px] border-none mt-[20px] uppercase"
            onClick={handleRegister}
          >
            Sign up
          </button>

          <div className="w-full text-right mt-4">
            <a
              onClick={() => navigate("/login")}
              className="text-sm text-[var(--primary)]/40 no-underline pt-[10px] hover:underline"
            >
              I already have an accaunt
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
