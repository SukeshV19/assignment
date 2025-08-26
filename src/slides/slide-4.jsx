import { Link } from "react-router-dom"

function Slide4() {
  return (
    <div className="m-1 w-full flex items-center justify-center">
      <div className="border border-gray-300 my-1 w-[400px] flex flex-col items-center p-6 rounded-md bg-white">
        <h1 className="text-4xl mb-6 instagram-logo font-light">Instagram</h1>

        <input type="text" placeholder="Phone Number or Username or Email" className="w-full mb-3 p-2 bg-gray-50 rounded"/>
        <input type="password" placeholder="Password" className="w-full mb-3 p-2 bg-gray-50 rounded"/>

        <button className="w-full bg-gray-300 text-gray-900 py-2 rounded font-semibold">Login</button>

        <div className="flex items-center w-full my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-2 text-gray-500 text-sm font-semibold">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <Link to="#" className="text-sm text-gray-700 mb-2">Forgot Password?</Link>
        <Link to="#" className="text-sm text-gray-900 font-semibold">Don’t have an account? Sign up</Link>
      </div>
    </div>
  )
}

export default Slide4