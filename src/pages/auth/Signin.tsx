import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Login</h1>
      <div onClick={() => navigate("/register")}>Go to register</div>
    </div>
  );
}
