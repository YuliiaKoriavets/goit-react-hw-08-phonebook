import { Outlet } from "react-router-dom"
import AppBar from "./AppBar"

export default function Layout (){
    return(
        <div>
            <AppBar />
            <main>
                <Outlet/>
            </main>
        </div>
    )
}