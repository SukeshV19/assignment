import { GiTwoCoins } from "react-icons/gi";
import { HiSpeakerphone } from "react-icons/hi";
import { IoBag } from "react-icons/io5";

export default function Shein2() {
    const sections = [
        {
            img: "/1-remove.png",
            title: "Get Featured",
            text: "Be Spotlighted On SHEIN's Website, app, And Socials -- Reach Millions With Your Style.",
        },
        {
            img: "/2-remove.png",
            title: "Earn Commission",
            text: "Receive A Unique Link and Earn Money Every Time Someone Shops Through It.",
        },
        {
            img: "/3-remove.png",
            title: "Brand Collabs",
            text: "Get The Chance To Co-Create Content And Collections With The SHEIN Team.",
        },
    ];

    return (
        <div className="flex items-center justify-center my-5 pb-5">
            <div className="w-[400px] shadow-lg max-w-md mx-auto bg-white font-sans">
                <div className="w-full flex justify-center items-center">
                    <img src='/4.jpg' alt="..." className="rounded-lg shadow-lg object-cover h-[200px] w-[200px] mx-auto" />
                </div>
                <div className="p-6 text-center">
                    <h1 className="text-3xl font-bold">SHEIN<span className="text-purple-500">VERSE</span></h1>
                    <p className="text-gray-500 text-sm">MORE THAN JUST COLLABS-- IT'S A MOVEMENT</p>
                </div>

                <section className="flex flex-col gap-16 p-6 md:p-8 bg-gray-50">
                    <div className="flex items-center justify-center text-purple-600 font-bold text-sm tracking-wider">
                        <span className="text-yellow-400 text-3xl mr-4">✨</span> GET EXCLUSIVE BENEFITS LIKE <span className="text-yellow-400 text-3xl ml-4">✨</span>
                    </div>

                    {sections.map((item, index) => (
                        <div key={index} className={`${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} w-full flex items-center relative`}>
                            <div className="w-2/5 h-full overflow-hidden z-20">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                            </div>

                            <div className="w-3/5">
                                <h2 className="font-semibold text-lg mb-2 text-white bg-black p-1 rounded-md inline-block">{item.title}</h2>
                                <p style={{ textAlign: "justify" }} className="text-gray-800 border rounded-xl border-gray-600 font-semibold text-sm md:text-base mt-2 z-20 p-2">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </section>

                <div className="flex gap-5 items-center justify-center bg-red-50 mx-5 mb-5">
                    <div className="flex flex-col items-center justify-center p-2">
                        <HiSpeakerphone className="text-[#EFBF04] text-5xl" />
                        <p className="font-semibold text-[12px]">Get Featured</p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2">
                        <IoBag className="text-[#EFBF04] text-5xl" />
                        <p className="font-semibold text-[12px]">Brand Collab</p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2">
                        <GiTwoCoins className="text-[#EFBF04] text-5xl" />
                        <p className="font-semibold text-[12px]">Earn Commissions</p>
                    </div>
                </div>

                <div className="flex gap-4 p-3 text-sm items-center" style={{ textAlign: 'justify' }}>
                    <input type="checkbox" className="w-10 h-10 accent-black cursor-pointer" />
                    <p>I hereby confirm that I read, understood and agree to receive WhatsApp updates from Shein Creator Program and <span className="text-blue-600 font-semibold">Terms and Use</span> and <span className="text-blue-600 font-semibold">Privacy Policy</span></p>
                </div>
                <a href="/shein-3" className="bg-zinc-900 text-white font-semibold w-[380px] p-3 ml-[10px] mb-5 rounded-lg flex items-center justify-center">Join the tribe</a>
            </div>
        </div>
    )
}
