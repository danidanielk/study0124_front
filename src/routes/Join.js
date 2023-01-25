import axios from "axios";
import { useState } from "react";

function Join() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [password, setpassword] = useState("");
  const [password2, setpassword2] = useState("");

  const onName = (e) => {
    setName(e.target.value);
  };
  const onEmail = (e) => {
    setEmail(e.target.value);
  };
  const onPhone = (e) => {
    setPhone(e.target.value);
  };
  const onPassword = (e) => {
    setpassword(e.target.value);
  };
  const onPassword2 = (e) => {
    setpassword2(e.target.value);
  };

  const onLogin = () => {
    window.location.assign("/login");
  };
  const onJoin = () => {
    const joindata = new FormData();
    joindata.append("name", name);
    joindata.append("email", email);
    joindata.append("phone", phone);
    joindata.append("password", password);
    joindata.append("password2", password2);
    axios
      .post("http://localhost:8080/join", joindata, {
        headers: { "Content-Type": "application/json" },
      })
      .then((Response) => {
        console.log(Response);
        window.location.assign("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div class="mx-auto flex min-h-screen w-full bg-gray-900 p-4 flex items-center justify-center">
      <div class="bg-gray-900 py-6 px-10 sm:max-w-md w-full ">
        <div class="sm:text-3xl text-2xl font-semibold text-center text-[#FF6A3D]  mb-12">
          Registration Form
        </div>
        <div class="text-white">
          <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="text"
              placeholder="Name"
              class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              value={name}
              onChange={onName}
            />
          </div>
          <div class="w-full mt-8 transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="email"
              placeholder="Email address"
              class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              value={email}
              onChange={onEmail}
            />
          </div>
          <div class="w-full mt-8 transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="text"
              placeholder="Phone"
              class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              value={phone}
              onChange={onPhone}
            />
          </div>
          <div class="w-full mt-8 transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="password"
              placeholder="Password"
              class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              value={password}
              onChange={onPassword}
            />
          </div>
          <div class="w-full mt-8 transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="password"
              placeholder="Password"
              class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              value={password2}
              onChange={onPassword2}
            />
          </div>

          <div class="flex">
            <input type="checkbox" class="border-[#FF6A3D] " value="" />
            <div class="px-3 text-gray-500">I accept terms & conditions</div>
          </div>
          <div class="flex justify-center my-6">
            <button
              class=" rounded-full  p-3 w-full sm:w-56   bg-[#FF6A3D] text-white text-lg font-semibold "
              onClick={onJoin}
            >
              Create Account
            </button>
          </div>
          <div class="flex justify-center ">
            <p class="text-gray-500">Already have an acount? </p>
            <button href="" class="text-sky-600 pl-2" onClick={onLogin}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Join;
