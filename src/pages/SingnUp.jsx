import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const SingUp = () => {
  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(4).max(8),
    confirmPassword: yup.string().oneOf([yup.ref("password")]),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitOnRegister = (data) => {
    localStorage.setItem('user', 'user name');
    navigate("/main-page");
    console.log(data);
  };

  const handleEye = () => {
    if (showPass === false) {
      setShowPass(true);
    } else {
      setShowPass(false);
    }
  };

  return (
    <div className="register-box">
      <form onSubmit={handleSubmit(submitOnRegister)}>
        <input type="text" placeholder="User name..." {...register("name")} />
        <span className="errors">{errors.name?.message}</span>

        <input type="email" placeholder="Email..." {...register("email")} />
        <span className="errors">{errors.email?.message}</span>

        <div className="relative">
          <input
            type={showPass ? "text" : "password"}
            placeholder="Password..."
            {...register("password")}
          />
          <span className="errors">{errors.password?.message}</span>
        </div>

        <div className="relative">
          <input
            type={showPass ? "text" : "password"}
            placeholder="Confirm password..."
            {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message && <span className="errors">confirm is uncorect</span>}

          <div style={{ color: "#ccc" }} onClick={handleEye} className="eye2">
            <FontAwesomeIcon
              style={{ marginTop: "5px" }}
              icon={showPass ? faEye : faEyeSlash}
            />
            <span style={{ fontSize: "12px" }}> show password?</span>
          </div>
        </div>

        <button className="sign-up-btn" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};
