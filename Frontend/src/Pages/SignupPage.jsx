"use client";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  HomeIcon as House,
} from "lucide-react";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    userType: "student",
    agreeToTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password =
        "Password must contain uppercase, lowercase, and number";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
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
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Store user session (in real app, this would be handled by your auth system)
      localStorage.setItem(
        "userSession",
        JSON.stringify({
          email: formData.email,
          name: `${formData.firstName} ${formData.lastName}`,
          userType: formData.userType,
          signupTime: new Date().toISOString(),
        })
      );

      navigate("/");
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setErrors({ submit: "Registration failed. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup-page min-vh-100 d-flex align-items-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
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
                  <h4 className="mb-2">Create Account</h4>
                  <p className="text-muted">Join us to find your perfect PG</p>
                </div>

                {/* Signup Form */}
                <form onSubmit={handleSubmit}>
                  {errors.submit && (
                    <div className="alert alert-danger" role="alert">
                      {errors.submit}
                    </div>
                  )}

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-transparent">
                          <User size={20} className="text-muted" />
                        </span>
                        <input
                          type="text"
                          className={`form-control ${
                            errors.firstName ? "is-invalid" : ""
                          }`}
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="First name"
                        />
                      </div>
                      {errors.firstName && (
                        <div className="invalid-feedback d-block mt-1">
                          {errors.firstName}
                        </div>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="lastName" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.lastName ? "is-invalid" : ""
                        }`}
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last name"
                      />
                      {errors.lastName && (
                        <div className="invalid-feedback d-block mt-1">
                          {errors.lastName}
                        </div>
                      )}
                    </div>
                  </div>

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
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-transparent">
                        <Phone size={20} className="text-muted" />
                      </span>
                      <input
                        type="tel"
                        className={`form-control ${
                          errors.phone ? "is-invalid" : ""
                        }`}
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    {errors.phone && (
                      <div className="invalid-feedback d-block mt-1">
                        {errors.phone}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="userType" className="form-label">
                      I am a
                    </label>
                    <select
                      className="form-select"
                      id="userType"
                      name="userType"
                      value={formData.userType}
                      onChange={handleChange}
                    >
                      <option value="student">Student</option>
                      <option value="professional">Working Professional</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
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
                          placeholder="Create password"
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
                    <div className="col-md-6">
                      <label htmlFor="confirmPassword" className="form-label">
                        Confirm Password
                      </label>
                      <div className="input-group">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          className={`form-control ${
                            errors.confirmPassword ? "is-invalid" : ""
                          }`}
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          placeholder="Confirm password"
                        />
                        <button
                          type="button"
                          className="input-group-text bg-transparent"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        >
                          {showConfirmPassword ? (
                            <EyeOff size={20} className="text-muted" />
                          ) : (
                            <Eye size={20} className="text-muted" />
                          )}
                        </button>
                      </div>
                      {errors.confirmPassword && (
                        <div className="invalid-feedback d-block mt-1">
                          {errors.confirmPassword}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className={`form-check-input ${
                          errors.agreeToTerms ? "is-invalid" : ""
                        }`}
                        type="checkbox"
                        id="agreeToTerms"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="agreeToTerms"
                      >
                        I agree to the{" "}
                        <Link to="/terms" className="text-decoration-none">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link to="/privacy" className="text-decoration-none">
                          Privacy Policy
                        </Link>
                      </label>
                      {errors.agreeToTerms && (
                        <div className="invalid-feedback d-block mt-1">
                          {errors.agreeToTerms}
                        </div>
                      )}
                    </div>
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
                        Creating account...
                      </>
                    ) : (
                      "Create Account"
                    )}
                  </button>

                  <div className="text-center">
                    <p className="mb-0">
                      Already have an account?{" "}
                      <Link
                        to="/login"
                        className="text-decoration-none fw-medium"
                      >
                        Sign in here
                      </Link>
                    </p>
                  </div>
                </form>

                {/* Social Signup */}
                <div className="mt-4">
                  <div className="text-center mb-3">
                    <span className="text-muted">Or sign up with</span>
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

export default SignupPage;
