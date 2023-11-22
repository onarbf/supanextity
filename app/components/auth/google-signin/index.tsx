'use client'

import { supabaseFromClient } from "@/app/server/supabase/from-client"

export default  function  GoogleSignIn(){
    
    const handleSignin = async ()=>{
        const supabase = await supabaseFromClient();
        const info = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `https://supanextity.vercel.app/server/auth/callback`,
              }
        })
        console.log('signing in here:',  `https://supanextity.vercel.app/server/auth/callback`)
    }
    return(<div className="flex justify-center" onClick={handleSignin}>
        <button className="mt-4 rounded bg-blue-900 p-4">Login with Google!</button>
    </div>)
}