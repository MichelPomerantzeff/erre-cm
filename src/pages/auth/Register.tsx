import { Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { createUser } from "../../apis/createUser";
import { Toaster } from "sonner";

export default function Register() {
  const createUserSchema = z
    .object({
      firstName: z.string().min(2).max(30),
      lastName: z.string().min(2).max(30),
      email: z.string().email(),
      password: z.string().min(8).max(30),
      confirmPassword: z.string().min(8).max(30),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  type CreateUserSchema = z.infer<typeof createUserSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserSchema>({
    resolver: zodResolver(createUserSchema),
  });

  const { isPending, mutate } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {},
  });

  const submitRegistration = (data: CreateUserSchema) => {
    mutate(data);
  };

  return (
    <div className="flex justify-center">
      <Toaster richColors position="bottom-center" />
      <div className="flex h-full mt-[10vh] mx-auto w-[95vw] max-w-[500px] p-6 md:shadow rounded">
        {/* Sign in section */}
        <form
          className="w-full max-w-full flex-col items-center"
          onSubmit={handleSubmit(submitRegistration)}
        >
          <h4 className="mb-2.5 text-4xl font-bold text-navy-700">Register</h4>
          <p className="mb-9 ml-1 text-base text-gray-600">
            Enter your name, email and password to register!
          </p>

          {/* First Name */}
          <div className="mt-2 space-y-1">
            <label htmlFor="First Name" className="font-medium">
              First Name*
            </label>
            <input
              {...register("firstName")}
              type="text"
              placeholder="First Name"
              className="flex h-12 w-full items-center justify-center rounded-lg border bg-white/0 p-3 text-sm outline-none border-gray-300"
            />
            {errors.firstName && (
              <span className="text-red-500">{errors.firstName?.message}</span>
            )}
          </div>

          {/* Last Name */}
          <div className="mt-2 space-y-1">
            <label htmlFor="email" className="font-medium">
              Last Name*
            </label>
            <input
              {...register("lastName")}
              type="text"
              placeholder="Last Name"
              className="flex h-12 w-full items-center justify-center rounded-lg border bg-white/0 p-3 text-sm outline-none border-gray-300"
            />
            {errors.lastName && (
              <span className="text-red-500">{errors.lastName?.message}</span>
            )}
          </div>

          {/* Email */}
          <div className="mt-2 space-y-1">
            <label htmlFor="email" className="font-medium">
              Email*
            </label>
            <input
              {...register("email")}
              type="text"
              placeholder="email@example.com"
              className="flex h-12 w-full items-center justify-center rounded-lg border bg-white/0 p-3 text-sm outline-none border-gray-300"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email?.message}</span>
            )}
          </div>

          {/* Password */}
          <div className="mt-2 space-y-1">
            <label htmlFor="email" className="font-medium">
              Password*
            </label>
            <input
              {...register("password")}
              type="password"
              placeholder="Min. 8 characters"
              className="flex h-12 w-full items-center justify-center rounded-lg border bg-white/0 p-3 text-sm outline-none border-gray-300"
            />
            {errors.password && (
              <span className="text-red-500">{errors.password?.message}</span>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mt-2 space-y-1">
            <label htmlFor="email" className="font-medium">
              Confirm Password*
            </label>
            <input
              {...register("confirmPassword")}
              type="password"
              placeholder="Min. 8 characters"
              className="flex h-12 w-full items-center justify-center rounded-lg border bg-white/0 p-3 text-sm outline-none border-gray-300"
            />
            {errors.confirmPassword && (
              <span className="text-red-500">
                {errors.confirmPassword?.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="max-h-[48px] linear mt-4 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium transition duration-200 text-white hover:bg-brand-600 active:bg-brand-700"
          >
            {isPending ? "Loading" : "Register"}
          </button>

          <div className="mt-4">
            <span className=" text-sm font-medium">
              Already have an account?
            </span>
            <Link
              to="/login"
              className="ml-1 text-sm font-medium text-blue-500 hover:text-blue-600"
            >
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
