import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  const initialValues = { fullName: "", email: "", password: "", confirmPassword: "", termsAccepted: false };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormValues({ ...formValues, [name]: inputValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    setIsSubmitted(true);

    if (Object.keys(errors).length === 0) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(formValues);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Signed up successfully");
      navigate('/login');
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitted) {
      
    }
  }, [formErrors, isSubmitted]);

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!values.fullName) {
      errors.fullName = "Full Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters!";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters!";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required!";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match!";
    }
    if (!values.termsAccepted) {
      errors.termsAccepted = "You must accept the terms and conditions!";
    }

    return errors;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-gray-600 font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full Name"
                value={formValues.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 mt-1"
              />
              <p className="text-red-600">{formErrors.fullName}</p>
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-600 font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                value={formValues.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 mt-1"
              />
              <p className="text-red-600">{formErrors.email}</p>
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-600 font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 mt-1"
              />
              <p className="text-red-600">{formErrors.password}</p>
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-gray-600 font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formValues.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 mt-1"
              />
              <p className="text-red-600">{formErrors.confirmPassword}</p>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formValues.termsAccepted}
                onChange={handleChange}
                className="mr-2"
              />
              <p className="text-sm text-gray-600">
                By continuing, I agree to the
                <span className="text-red-600 cursor-pointer hover:underline"> terms of use </span>
                &
                <span className="text-red-600 cursor-pointer hover:underline"> privacy policy</span>
              </p>
            </div>
            <p className="text-red-600">{formErrors.termsAccepted}</p>
          </div>
          <button className="w-full bg-red-600 text-white py-3 mt-6 rounded-lg hover:bg-red-700 transition duration-300 text-lg font-medium">
            Sign Up
          </button>
          <p className="text-center mt-4">
            Already have an Account?
            <Link to="/login" className="text-red-600 cursor-pointer hover:underline">
              {" "}Login{" "}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
