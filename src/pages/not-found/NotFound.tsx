import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>404 Not found</h1>
      <div onClick={() => navigate("/login")}>Go to login</div>
    </div>
  );
}
