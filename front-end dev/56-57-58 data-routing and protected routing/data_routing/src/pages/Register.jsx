import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  let { registeredUsers, setRegisteredUsers } = useContext(Auth);

const handleFormSubmit = (data) => {
  const userExists = registeredUsers.some(
    (user) => user.email === data.email
  );

  if (userExists) {
    toast.error("Email already exists!");
    return;
  }

  const newUsers = [...registeredUsers, data];

  setRegisteredUsers(newUsers);
  localStorage.setItem("registeredUsers", JSON.stringify(newUsers));

  toast.success("Registration successful!");
  reset();
  
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Name</label>
          <input
            {...register("name", {
              required: "Name is required",
            })}
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Email</label>
          <input
            {...register("email", {
              required: "Email is required",
            })}
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">Password</label>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Register Button */}
        <button
          type="submit"
          disabled={!isValid}
          className={`w-full py-2 rounded-md text-white transition ${
            isValid
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Register
        </button>

        {/* Login Link */}
        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <span
          onClick={() => navigate("/")}
          className="text-blue-600 hover:underline font-medium cursor-pointer">
            Login here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;