#Image Component

As stated in the official documentation, next/image offers everything required to deal with Next.js images as expected on the modern web. Specifically, it comes with an extension of the HTML <img> element, represented by a standalone <Image /> component. This was developed with the Core Web Vitals scores in mind, which are an important measurement of user experience and are factored into the Google search rankings. 

But thanks to the <Image> component, you do not have to worry about them. This is because it comes with several built-in performance optimizations to help you achieve high Core Web Vitals scores.

How To Use the Next.js Image Component :

First, you must be sure that your version of Next.js is greater or equal to 10. This is the only prerequisite required. That assured, you will be able to import the <Image /> component as follows:

import Image from 'next/image'
Then, you must give a value to the props below:

src: it can be either a statically imported image file or a path string. In the latter case, if you want to use absolute external URLs, you must add their domains in the next.config.js file as shown here:

module.exports = {
  images: {
    domains: [
        'external-domain-1.com',
        'external-domain-2.com'
    ],
  },
}

Note : Its importent to mention height and width of the image as shown in the code.