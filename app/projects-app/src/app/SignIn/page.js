'use client'

import MainLayout from "@/app/Layouts/MainLayout";
import DivisionSectionComponent from "@/app/Components/DivisionSectionComponent";
import InputFormComponent from "@/app/Components/FormComponents/InputFormComponent";
import {useState} from "react";

export default function SignInPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <MainLayout>
            <div className="flex flex-col items-center justify-center p-4">
                <span className="text-3xl font-bold">
                    <h1 className="text-4xl font-bold">Sign In</h1>
                    <p className="text-center text-zinc-400 text-sm">Sign in to your account to access the Projects App.</p>
                </span>
                <div className="w-full max-w-[40rem] p-4 min-h-96 bg-white/15 backdrop-blur-2xl mt-10 rounded-lg">
                    <span className="grid grid-cols-2 items-center h-14 gap-4">
                        <button className="h-12 bg-white rounded-xl text-zinc-700 font-bold">Sign In with Google</button>
                        <button className="h-12 bg-black rounded-xl text-white font-bold">Sign In with GitHub</button>
                    </span>
                    <DivisionSectionComponent text="OR"/>
                    <form className="flex flex-col gap-4">
                        <InputFormComponent label="Username" type="text" placeholder="Username" value={username} onChange={(e) => {setUsername(e.value)}}/>
                        <InputFormComponent label="Password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.value)}/>
                        <a href="#" className="text-zinc-400 text-sm text-right">Forgot Password?</a>
                        <span className="flex items-center gap-4">
                            <input type="checkbox" className="h-4 w-4"/>
                            <label className="text-zinc-400 text-sm">Remember me</label>
                        </span>
                        <button type="submit" className="h-12 bg-black rounded-xl text-white font-bold">Sign In</button>
                    </form>
                </div>
            </div>
        </MainLayout>
    )
}