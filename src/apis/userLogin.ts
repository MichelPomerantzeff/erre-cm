import axios from "axios";
import { toast } from 'sonner'

const loginUrl = "https://app.grupoerre.pt:1934/auth/login";

type User = {
  email: string;
  password: string;
}

export function login({ email, password }: User) {
  return axios
    .post(loginUrl, {
      email,
      password
    })
    .then((response) => {
      console.log(response);
      toast.success("User logged in successfully")
    })
    .catch((error) => {
      console.error("Error:", error);
      toast.error(error.response.data.message)
    });
}