'use client'

import { supabaseFromClient } from "@/app/server/supabase/from-client"
import {redirect} from 'next/navigation'

export default  function  Logout(){
    const handleLogout = async ()=>{
        const supabase = await supabaseFromClient();
        await supabase.auth.signOut()
        window.location.href = "/";
    }
    return(<div className="flex justify-center" onClick={handleLogout}>
        <button className="mt-4 rounded bg-blue-900 p-4">Logout</button>
    </div>)
}