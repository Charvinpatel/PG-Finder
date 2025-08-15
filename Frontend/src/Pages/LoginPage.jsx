"use client";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, HomeIcon as House } from "lucide-react";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Store user session (in real app, this would be handled by your auth system)
      localStorage.setItem(
        "userSession",
        JSON.stringify({
          email: formData.email,
          loginTime: new Date().toISOString(),
        })
      );

      navigate("/");
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setErrors({ submit: "Login failed. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page min-vh-100 d-flex align-items-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow-lg border-0">
              <div className="card-body p-5">
                {/* Logo */}
                <div className="text-center mb-4">
                  <div className="d-inline-flex align-items-center mb-3">
                    <div
                      className="logo-icon me-2"
                      style={{
                        width: "48px",
                        height: "48px",
                        backgroundColor: "#0d6efd",
                        borderRadius: "25%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <House size={24} style={{ color: "white" }} />
                    </div>
                    <h3 className="mb-0 fw-bold">PG Finder</h3>
                  </div>
                  <h4 className="mb-2">Welcome Back!</h4>
                  <p className="text-muted">Sign in to your account</p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit}>
                  {errors.submit && (
                    <div className="alert alert-danger" role="alert">
                      {errors.submit}
                    </div>
                  )}

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-transparent">
                        <Mail size={20} className="text-muted" />
                      </span>
                      <input
                        type="email"
                        className={`form-control ${
                          errors.email ? "is-invalid" : ""
                        }`}
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                      />
                    </div>
                    {errors.email && (
                      <div className="invalid-feedback d-block mt-1">
                        {errors.email}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-transparent">
                        <Lock size={20} className="text-muted" />
                      </span>
                      <input
                        type={showPassword ? "text" : "password"}
                        className={`form-control ${
                          errors.password ? "is-invalid" : ""
                        }`}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        className="input-group-text bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff size={20} className="text-muted" />
                        ) : (
                          <Eye size={20} className="text-muted" />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <div className="invalid-feedback d-block mt-1">
                        {errors.password}
                      </div>
                    )}
                  </div>

                  <div className="mb-3 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="rememberMe"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="rememberMe">
                        Remember me
                      </label>
                    </div>
                    <Link
                      to="/forgot-password"
                      className="text-decoration-none"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100 py-2 mb-3"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Signing in...
                      </>
                    ) : (
                      "Sign In"
                    )}
                  </button>

                  <div className="text-center">
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <Link
                        to="/signup"
                        className="text-decoration-none fw-medium"
                      >
                        Sign up here
                      </Link>
                    </p>
                  </div>
                </form>

                {/* Social Login */}
                <div className="mt-4">
                  <div className="text-center mb-3">
                    <span className="text-muted">Or continue with</span>
                  </div>
                  <div className="d-grid gap-2">
                    <button className="btn btn-outline-secondary">
                      <i className="fab fa-google me-2"></i>
                      Continue with Google
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
