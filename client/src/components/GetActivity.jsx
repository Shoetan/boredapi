import axios from "axios"; 
import { useState } from "react";


const GetActivity = () => {

    const [activity, setActivity] = useState('')

  /*  */
  const getActivity = async() =>{

    try {
        const res = await axios.get('http://localhost:8080/')
        setActivity(res.data.activity)
        console.log(activity)
    } catch (error) {
        console.log(`Error Message : ${error.message}`)
    }

  }
    return ( 
        <div className = "w-96 mx-auto mt-36 ">
            <h1 className=" font-poppins  text-4xl   font-semibold text-zinc-900 w-96 mx-auto flex justify-center items-center mt-12 ">Bored? I'll suggest something</h1>
            <div className="w-96 mx-auto p-6 flex justify-center items-center mt-12">
                <p className="font-poppins text-xl">
                  {activity}
                </p>
            </div>
            <button className="font-poppins text-lg flex w-36 mx-auto justify-center items-center mt-6 bg-indigo-400 rounded-md hover:bg-indigo-500" onClick={getActivity}>Click me</button>
           
        </div>
     );
}
 
export default GetActivity;