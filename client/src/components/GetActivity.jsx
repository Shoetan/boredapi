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
            <h1 className=" font-poppins font-semibold text-zinc-900 w-96 mx-auto flex justify-center items-center mt-6 ">Bored? I'll suggest something</h1>
            <div className="w-96 mx-auto bg-teal-200 flex flex-col justify-around items-center mt-6 sm:flex-row gap-6">
                <p>
                  {activity}
                </p>
            </div>
            <button onClick={getActivity}>Click me</button>
           
        </div>
     );
}
 
export default GetActivity;