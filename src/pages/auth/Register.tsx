import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Register</h1>
      <div onClick={() => navigate("/login")}>Go to login</div>
    </div>
  );
}
