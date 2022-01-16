import Link from "next/link";
import Button from "../button";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
const validationSchema = yup.object().shape({
  email: yup.string().email().required("Email salah"),
  password: yup.string().min(8).required(),
});

//hanya data dummy, cek consume api
import Database from "../../db/user.json";

export default function Login({ setForm, setAlert }) {
  const [ShowPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const loginApi = async (e) => {
    const hit = await axios
      .post("http://localhost:5000/login", {
        email: "zikrimansyursyah@gmail.com",
        password: "password123456",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(hit);
  };

  const handleLogin = async (e) => {
    const { email, password } = formik.values;
    const user =
      (await Database.data.filter(
        (v) => v.email === email && v.password === password
      )) || [];
    if (user.length > 0) {
      sessionStorage.setItem("logged", true);
      sessionStorage.setItem("email", email);
      router.reload();
    } else {
      setAlert({
        type: false,
        message: "Username or Password is incorrect",
        isOpen: true,
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: () => handleLogin(),
  });

  return (
    <div className="w-9/12 md:w-8/12 lg:w-6/12">
      <h1 className="text-4xl font-semibold font-primary mb-1 mt-4">
        Hi There!
      </h1>
      <div className="text-gray-600">
        Welcome Back! please enter your details
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="w-full flex flex-col justify-center items-center gap-5 mt-5"
      >
        {Object.keys(formik.initialValues).map((key) => (
          <div className="w-full flex flex-col gap-2" key={key}>
            <label htmlFor={key} className="capitalize font-medium">
              {key}
            </label>
            <div className="flex">
              <input
                className={`w-full border p-3 border-gray-400 focus:outline-none ${
                  key == "password" || key == "confirm password"
                    ? " rounded-l-xl"
                    : "rounded-xl"
                }`}
                type={
                  key == "password" || key == "confirm password"
                    ? ShowPassword
                      ? "text"
                      : "password"
                    : "text"
                }
                id={key}
                name={key}
                placeholder={`Enter your ${key}`}
                onChange={formik.handleChange}
                invalid={formik.touched[key] && Boolean(formik.errors[key])}
                required
              />
              {key == "password" || key == "confirm password" ? (
                <div
                  className="px-2 border-y border-r border-gray-400 rounded-r-xl cursor-pointer flex items-center"
                  onClick={() => {
                    setShowPassword(ShowPassword ? false : true);
                  }}
                >
                  {ShowPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
            {formik.touched[key] && Boolean(formik.errors[key]) && (
              <span className="text-xs pl-2 text-red-600">
                {formik.errors[key]}
              </span>
            )}
          </div>
        ))}
        <div className="w-full flex justify-between">
          <div className="checkbox flex gap-2 items-center">
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <Link href="/">
            <a>Forgot Password</a>
          </Link>
        </div>
        <Button isPrimary={true} type={"submit"}>
          Sign in
        </Button>
      </form>
      <Button isPrimary={false} type={"button"} clicked={loginApi}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          preserveAspectRatio="xMidYMid"
          viewBox="0 0 256 262"
        >
          <path
            fill="#4285F4"
            d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
          />
          <path
            fill="#34A853"
            d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
          />
          <path
            fill="#FBBC05"
            d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
          />
          <path
            fill="#EB4335"
            d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
          />
        </svg>
        Sign in with Google
      </Button>
      <div className="w-full text-center mt-7">
        Don&apos;t have an account?{" "}
        <span
          className="cursor-pointer font-medium"
          onClick={() => {
            setForm(false);
          }}
        >
          Sign up for free
        </span>
      </div>
    </div>
  );
}
