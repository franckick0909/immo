"use client"

import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"


export default function Dashboard() {

    const { data: session } = useSession()

    return (

        <>
            {session?.user ? (
                <>
                    {session.user.image && (
                        <Image src={session.user.image} alt="User avatar" width={40} height={40} className="rounded-full" />
                    )}
                    <p>{session.user.name}</p>
                    <button type="button" onClick={() => signOut()}>
                        Déconnecter
                    </button>
                </>
            ) : (
                <Link href="/login">
                    <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md">Se connecter</button>
                </Link>
            )}
        </>
    )
}
    


