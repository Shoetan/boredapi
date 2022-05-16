const GetActivity = () => {
    return ( 
        <div>
            <h1 className=" font-poppins font-semibold text-zinc-900 w-96 mx-auto flex justify-center items-center mt-6 ">Bored? I'll suggest something</h1>
            <div className="w-96 mx-auto bg-teal-200 flex flex-col justify-around items-center mt-6 sm:flex-row gap-6">
                 <button className="font-poppins text-zinc-900 bg-indigo-400">Click me</button>
                 <button className="font-poppins text-zinc-900 bg-indigo-400">Reset</button>
            </div>
           
        </div>
     );
}
 
export default GetActivity;