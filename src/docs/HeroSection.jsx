// import React, { useState } from 'react';
import Image1 from '/1667485764269.jpg'



const HeroSection = () => {
    const Pencet = () => {
        var isi = document.getElementById('textbox').value;
        // e.preventDefault();
        // let data = new FormData(isi);
        alert(isi);
        document.getElementById('textbox').value="";
    }

    return(
        <div className=" w-96 h-104 ml-10 mr-5 outline outline-white rounded-xl">
            <img src={Image1} className=" bg-content mx-8 mt-5  rounded-xl w-72 h-56"/>
            <h4 className="mx-8 py-1 font-sans font-black text-2xl text-white">Contact Me</h4>
            <div action="https://script.google.com/macros/s/AKfycbwEtg6t_A4QMhuy_SjqJKjwxyZlVNscmSsxzKzlA1af8Fso-nnBHyl8bHqaienP79AO7w/exec" method='post' className=" flex rounded-b-xl mt-1 mb-5 justify-center align-bottom w-30 h-30 ">
                <textarea  id="textbox" placeholder="Text disini cok" className="px-10 py-10 rounded-s-xl bg-gray-700 mb-2 mt-2" type="text"></textarea>
                <button onDoubleClick={Pencet} type="submit" className="bg-blue-800 text-white rounded-e-xl px-3 py-3 mb-2 mt-2 ">Send</button>
            </div>
        </div>
    )
}
export default HeroSection;