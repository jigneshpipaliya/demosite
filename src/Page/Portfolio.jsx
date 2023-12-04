import React from 'react'

function Portfolio() {
  return (
    <div>
       <div className="page-slider">
            <div className="relative text-center">
              <div className=' container '>
                <h5 className=" text-white ml-28 font-semibold">Latest works</h5>
                <h1 className=" text-white ml-24 font-bold text-7xl my-4" >Portfolio</h1>
                <h5 className=" text-white ml-28 font-semibold">Home / <span className=' text-zinc-400'>  Latest works</span></h5>
            </div>
            </div>
        </div>
        <div className='mt-24 container m-auto text-center'> 
          <h1 className=' text-red-600 font-semibold text-lg'>Our Services </h1>
          <h1 className='text-5xl font-bold mt-4 leading-tight'>We provide a wide range of <br /> creative services</h1>
         </div>

       <div className=' container m-auto mt-20'>
            <div className=' grid grid-cols-3 gap-6'>
              <div>
                <img src="https://demo.themefisher.com/megakit/images/portfolio/1.jpg" alt="" className='imghov1' />
              </div>
              <div>
                <img src="https://demo.themefisher.com/megakit/images/portfolio/1.jpg" alt=""  className='imghov1'/>
              </div>
              <div>
                <img src="https://demo.themefisher.com/megakit/images/portfolio/1.jpg" alt=""  className='imghov1' />
              </div>
              <div>
                <img src="https://demo.themefisher.com/megakit/images/portfolio/1.jpg" alt="" className='imghov1' />
              </div>
              <div>
                <img src="https://demo.themefisher.com/megakit/images/portfolio/1.jpg" alt="" className='imghov1' />
              </div>
              <div>
                <img src="https://demo.themefisher.com/megakit/images/portfolio/1.jpg" alt="" className='imghov1' />
              </div>
            </div>
       </div>

    </div>
  )
}

export default Portfolio
