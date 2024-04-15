import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-lvh items-center justify-center">
      <div className="flex flex-col items-center">
        <span className="text-[8rem] md:text-[12rem] lg:text-[18rem] text-gray-300">
          404
        </span>
        <span className="text-[1.5rem] md:text-[2rem] lg:text-[3rem] ">
          Not Found
        </span>
      </div>
      <button
        className="linear mt-8 rounded-xl bg-brand-500 px-6 py-[12px] text-base font-medium transition duration-200 text-white hover:bg-brand-600 active:bg-brand-700"
        onClick={() => navigate("/login")}
      >
        Go to Login page
      </button>
    </div>
  );
}
