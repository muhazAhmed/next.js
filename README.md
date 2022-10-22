File-Based Routing
While using react, we need to install a third-party package to get the routing

Next.js comes built-in with an incredible feature called file-based routing. This feature enables Nextjs developers to simply create files inside the pages folder and those files will serve as routes for the application. For example, if you create 3 files (about.js, contact.js, and index.js) inside the pages folder of your Next.js application, you can view these components by visiting localhost:3000/about, localhost:3000/contact, and localhost:3000/ respectively.

This is what file-based routing is essentially about! When a file is added to the “pages” directory, it's automatically available as a route.  Each page exports a react component which is rendered when the corresponding URL is visited by the person visiting the page!

A sample about page (component) will look something like this:

function About() {
  return <div>About</div>
}

export default About

Visiting http://localhost:3000/about will display “About” on the screen as this component returns a <div> with “About” inside of it!

 

Nested Routes
To create nested routes in Next.js, all we need to do is to create corresponding nested folders. For example, If you want to create a route at localhost:3000/about/one , all you need to do is to create a folder named “about” with a component named “one.js”

Dynamic Routes
Defining routes as shown in the Nested Routes section above is not always enough for complex applications. In Next.js you can add brackets to a page ([sno]) to create a dynamic route (or URL slugs).