import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Input from "../../components/Input";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = () => {};

  return (
    <div className="flex justify-center items-center">
      <div className="w-96 p-10">
        <h2 className="text-2xl text-primary-dark font-bold text-center">
          Login
        </h2>

        <form onSubmit={handleSubmit(handleLogin)}>
          <Input
            size="lg"
            label="Email"
            placeholder="Write Your Email"
            {...register("email", {
              required: "Email is Required",
            })}
            error={errors.email?.message}
          />

          <Input
            type="password"
            size="lg"
            label="Password"
            placeholder="Write Your Password"
            {...register("password", {
              required: "Password is Required",
            })}
            error={errors.password?.message}
          />

          <input
            className="btn btn-primary w-full mt-4"
            value="Login"
            type="submit"
          />

          <div>
            {/* {loginError && <p className="text-red-600">{loginError}</p>} */}
          </div>
        </form>

        <p>
          New to Event Manager{" "}
          <Link className="text-blue-800 underline" to="/signup">
            Create new Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
