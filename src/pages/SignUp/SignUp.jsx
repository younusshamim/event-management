//@ts-check
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Input from "../../components/Input";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = () => {};

  return (
    <div className="flex justify-center items-center">
      <div className="w-96 p-10">
        <h2 className="text-2xl text-primary-dark font-bold text-center">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit(handleSignUp)}>
          <Input
            size="lg"
            label="Name"
            placeholder="Write Your Name"
            {...register("name", {
              required: "Name is Required",
            })}
            error={errors.name?.message}
          />

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
            value="Sign Up"
            type="submit"
          />
          {/* {signUpError && <p className="text-red-600">{signUpError}</p>} */}
        </form>

        <p>
          Already have an account{" "}
          <Link className="text-blue-800 underline" to="/login">
            Please Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
