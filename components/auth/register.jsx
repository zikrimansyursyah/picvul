import Button from "../button";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
const validationSchema = yup.object().shape({
  email: yup.string().email().required("Email salah"),
  password: yup.string().min(8).required(),
  "confirm password": yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

//hanya data dummy, cek consume api
import Database from "../../db/user.json";

export default function Register({ setForm, setAlert }) {
  const [ShowPassword, setShowPassword] = useState(false);
  const [ShowPassword2, setShowPassword2] = useState(false);

  const handleRegis = async () => {
    const { email, username, password } = formik.values;
    const user =
      (await Database.data.filter(
        (v) => v.email === email || v.username === username
      )) || [];
    if (user.length > 0) {
      setAlert({
        type: false,
        message: "User already exist",
        isOpen: true,
      });
    } else {
      const id = Math.floor(Math.random() * Date.now());
      Database.data.push({
        id: id,
        email: email,
        username: username,
        password: password,
      });
      setAlert({
        type: true,
        message: "Register Success",
        isOpen: true,
      });
      setForm(true);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      "confirm password": "",
    },
    validationSchema: validationSchema,
    onSubmit: () => handleRegis(),
  });

  return (
    <div className="w-9/12 md:w-8/12 lg:w-6/12 sm">
      <h1 className="text-4xl font-semibold font-primary mb-1 mt-4">
        Get Started!
      </h1>
      <div className="text-gray-600">we are waiting for you, come join</div>
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
                  key == "password"
                    ? ShowPassword
                      ? "text"
                      : "password"
                    : key == "confirm password"
                    ? ShowPassword2
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
                    key == "password"
                      ? setShowPassword(ShowPassword ? false : true)
                      : setShowPassword2(ShowPassword2 ? false : true);
                  }}
                >
                  {key == "password" ? (
                    ShowPassword ? (
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
                    )
                  ) : ShowPassword2 ? (
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
        <Button isPrimary={true} type={"submit"}>
          Sign up
        </Button>
      </form>
      <div className="w-full text-center mt-7">
        Already have an account?{" "}
        <span
          className="cursor-pointer font-medium"
          onClick={() => {
            setForm(true);
          }}
        >
          Sign in
        </span>
      </div>
    </div>
  );
}
