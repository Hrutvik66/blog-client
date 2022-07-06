//React
import { useState, useEffect } from "react";
//Hero icons
import { LockClosedIcon } from "@heroicons/react/solid";

const Login = () => {
  // const Navigate = useNavigate();
  //React States
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState({
    emailMessage: "",
    passwordMessage: "",
  });
  const [remember, setRemember] = useState(false);

  //* Validations

  const isRequired = (value) => (value === "" ? false : true);

  //Email validation
  const isEmailValid = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  //Password strength
  const isPasswordSecure = (password) => {
    const re = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    return re.test(password);
  };
  //Email check
  const checkEmail = () => {
    let email = userData.email;
    if (!isRequired(email)) {
      setMessage((prev) => ({ ...prev, emailMessage: "Email is required" }));
      return false;
    } else if (!isEmailValid(email)) {
      setMessage((prevState) => ({
        ...prevState,
        emailMessage: "Email is not valid.",
      }));
      return false;
    }
    return true;
  };
  //Password check
  const checkPassword = () => {
    let password = userData.password;
    if (!isRequired(password)) {
      setMessage((prev) => ({
        ...prev,
        passwordMessage: "Password is required",
      }));
      return false;
    } else if (!isPasswordSecure(password)) {
      setMessage((prevState) => ({
        ...prevState,
        passwordMessage:
          "Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)",
      }));
      return false;
    }
    return true;
  };
  // Handle changes in the form
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle submit
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setMessage(() => ({
        emailMessage: "",
        passwordMessage: "",
      }));
      if (checkEmail() && checkPassword()) {
        // const res = await axios.post("http://localhost:3001/Login", userData);
        // console.log(res.data);
        // Navigate("/Home");
        console.log(userData);
      } else {
        setUserData(() => ({
          email: "",
          password: "",
        }));
      }
    } catch (error) {
      console.log(error);
      // Navigate("/SignUp");
    }
    
  };
  return (
    <div className="flex items-center justify-center h-screen p-5">
      <div>
        <div>
          <LockClosedIcon className="mx-auto h-12 w-12 text-indigo-600" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="space-y-[2rem]">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            className="placeholder-gray-400 border-gray-400 border-[1.5px] p-2 w-full focus:outline-none focus:border-violet-600 rounded-md focus:"
            type="input"
            name="email"
            id="email-address"
            required
            placeholder="Enter Email"
            onChange={handleChange}
            value={userData.email}
          />
        </div>
        <div className="space-y-[1rem]">
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            className="placeholder-gray-400 border-gray-400 border-[1.5px] p-2 w-full focus:outline-none focus:border-violet-600 rounded-md"
            type="password"
            name="password"
            id="password"
            required
            placeholder="Password"
            onChange={handleChange}
            value={userData.password}
          />
        </div>
        <div className="flex items-center">
          <input
            className="m-5 ml-2 mr-3 h-4 w-4 accent-violet-600"
            type="checkbox"
            name="remember"
            id="remember"
            checked={remember}
            onClick={() => setRemember(!remember)}
          />
          <label htmlFor="remember" className="font-light">
            Remember me
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-violet-700 p-2 rounded-md text-white focus:ring ring-violet-500 ring-offset-4"
            onClick={handleSubmit}
          >
            Log in
          </button>
        </div>
        <div className="flex justify-center">
          <hr className="w-[50%] bg-black my-5 h-[1.5px]" />
        </div>
        <div>
          <button
            type="button"
            className="w-full bg-white border-[1.5px] border-black p-2 rounded-md flex content-center justify-center hover:border-violet-700"
          >
            <img src="../../images/google.png" alt="google" className="w-5 h-5 mr-5" />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
