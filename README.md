#404 Page

![Screenshot (18)](https://user-images.githubusercontent.com/109068603/197344211-e6dc27c5-5108-4193-9534-fd4ae9cac492.png)

A 404 page may be accessed very often. Server-rendering an error page for every visit increases the load of the Next.js server. This can result in increased costs and slow experiences.

To avoid the above pitfalls, Next.js provides a static 404 page by default without having to add any additional files.

Customizing The 404 Page
To create a custom 404 page you can create a pages/404.js file. This file is statically generated at build time.

<<IMPORTENT : [file name should be 404 itself.]>>