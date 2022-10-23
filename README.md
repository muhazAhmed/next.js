#Css Module

<External/Internal CSS>
In Next.js we can't apply external css like usual. 
In order to achive that, there are few things to keep in mind.

a> We can use globals.css file to apply css for any pages. But if you feel like it will look pretty long then you can go with external css also.
b> For using external css, we need to follow few rules :
    <> file name should be [fileName].module.css ....(eg: main.module.css).
    <> you need to import that file with any variable name (eg : import style from '../styles/main.module.css').
    <> We cant use main tags of html for css. It should have className or id. (eg : h1 {will throw error}...h1 className = { will work fine}>)
    <> In order to use those css, we need to call that variable in every classname and id (eg : <div className = {style.header}>)
    <> if you have multiple classname in same line, then you have to use that variable evrytime for each className with $.
            (eg : div className = `${style.container} ${style.btn}`>) 

 

<Inline CSS>
Inline CSS is same as usual (eg : h1 style = {{color : "red"}}> hello world </h1> )