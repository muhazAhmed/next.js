import Image from "next/image"

const index = () =>{
    return (
      <>
        <h1>Hello, this is home page!</h1>
        <Image src="https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?cs=srgb&dl=pexels-maksim-goncharenok-4352247.jpg&fm=jpg"
        width="600"
        height="600"></Image>
      </>
    )
  }
  
  export default index