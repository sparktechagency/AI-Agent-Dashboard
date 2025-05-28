import { useState } from "react";
import { Link } from "react-router-dom";

function ForgetPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ForgetPassword attempt with:", {
      email,
    });
    // Add your authentication logic here
  };

  return (
    <div className=" h-[calc(100vh-160px)] bg-[#FDFDFD]  flex items-center justify-center p-4">
      <div className="w-full max-w-xl  rounded-2xl border border-[#7e7e7e40] shadow-sm p-[102px]">
        <div className="text-center mb-6">
          <h1 className="text-2xl  font-semibold text-[#333333] mb-4">
            Forgot password ?
          </h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-base font-medium text-[#636363] mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <Link to="/otp-verify">
                <button
                  type="submit"
                  className=" mt-8 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0063E5] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-fit mx-auto"
                >
                  Send Code
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgetPassword;
