import { Link } from "react-router-dom";
import Input from "../../components/Input";
import { useState } from "react";
import { useCreateUserMutation } from "../../services/userApi";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // hooks
  const [createUser, { isLoading }] = useCreateUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (!userName && !email && !password) {
      toast.error("Fill up all the fields");
      return;
    }

    try {
      const payload = { userName, email, password };
      const result = await createUser(payload).unwrap();
      dispatch(setUser(result));
      toast.success("Created Successfully");
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error("Failed to create");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-96 p-10">
        <h2 className="text-2xl text-primary-dark font-bold text-center">
          Sign Up
        </h2>

        <form>
          <Input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            size="lg"
            label="Name"
            placeholder="Write Your Name"
          />
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size="lg"
            label="Email"
            placeholder="Write Your Email"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            size="lg"
            label="Password"
            placeholder="Write Your Password"
          />

          <input
            className="btn btn-primary w-full mt-4"
            value={isLoading ? "Loading.." : "Sign Up"}
            onClick={handleSignUp}
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
