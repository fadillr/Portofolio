

const Aboutme = () => {
  return (
    <div className="flex flex-col bg-black h-fit gap-5">
        <div className="flex flex-col items-center h-full m-5 text-center gap-2">
            <h1 className="text-purple-400 py-1 px-3">Who am i?</h1>
            <p className="text-white font-bold text-2xl">I&rsquo;m Muhammad Fadillah Rasyid, a Web Developer and UI/UX Designer</p>
            <p className=" text-gray-400 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec ultrices tortor. Ut tellus felis, consectetur a gravida id, venenatis vel libero. Donec ante eros, elementum a diam nec, scelerisque consequat mauris. Praesent ac libero id lacus sollicitudin dignissim. Etiam malesuada tempor mi. Pellentesque habitant morbi tristique senectus et netus.</p>
            <button className="bg-purple-950 flex w-1/2 items-center justify-center py-2 rounded-full text-white font-semibold">Download Cv</button>
        </div>
    </div>
  )
}

export default Aboutme