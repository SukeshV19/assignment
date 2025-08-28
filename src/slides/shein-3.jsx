function Slide3() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <video
        src="video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full max-w-md"
        style={{ display: 'block' }}
      />
      <p className="mt-6 text-gray-700 text-lg font-semibold">
        Loading the good stuff
      </p>
    </div>
  )
}

export default Slide3