import { FaStar } from "react-icons/fa";
import { AiOutlineRise } from "react-icons/ai";
import { CiCamera, CiGift, CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Shein1() {
  const images = [
    "/1.jpg",
    "/2.webp",
    "/3.webp",
    "/4.webp",
    "/5.webp",
    "/6.webp"
  ];
  return (
    <div className="w-[400px] mx-auto bg-white min-h-screen shadow-md rounded-lg overflow-hidden font-sans my-2 pb-5">
      <header className="flex items-center justify-between p-4">
        <h1 className="font-bold text-lg flex gap-3"><div className="flex w-[30px] h-[30px] rounded-md bg-black text-white items-center justify-center">S</div>SHEIN</h1>
        <button className="px-3 py-1 rounded-full bg-green-300/70 text-green-700 text-xs font-semibold flex items-center gap-2"><div className="w-[5px] h-[5px] rounded-full bg-green-100"></div>3125 Online Creators</button>
      </header>

      <section className="px-4 py-2">
        <h1 className="text-6xl font-extrabold leading-snug">
          Turn your style into <span className="text-purple-500">income</span>
        </h1>
        <p className="text-gray-600 mt-2 text-lg font-semibold">
          Join thousands of creators earning real money from fashion content
        </p>
      </section>

      <section className="flex justify-around text-center py-4">
        <div>
          <p className="font-bold text-lg">10K+</p>
          <p className="text-gray-500 font-semibold text-md">Active Creators</p>
        </div>
        <div>
          <p className="font-bold text-lg">₹2.1Cr+</p>
          <p className="text-gray-500 font-semibold text-md">Paid Out</p>
        </div>
        <div>
          <p className="font-bold text-lg flex items-center gap-1">
            4.9 <FaStar />
          </p>
          <p className="text-md font-semibold text-gray-500 ">Creator Rating</p>
        </div>
      </section>

      <div className="relative w-72 h-72 mx-auto flex items-center justify-center">
        <div className="w-32 h-32 rounded-full bg-red-50 border-4 border-pink-300 flex flex-col items-center justify-center text-center shadow-md">
          <p className="font-bold text-pink-600">SHEIN</p>
          <p className="text-lg font-bold">CREATOR</p>
          <p className="text-lg">SQUAD</p>
        </div>

        {images.map((src, index) => {
          const angle = (index / images.length) * 360;
          const x = 110 * Math.cos((angle * Math.PI) / 180);
          const y = 110 * Math.sin((angle * Math.PI) / 180);

          return (
            <div key={index} className="absolute" style={{ transform: `translate(${x}px, ${y}px)` }}>
              <img src={src} alt={`creator-${index}`} className="w-16 h-16 rounded-full border-4 border-white shadow-lg" />
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center"><p className="font-bold">What's Next for You</p></div>

      <div className="flex items-start justify-center shadow-2xl bg-gray-50 flex-col w-[350px] mx-auto p-2 rounded-md my-2">
        <CiCamera className="text-3xl bg-blue-100 text-blue-600 rounded-lg p-1 m-4" />
        <p className="font-bold">Post <span className="text-orange-500">Photos & Videos</span> of your SHEIN hauls</p>
        <p className="text-gray-500">Share your styling tips and outfit inspiration</p>
      </div>

      <div className="flex items-start justify-center shadow-2xl bg-gray-50 flex-col w-[350px] mx-auto p-2 rounded-md my-2">
        <CiStar className="text-3xl bg-purple-200 text-purple-500 p-1 rounded-lg m-4" />
        <p className="font-bold">Get <span className="text-orange-500">Featured</span> on SHEIN</p>
        <p>Your content could be seen by millions</p>
      </div>

      <div className="flex items-start justify-center shadow-2xl bg-gray-50 flex-col w-[350px] mx-auto p-2 rounded-md">
        <AiOutlineRise className="text-4xl text-green-500 bg-green-100 rounded-lg p-1 m-4" />
        <p className="font-bold">Earn rewards up to <span className="text-orange-500">₹50,000/month</span></p>
        <p>Get <span className="text-orange-500">2x rewards</span> for video content</p>
      </div>

      <div className="flex items-center justify-around mt-6">
        <div className="flex-col items-center justify-center">
          <CiStar className="text-4xl bg-yellow-100 text-yellow-600 p-1 rounded-lg m-4" />
          <p className="font-bold">Get Featured</p>
          <p>on SHEIN app</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <AiOutlineRise className="text-4xl bg-green-200 text-green-500 p-1 rounded-lg m-4" />
          <p className="font-bold">Earn</p>
          <p>commissions</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <CiGift className="text-4xl bg-purple-200 text-purple-500 p-1 rounded-lg m-4" />
          <p className="font-bold">Brand Collabs</p>
          <p>& Events</p>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Link to="/shein-2" className="bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold py-2 px-4 mx-auto mt-5 rounded-full">Start Your Journey</Link>
      </div>
    </div>
  );
}
