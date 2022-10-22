#Dynamic Routing.


![Screenshot (17)](https://user-images.githubusercontent.com/109068603/197341171-96275ced-cb84-48da-97ea-296618017914.png)

How to create dynamic routes in Next.js
As mentioned in the tutorial on static routing, Next.js defines routes based on the concept of pages.

What does that mean? Every Next.js project comes with a pages folder. The structure of the pages folder determines the structure of your routes and every file inside that folder maps to a route in your application.

Essentially, every time you want to create a route, you need to add a file in the pages folder. Keep in mind that the pages folder itself represents your root url (meaning /).

For static routing, you can create a new route by adding a index.js or a named file like pageNo.js, and give your file name.


pages/[pageNo].js maps to /pageNumber

Tip: For more info on how to create static routes (including nested routes), read my tutorial on static routing in Next.js.

But how does it work for dynamic routes? Say I wanted to create a blog, how would I add a route such as myblog.com/posts/:id?

Next.js handles dynamic routes by supporting brackets around parameters (e.g [id]) as a filename. Going back to my blog example, I would therefore create a [id].js file inside my posts folder.

As a result, /pages/posts/[id].js would map to /posts/[id] where id is the unique id of your post.

