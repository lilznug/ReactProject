// import {useState} from 'react'




const Card = (props) => {
    // const[isi,setIsi] = useState();

    return (
        <div className=" hover:bg-slate-400 hover:ease-in duration-300 hover:-translate-y-4 justify-self-center mx-4 my-4 outline outline-black outline-1 w-64 h-72 rounded-xl bg-white ">
            <a href={props.link}>
                <img src={props.img} className="w-full h-1/2 object-cover rounded-t-lg" />
                <div className="px-2 my-2 h-24">
                    <p className="font-sans font-bold font-white text-8">{props.name}</p>
                    <p className="font-sans font-white text-4 overflow-hidden">{props.data}</p>
                </div>
            </a>
        </div>
    )
}

export default Card;