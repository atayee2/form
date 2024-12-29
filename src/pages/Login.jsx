import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [showPass, setShowPass] = useState(false);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //   if (password === "") {
  //     return;
  //   }
  //   if (password.length < 4) {
  //     console.log('password is short');
  //   } else {
  //     console.log('password is fine');
  //   }
  // }, [password])

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    //login
    if (userName === "test" && password === "test") {
      localStorage.setItem("isLogged", "true");
      navigate("/");
    } else {
      alert("the name or password is uncorract");
    }
  };

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleChangePass = (e) => {
    setPassword(e.target.value);
  };

  const register = () => {
    navigate("/sign-up");
  };

  const handleShow = () => {
    if (showPass === false) {
      setShowPass(true);
    } else {
      setShowPass(false);
    }
  };

  return (
    <div className="login-box">
      <div className="form-header">
        <span className="">login </span>
        <span className="float-center">
          <FontAwesomeIcon icon={faUser} />
        </span>
      </div>

      <form onSubmit={login}>
        <div>
          <input
            onChange={handleChange}
            type="text"
            placeholder="user name..."
            required
          />
        </div>
        <div className="relative">
          <input
            onChange={handleChangePass}
            type={showPass ? "text" : "password"}
            placeholder="password"
            required
          />

          <span className="eye" onClick={handleShow}>
            <FontAwesomeIcon icon={showPass ? faEye : faEyeSlash} />
          </span>
        </div>
        <button
          className="bg-primary text-light fw-bold"
          type="submit"
        >
          Login
        </button>
      </form>

      <button
        className="bg-success text-light"
        onClick={register}
        style={{ fontWeight: "bold" }}
      >
        Register
      </button>
    </div>
  );
};
