const VideoTitle = ({title, overview}) =>{

    return(
        <div className="w-screen aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from-black">
            <h1 className="text-3xl text-white font-bold">{title}</h1>
            <p className="py-6 text-white text-lg w-1/4">{overview}</p>
            <div className="flex items-center">
                <button className="bg-white text-black p-2 px-12 rounded-lg text-lg font-bold hover:bg-opacity-80">▶️ Play</button>
                <button className=" mx-2 bg-gray-500 text-white p-2 px-12 rounded-lg text-lg font-bold bg-opacity-70 hover:bg-opacity-90">ℹ️ More Info</button>
            </div>
        </div>
    );
};

export default VideoTitle;