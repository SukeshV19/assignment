import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

function Slide2() {
  return (
    <div className="m-1 w-full flex items-start justify-center">
      <div className="flex flex-col items-center justify-start px-3 py-5 min-h-screen w-[400px] border border-gray-300 rounded-md">
        <div className="w-full flex justify-start">
          <IoIosArrowBack />
        </div>

        <div className="mt-3 flex flex-col gap-5">
          <p className="text-gray-600">STEP 2 of 2</p>
          <p className="font-semibold">Send the code on Instagram</p>
          <p className="text-gray-600">
            Tap Open Instagram to start a chat with 
            <span className="text-blue-700">@sheindiaxgalleri5</span>.
            Paste the code and send it from the account you sre connecting.
          </p>
        </div>

        <div className="bg-zinc-900 mt-6 w-full flex flex-col items-center justify-center rounded-lg p-1 shadow-md">
          <p className="text-lg text-gray-50 bg-zinc-700 rounded-full p-1 mb-2">View profile</p>
          <p className="text-gray-50">9:51PM</p>
          <div className="flex justify-end w-full my-2"><p className="bg-blue-700 text-white p-2 font-semibold rounded-full">123456</p></div>
          <input className="rounded-full bg-zinc-700 text-gray-100 p-2 w-full" placeholder="Message..."/>
        </div>

        <div className="flex flex-col gap-2 mt-5 w-full">
          <button className="bg-zinc-950 text-white font-semibold p-3 rounded-sm">Open Instagram</button>
          <button className="border-2 border-gray-900 text-gray-900 p-3 rounded-sm font-semibold text-xl">Back</button>
        </div>
      </div>
    </div>
  )
}

export default Slide2