import { useRouter } from "next/router"
import { useEffect } from "react";

const Errorpage = () => {
    const router = useRouter();

    const handleInput = () => {
        router.push("home")
    }

    useEffect(() =>{
        setTimeout(() => {
            router.push("home")
        },3000)
    }, []);

    return(
    <>
    
        <div id="notfound">
        <div className="notfound">
        <div className="notfound-404">
            <h1>404</h1>
        </div>
        <h2>We are sorry, Page not found !</h2>
        <p>
            The page you are looking for might have been removed or, temporarily unavailable.
        </p>
        
        <a onClick={handleInput}>Back to Home page</a>  
        </div>
        </div>
    </>
)}

export default Errorpage