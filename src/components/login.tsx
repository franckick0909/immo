"use client"

import { signIn } from "next-auth/react"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa6"


export default function Login() {
    return (
        <div>
            <button type="button" onClick={() => signIn("github", { redirectTo: "/dashboard" })}>
                <FaGithub />
                Se connecter avec Github
            </button>
            <button type="button" onClick={() => signIn("google", { redirectTo: "/dashboard" })}>
                <FcGoogle />
                Se connecter avec Google

            </button>
        </div>


    )
}
