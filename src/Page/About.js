import React from 'react'

function About() {
  return (
    <div>
      
      <div className="page-slider">
            <div className="relative text-center">
              <div className=' container '>
                <h5 className=" text-white ml-28 font-semibold">About Us</h5>
                <h1 className=" text-white ml-24 font-bold text-7xl my-4" >Our Company</h1>
                <h5 className=" text-white ml-28 font-semibold">Home / <span className=' text-zinc-400'>About</span></h5>
            </div>
            </div>
        </div>

        <div className='mt-24' >
          <div className=' container m-auto'>
          <div className=' grid grid-cols-2'>
            <div className='mx-16'>
              <h4 className=' text-red-600 font-semibold text-lg'>What we are</h4>
              <h2 className=' text-4xl font-bold mt-10'>We are dynamic team of creative people</h2>
              <p className='mt-10  text-zinc-400'>We provide consulting services in the area of IFRS and management reporting, helping companies to reach their highest level. We optimize business processes, making them easier.</p>
              <button className=" bg-red-500 hover:bg-red-700 text-red-50 mt-8 px-6 text-sm font-semibold py-3 rounded-full ">GET STARTED</button>
            </div>
            <div className='mx-8'>
              <div className='imgpage'></div>
            </div>
          </div>
          </div>
        </div>

        <div className='my-24' >
          <div className=' container m-auto'>
          <div className=' grid grid-cols-3 gap-8'>
          <div className='ml-16'> 
            <h2 className=' text-red-500 text-4xl font-bold '>01. <span className=' text-3xl text-black font-semibold'>Our Mission</span></h2>
            <p className='mt-8  text-zinc-400'>llum similique ducimus accusamus laudantium praesentium, impedit quaerat, itaque maxime sunt deleniti voluptas distinctio .</p>
          </div>
          <dir className=' m-0'>
          <h2 className=' text-red-500 text-4xl font-bold '>02. <span className=' text-3xl text-black font-semibold'>Vission</span></h2>
            <p className='mt-8  text-zinc-400'>llum similique ducimus accusamus laudantium praesentium, impedit quaerat, itaque maxime sunt deleniti voluptas distinctio .</p>
          </dir>
          <div>
          <h2 className=' text-red-500 text-4xl font-bold '>03. <span className=' text-3xl text-black font-semibold'>Our Approach</span></h2>
            <p className='mt-8  text-zinc-400'>llum similique ducimus accusamus laudantium praesentium, impedit quaerat, itaque maxime sunt deleniti voluptas distinctio .</p>
          </div>
          </div>
          </div>
        </div>
        <div className='imgpage1'> 
        <div className=' container m-auto  relative'>
         <div className='grid grid-cols-4'>
          <div >
          <h1 className='number text-white'></h1>
          <h6 className="icon-color text-center">Project Done</h6>
          </div>
          <div >
          <h1 className='number1 text-white'></h1>
          <h6 className="icon-color text-center">User Worldwide</h6>
          </div>
          <div >
          <h1 className='number2 text-white'></h1>
          <h6 className="icon-color text-center">Availble Country</h6>
          </div>
          <div ><h1 className='number3 text-white'></h1>
          <h6 className="icon-color text-center">Award Winner</h6></div>
         </div>
         </div> 
         </div>
         <div className='mt-24 container m-auto text-center'> 
          <h1 className=' text-red-600 font-semibold text-lg'>Our Services </h1>
          <h1 className='text-5xl font-bold mt-4 leading-tight text-zinc-900'>Expert Team member to get <br /> best service</h1>
         </div>
          <div className='mt-20'>
            <div className=' container m-auto'>
              <div className=' grid grid-cols-3 mx-28  gap-8' >
              <div>
                <img src="https://demo.themefisher.com/megakit/images/team/team-1.jpg" alt="" className='imghov' />
              </div>
              <div>
                <img src="https://demo.themefisher.com/megakit/images/team/team-1.jpg" alt="" className='imghov' />
              </div>
              <div>
                <img src="https://demo.themefisher.com/megakit/images/team/team-1.jpg" alt="" className='imghov' />
              </div>
              <div>
                <img src="https://demo.themefisher.com/megakit/images/team/team-1.jpg" alt="" className='imghov' />
              </div>
              <div>
                <img src="https://demo.themefisher.com/megakit/images/team/team-1.jpg" alt="" className='imghov' />
              </div>
              <div>
                <img src="https://demo.themefisher.com/megakit/images/team/team-1.jpg" alt="" className='imghov' />
              </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default About
