import Link from "next/link"

const Errorpage = () => (
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
        <Link href="home">
        <a>Back to Home page</a>  

        {/* you can do without link with old method (<a href ="") but this link will help us to load pg without refreshing */}
        
        </Link>
        </div>
        </div>
    </>
)

export default Errorpage