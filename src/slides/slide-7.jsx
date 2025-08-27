import { FaUser } from "react-icons/fa"

function Slide7() {
  return (
    <div className="flex justify-center items-center">
        <div className="w-[400px] border border-gray-300 rounded">
            <div className="flex justify-between items-center p-4">
                <button>X</button>
                <p>SHEIN</p>
            </div>
            <div>
                <div><FaUser className='text-gray-500 text-3xl'/></div>
                <div>
                    <p className="text-gray-600">Basic</p>
                    <p className="font-semibold">@sheindiaxgalleri5</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Slide7