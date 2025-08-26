import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

function Slide1() {
  const [code, setCode] = useState("");
  const [timeLeft, setTimeLeft] = useState(300)

  useEffect(() => {
    const generatedCode = Math.floor(100000 + Math.random() * 900000);
    setCode(generatedCode.toString());
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) return; 

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval); 
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${sec
      .toString()
      .padStart(2, "0")}`;
  };
  return (
    <div className="m-1 w-full flex items-center justify-center">
      <div className="border border-gray-300 my-1 w-[450px] flex flex-col items-center p-6 rounded-md bg-white">
        <div className="w-full flex justify-start">
          <IoIosArrowBack />
        </div>

        <div className="mt-3 flex flex-col gap-5">
          <p className="text-gray-600">STEP 1 of 2</p>
          <p className="font-semibold">Tap on Copy code</p>
          <p className="text-gray-600">
            Tap on copy code button to copy your unique verification code
          </p>
        </div>

        <div className="bg-gray-200 mt-6 w-full flex flex-col items-center justify-center rounded-lg p-5 shadow-md">
          <p className="text-lg text-gray-700">Your verification code</p>
          <p className="text-2xl font-semibold">{code}</p>
          {timeLeft > 0 ? (
            <p className="mt-2 text-gray-700">
              Code expires in: {formatTime(timeLeft)}
            </p>
          ) : (
            <p className="mt-2 text-red-700">Code expired</p>
          )}
        </div>

        <div className="flex flex-col gap-2 mt-5 w-full">
          <button className="bg-zinc-900 text-white font-semibold p-3 rounded-sm">Copy Code</button>
          <button className="border-2 border-gray-900 text-gray-900 p-3 rounded-sm font-semibold text-xl">Back</button>
        </div>
      </div>
    </div>
  )
}

export default Slide1