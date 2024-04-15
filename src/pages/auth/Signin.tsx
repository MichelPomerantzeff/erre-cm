import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="flex justify-center">
      <div className="flex h-full mt-[10vh] mx-auto w-[95vw] max-w-[500px] p-6 md:shadow rounded">
        {/* Sign in section */}
        <form className="w-full max-w-full flex-col items-center">
          <h4 className="mb-2.5 text-4xl font-bold text-navy-700">Sign In</h4>
          <p className="mb-9 ml-1 text-base text-gray-600">
            Enter your email and password to sign in!
          </p>
          {/* Email */}
          <div className="mt-2 space-y-1">
            <label htmlFor="email" className="font-medium">
              Email*
            </label>
            <input
              type="text"
              placeholder="email@example.com"
              className="flex h-12 w-full items-center justify-center rounded-lg border bg-white/0 p-3 text-sm outline-none border-gray-300"
            />
          </div>

          {/* Password */}
          <div className="mt-2 space-y-1">
            <label htmlFor="email" className="font-medium">
              Password*
            </label>
            <input
              type="password"
              placeholder="Min. 8 characters"
              className="flex h-12 w-full items-center justify-center rounded-lg border bg-white/0 p-3 text-sm outline-none border-gray-300"
            />
          </div>

          <div className="mb-4 flex items-center px-2">
            <a
              className=" mt-2 text-sm font-medium text-blue-500 hover:text-blue-600"
              href=""
            >
              Forgot Password?
            </a>
          </div>
          <button className="max-h-[48px] linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium transition duration-200 text-white hover:bg-brand-600 active:bg-brand-700">
            Signin
          </button>
          <div className="mt-4">
            <span className=" text-sm font-medium">Not registered yet?</span>
            <Link
              to="/register"
              className="ml-1 text-sm font-medium text-blue-500 hover:text-blue-600"
            >
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
