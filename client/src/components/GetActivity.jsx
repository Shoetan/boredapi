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
        <div>
            <h1 className=" font-poppins  text-2xl   font-semibold text-zinc-900 w-96 mx-auto flex justify-center items-center mt-6 ">Bored? I'll suggest something</h1>
            <div className="w-96 mx-auto bg-teal-200 flex justify-center items-center mt-12">
                <p className="font-poppins text-xl p-2">
                  {activity}
                </p>
            </div>
            <button className="font-poppins text-lg flex w-96 justify-center items-center" onClick={getActivity}>Click me</button>
           
        </div>
     );
}
 
export default GetActivity;