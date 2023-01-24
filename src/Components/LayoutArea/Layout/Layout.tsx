import { useEffect } from "react";
import AuthProvider from "../../../context/AuthProvider";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./Layout.css";

function Layout(): JSX.Element {

    useEffect(()=>{
        document.title = 'Pictour  '
    })
    return (
        <div className="Layout">
            <AuthProvider>
            <Header/>
            <Main/>
            </AuthProvider>
        </div>
    );
}

export default Layout;
