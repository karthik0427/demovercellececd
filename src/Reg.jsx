import axios from "axios";  
import { useState } from "react";

function Reg() {
    const [name, setdata] = useState(
        {username: "", email: "", password: ""}
    );
    const changeName = (e)=>{
        setdata({...name, [e.target.name]: e.target.value})
    };
    const submit=async ()=>{
        try {
            const res = await axios.post("http://localhost:8000/reg", data);
            alert(res.data);
        } 
        catch (xyz)
        {
            alert(xyz.response.data);
        }       
    };
    return (
        <>
            <h1>iam Reg</h1>
            <input type="text" name="username" placeholder="enter username" onChange={changeName} />
            <input type="email" name="email" placeholder="enter email" onChange={changeName} />
            <input type="password" name="password" placeholder="enter password" onChange={changeName} />
            <button onClick={submit}>Submit</button>
        </>
    );
}
export default Reg; 