import { Link } from "react-router-dom";
import Input from "../../components/Input";
import { useState } from "react";
import { useLoginMutation } from "../../services/userApi";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // hooks
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email && !password) {
      toast.error("Fill up all the fields");
      return;
    }

    try {
      const payload = { email, password };
      const result = await login(payload).unwrap();
      dispatch(setUser(result));
      toast.success("Login Successfully");
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error("Failed to login");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-96 p-10">
        <h2 className="text-2xl text-primary-dark font-bold text-center">
          Login
        </h2>

        <form>
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
            value={isLoading ? "Signing.." : "Sign In"}
            onClick={handleLogin}
          />
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
