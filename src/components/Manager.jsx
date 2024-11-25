import React, { useState, useRef, useEffect } from 'react';
import sa from "../Images/sa.png"
import ce from "../Images/ce.png"
import d from "../Images/d.png"
import e from "../Images/e.png"
import { v4 as uuidv4 } from 'uuid';





const Manager = () => {
    const [form, setForm] = useState({ site: "", username: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [passwordArray, setPasswordArray] = useState([]);

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        let passwordArray;
        if (passwords) {
            setPasswordArray(JSON.parse(passwords));
        }
        else {
            passwordArray = []
        }
    }, [])


    const togglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    const savePassword = () => {
        // console.log("Form Data:", form);
        setPasswordArray([...passwordArray, {...form, id: uuidv4()}]);
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]));
        console.log(...passwordArray, form);
    };
    const deletePassword = (id) => {
        console.log("Deleting password with id", id)
        // console.log("Form Data:", form);
        // setPasswordArray([...passwordArray, {...form, id: uuidv4()}]);
        // localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
        // console.log(...passwordArray, form);
    };
    const editPassword = (id) => {
        console.log("Editing password with id", id)
        // console.log("Form Data:", form);
        // setPasswordArray([...passwordArray, {...form, id: uuidv4()}]);
        // localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
        // console.log(...passwordArray, form);
    };

    return (
        <div>
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>

            {/* Main Container */}
            <div className="my-container bg-slate-50">
                <h1 className="text-4xl font-bold text-center">
                    <span className="text-green-700"> &lt;</span>
                    Password-
                    <span className="text-green-700">King/ &gt;</span>
                </h1>
                <p className="text-green-900 text-lg text-center">Your own Password manager</p>

                {/* Form Section */}
                <div className="text-black flex flex-col p-4 gap-5 items-center">
                    <input
                        value={form.site}
                        placeholder="Enter Website-URL"
                        className="rounded-full flex flex-col border border-green-500 p-4 w-full py-1"
                        type="text"
                        onChange={(e) => setForm({ ...form, site: e.target.value })}
                    />
                    <div className="flex w-full gap-8">
                        <input
                            value={form.username}
                            placeholder="Username"
                            className="rounded-full flex flex-col border border-green-500 p-4 w-full py-1"
                            type="text"
                            onChange={(e) => setForm({ ...form, username: e.target.value })}
                        />
                        <div className="relative">
                            <input
                                value={form.password}
                                placeholder="Password"
                                className="rounded-full flex flex-col border border-green-500 p-4 w-full py-1"
                                type={showPassword ? "text" : "password"}
                                onChange={(e) => setForm({ ...form, password: e.target.value })}
                            />
                            <span className="absolute right-[3px] top-[4px] cursor-pointer">
                                <img
                                    className="p-1"
                                    width={25}
                                    src={showPassword ? ce : sa}
                                    alt="Toggle Password Visibility"
                                    onClick={togglePassword}
                                />
                            </span>
                        </div>
                    </div>
                    <button
                        onClick={savePassword}
                        className="bg-blue-600 rounded-full justify-center px-4 py-2 w-fit hover:bg-blue-400"
                    >
                        Add Password
                    </button>
                </div>
                <div className='passwords'>
                    <h2 className='font-bold text-xl py-4'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div> NO passwords to show</div>}
                    {passwordArray !=0 && 
                    <table className="table-auto w-full rounded-md overflow-hidden">
                        <thead className='bg-green-800 text-white'>
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Password</th>
                                <th className='py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-200'>
                            {passwordArray.map((item, index)=>{
                                return <tr key={item}>
                                <td   className='py-2 text-center w-32'><a href={item.site} target='_blank'>{item.site}</a></td>
                                <td   className='py-2 text-center w-32'>{item.username}</td>
                                <td   className='py-2 text-center w-32'>{item.password}</td>
                                <td   className='justify-center py-2 text-center w-32 '>
                                    <div className='flex px-4 justify-center text-center gap-1'>
                                    <span className='cursor-pointer ' onClick={()=>{deletePassword(item.id)}}>
                                        <img src= {d} width={20} alt="" />
                                    </span>
                                    <span className='cursor-pointer' onClick={()=>{editPassword(item.id)}}>
                                        <img src= {e} width={20} alt="" />
                                    </span>
                                    </div>
                                </td>

                            </tr>
                            })}
                        </tbody>
                    </table>
}
                </div>
            </div>
        </div>
    );
};

export default Manager;
