import React from 'react'
import Page1 from '../Components/Page1'
import Page2 from '../Components/Page2'
import Page3 from '../Components/Page3'
import Page4 from '../Components/Page4'
import Page5 from '../Components/Page5'
import Page6 from '../Components/Page6'
import Page7 from '../Components/Page7'
import Page8 from '../Components/Page8'
import Footer from '../Components/Footer'

const page = () => {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-orange-500 selection:text-black">
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Page8 />
      <Footer />
    </main>
  )
}

export default page