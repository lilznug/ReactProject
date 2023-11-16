// import React from 'react'

const Navbar = () => {
  return (
    <div className="mt-10 ml-10 mr-10 sticky top-4 flex justify-center">
        <nav className="bg-black flex rounded-full px-13 outline outline-white font-bold ">
            <div className="bg-white flex rounded-full px-1 py-1">
                <img src="./1667485764269.jpg" className=" flex w-6 h-6 rounded-full  ml-0 mr-1" />
                <a href="https://drive.google.com/file/d/1PlYqXcB1rdokbtHV1WPWrkdOa6DBhLmc/view?usp=drive_link" className="text-black ">Profile</a>
            </div>
            <a href="https://www.linkedin.com/in/nugroho-ulil-abshar/" className="text-blue-800 ml-1 mr-2 py-1">Linkedin</a>
            <a href="https://www.instagram.com/lil.abshar/" className="text-white py-1 mr-2">Instagram</a>
        </nav>        
    </div>
  )
}

export default Navbar