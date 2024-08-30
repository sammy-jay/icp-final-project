import { Link, useNavigate } from "react-router-dom";
import { urius_icp_backend } from "declarations/urius-icp-backend";
import { useState } from "react";

export default function SignUp() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
  });


  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  };

  const handleSubmit = () => {
    if(form.email && form.username && form.password){
      setIsLoading(true)
      urius_icp_backend.signUp(form.email, form.username, form.password).then((value) => {
        if(value == true) {
          // change route to dashboard
          setIsLoading(false)
          localStorage.setItem("username", form.username);
          navigate("/dashboard")
        }
        else{
          console.log("Something went wrong")
          setIsLoading(false)
        }
      })
    }

  };

  return (
    <>
      <div className="bg-gray-100 max-w-[700px] mx-auto lg:my-12 rounded-2xl flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Urius"
            src="assets/urius-logo.png"
            className="mx-auto h-auto w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up for a new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={(e) => handleChange(e)}
                required
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                value={form.username}
                onChange={(e) => handleChange(e)}
                required
                autoComplete="username"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="my-2">
              <input
                id="password"
                name="password"
                type="password"
                onChange={(e) => handleChange(e)}
                required
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="flex w-full justify-center rounded-md bg-slate-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
            >
              Sign up
            </button>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?{" "}
            <Link
              to="/auth/sign-in"
              className="font-semibold leading-6 text-slate-600 hover:text-slate-500"
            >
              Login to continue
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
