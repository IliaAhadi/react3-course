import { useState, type SubmitEvent } from "react";
import { useNavigate } from "react-router";
import type { IUser } from "../types";
import Banner from "../components/Banner";

// session 10

// "username": "emilys",
// "password": "emilyspass",

// "username": "jamesd",
// "password": "jamesdpass",

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const [user, setUser] = useState<IUser | null>(() => {
    const savedUserString = localStorage.getItem("user");
    return savedUserString ? (JSON.parse(savedUserString) as IUser) : null;
  });

  const navigate = useNavigate();

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (isLogin) {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();

      // console.log(data);

      const foundUser = data.users.find(
        (user: IUser) =>
          user.username === username && user.password === password,
      );

      if (foundUser) {
        localStorage.setItem("user", JSON.stringify(foundUser));
        setUser(foundUser);
        navigate("/");
      }

      if (!foundUser) {
        setError("Incorrect username or password.");
        setUsername("");
        setPassword("");
      }
    }

    if (!isLogin) {
      alert("This is a demo register form.");
      setIsLogin(true);
      setName("");
      setUsername("");
      setPassword("");
    }
  }

  function handleLogout() {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/auth");
  }

  function switchMode() {
    setIsLogin(!isLogin);
    setError("");
  }

  if (user)
    return (
      <div>
        <Banner title={user.firstName} />
        <div className="flex flex-col items-center justify-center py-40">
          <h2 className="text-4xl mb-10 text-gray-500 font-bold">
            Hello <span className="text-orange-400">{user.firstName}</span>
          </h2>
          <button
            className="bg-red-500 text-white px-6 py-2 rounded-md cursor-pointer hover:bg-red-600 transition duration-300"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    );

  return (
    <div>
      <Banner title={isLogin ? "Login" : "Register"} />
      <div className="flex items-center justify-center pt-6 pb-20">
        <div className="px-6 py-10 rounded-2xl shadow-md shadow-orange-500 w-90 bg-orange-50 ">
          <h2 className="text-2xl text-orange-500 font-bold text-center mb-4">
            {isLogin ? "Login" : "Register"}
          </h2>
          <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
            {!isLogin && (
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-400 py-2 px-4 outlie-none rounded-md focus:border-orange-500"
                required
              />
            )}
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-gray-400 py-2 px-4 outlie-none rounded-md focus:border-orange-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-400 py-2 px-4 outlie-none rounded-md focus:border-orange-500"
              required
            />
            {error && (
              <p className="text-red-500 text-center text-sm font-medium">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="bg-orange-400 text-white py-2 rounded-md mt-2 cursor-pointer transition duration-300 hover:bg-orange-500  "
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </form>
          <div className="text-center text-sm mt-3 space-x-1">
            <span>
              {isLogin ? "Don't have an account?" : "Already have an account."}
            </span>
            <button
              className="text-blue-600 font-bold cursor-pointer hover:underline"
              onClick={switchMode}
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
// end of session 10
