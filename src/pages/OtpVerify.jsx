import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function OtpVerify() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d?$/.test(value)) return; // Allow only single digit

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // Move to next input
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpCode = otp.join("");

    if (otpCode.length < 6) {
      Swal.fire(
        "Incomplete",
        "Please enter all 5 digits of the OTP.",
        "warning"
      );
      return;
    }
    const result = await Swal.fire(
      "Success",
      "OTP verified successfully!",
      "success"
    );

    if (result.isConfirmed) {
      navigate("/reset-password");
    }
  };

  return (
    <div className="h-[calc(100vh-160px)] bg-[#FDFDFD] flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-2xl border border-[#7e7e7e40] shadow-sm px-[80px] py-[80px]">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-[#333333] mb-2">
            Verification code
          </h1>
          <p className="text-sm text-[#5C5C5C] my-4">
            We sent a reset link to contact@dscode...com enter 5 digit code that
            is mentioned in the email
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex justify-center gap-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e, index)}
                className="w-12 h-12 text-center text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>

          <button
            type="submit"
            className="my-6 w-fit mx-auto flex flex-row items-center justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-[#0063E5] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Verify Code
          </button>
          <div className="flex flex-row items-center justify-center">
            <p className="text-sm text-[#5C5C5C] text-center text-nowrap">
              Didn't receive the code?
            </p>
            <button className="text-[#0063E5]">Resend</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OtpVerify;
