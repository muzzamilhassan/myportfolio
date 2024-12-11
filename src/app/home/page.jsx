"use client";
import "/public/plugins/fontawesome-free/css/all.min.css";
import "/public/dist/css/adminlte.min.css";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FaUserFriends } from "react-icons/fa";

const Login = () => {
  const [formvalue, setFormValue] = useState({
    email: "",
    type: "",  // Should be set to 'sh_admin' for admin login
    password: "",
  });
  const router = useRouter();

const signIn = async () => {
  try {
    const secretKey = {
      admin:
        "Uni-keys.ADjd9ffhjhf123sdf.AD725c4e7d2abc344446a1b109568918b1???AD",
      vendor:
        "Uni-keys.VDjd9ffhjhf456sdf.VD726c5e7d2def344446a1b109568918b2???VD",
      user:
        "Uni-keys.CSjd9ffhjhf789sdf.CS727c4e7d2ghi344446a1b1095618b3???CS",
    };

    const baseUrl = {
      admin: "https://backend-repo-backup.vercel.app/api/sh_admin/login",
      vendor: "https://backend-repo-backup.vercel.app/api/sh_vendor/login",
      user: "https://backend-repo-backup.vercel.app/api/sh_user/login",
    };

    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      secretKey:
        formvalue.type === "sh_admin"
          ? secretKey.admin
          : formvalue.type === "sh_vendor"
          ? secretKey.vendor
          : secretKey.user,
    };

    // Create form data in URLSearchParams format
    const formData = new URLSearchParams();
    formData.append("email", formvalue.email);
    formData.append("sh_pass", formvalue.password);
    formData.append("type", formvalue.type === "sh_admin" ? "0" : "2");  // Map the type as '0' for admin, '2' for user

    // Make the API request
    const response = await axios.post(
      formvalue.type === "sh_admin"
        ? baseUrl.admin
        : formvalue.type === "sh_vendor"
        ? baseUrl.vendor
        : baseUrl.user,
      formData,  // Send as URL-encoded data
      { headers }
    );

    const responseData = response.data;

    // Handle successful response
    if (responseData?.user?.username) {
      localStorage.setItem("username", responseData.user.username);
      localStorage.setItem("email", responseData.user.email);
      localStorage.setItem("token", response.headers.bearer);
      localStorage.setItem("_id", responseData.user._id);
      localStorage.setItem(
        "secretkey",
        formvalue.type === "sh_admin"
          ? secretKey.admin
          : formvalue.type === "sh_vendor"
          ? secretKey.vendor
          : secretKey.user
      );
      console.log("Login successful:", responseData);
      router.push("/admin/dashboard");
    } else {
      console.error("Invalid response structure:", responseData);
    }
  } catch (error) {
    console.error("Login error:", error);
  }
};


  const formhandle = (e) => {
    const input = e.target;
    const value = input.value;
    const name = input.name;
    setFormValue({
      ...formvalue,
      [name]: value,
    });
  };

  return (
    <div className="hold-transition register-page">
      <div className="login-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <h1 className="h1">
              <b>Muzzi</b>Fashion
            </h1>
          </div>
          <div className="card-body">
            <div className="input-group mb-3">
              <input
                className="form-control"
                label="Email"
                placeholder="Email"
                id="email"
                type="text"
                name="email"
                value={formvalue.email}
                onChange={formhandle}
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                className="form-control"
                type="password"
                label="password"
                name="password"
                placeholder="password"
                id="password"
                value={formvalue.password}
                onChange={formhandle}
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <select
                className="form-control !text-gray-400"
                name="type"
                value={formvalue.type}
                onChange={formhandle}
              >
                <option value="">Select type</option>
                <option value="sh_user">User</option>
                <option value="sh_admin">Admin</option>
              </select>
              <div className="input-group-append">
                <div className="input-group-text">
                  <FaUserFriends />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  onClick={signIn}
                >
                  Sign In
                </button>
              </div>
            </div>

            <p className="mb-1">
              <a href="forgot-password.html">I forgot my password</a>
            </p>
            <p className="mb-0">
              <Link href="/admin/register" className="text-center">
                Register a new membership
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
