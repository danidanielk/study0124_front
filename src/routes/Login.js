import axios from "axios";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onJoin = () => {
    window.location.assign("/join");
  };

  const onEmail = (e) => {
    setEmail(e.target.value);
  };

  const onPassword = (e) => {
    setPassword(e.target.value);
  };

  const onLogin = () => {
    const logindata = new FormData();
    logindata.append("email", email);
    logindata.append("password", password);
    axios
      .post("http://localhost:8080/login", logindata, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    window.location.assign("/");
  };

  return (
    <>
      <main class="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
        <section class="flex w-[30rem] flex-col space-y-10">
          <div class="text-center text-4xl font-medium">Log In</div>

          <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="text"
              placeholder="Email or Username"
              class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              value={email}
              onChange={onEmail}
            />
          </div>

          <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="password"
              placeholder="Password"
              class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              value={password}
              onChange={onPassword}
            />
          </div>

          <button
            class="transform rounded-sm bg-[#FF6A3D] py-2 font-bold duration-300 hover:bg-indigo-400"
            onClick={onLogin}
          >
            LOG IN
          </button>

          <button
            href="#"
            class="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
          >
            FORGOT PASSWORD?
          </button>

          <p class="text-center text-lg">
            No account?
            <button
              href="#"
              class="font-medium text-[#FF6A3D] underline-offset-4 hover:underline"
              onClick={onJoin}
            >
              Create One
            </button>
          </p>
        </section>
      </main>
    </>
  );
}
export default Login;
