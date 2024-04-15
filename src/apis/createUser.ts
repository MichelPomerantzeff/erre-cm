import axios from "axios";
import { toast } from 'sonner'

const createUserUrl = "https://app.grupoerre.pt:1934/auth/create-user";

type NewUser = {
  firstName: string
  lastName: string
  email: string
  password: string
}

export function createUser({ firstName, lastName, email, password }: NewUser) {
  return axios
    .post(createUserUrl, {
      firstName, lastName, email, password
    })
    .then((response) => {
      console.log(response);
      toast.success("User created successfully")
    })
    .catch((error) => {
      console.error("Error:", error);
      toast.error(error.response.data.message)
    });
}