import { useState } from 'react'
import Badge from './Components/Badge'
import Banner from './Components/Banner'
import Card from './Components/Card'
import Testimonial from './Components/Testimonial'
import './App.css'

function App() {

  return (
    <>
      <Badge shape="pill" color="red">Badge with some text inside</Badge>
      <Banner variant="error">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
      </Banner>
      <Card header="Easy Deployment">
        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
      </Card>
      <Testimonial name="May Andersons" occupation="Workcation, CTO" img="/stock_Img.jfif">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.
      </Testimonial>
    </>
  )
}

export default App

// img="/stock_Img.jfif"