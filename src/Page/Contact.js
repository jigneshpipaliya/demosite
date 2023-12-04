import React from 'react'
import GoogleMapReact from 'google-map-react'

function Contact() {
  return (
    <div>
       <div className="page-slider">
            <div className="relative text-center">
              <div className=' container '>
                <h5 className=" text-white ml-28 font-semibold">Our services</h5>
                <h1 className=" text-white ml-24 font-bold text-7xl my-4" >What We Do</h1>
                <h5 className=" text-white ml-28 font-semibold">Home / <span className=' text-zinc-400'> Our services</span></h5>
            </div>
            </div>
        </div>
       <div className='mt-20'>
        <div className=' container m-auto'>
          <div className=' grid grid-cols-2 gap-5'>
            <div className='ml-20'>
              <h1 className=' text-4xl font-bold'>Contact Form</h1>
              <div class="font-sans antialiased bg-grey-lightest">
  
  <div class="w-full bg-green fixed shadow z-1">
    
  </div>
  
  <div class="w-full bg-grey-lightest" >
    <div class="container mx-auto py-8">
      <div class="mx-auto bg-white rounded shadow">
            
            <div class="py-4 px-8">
                <div class="flex mb-4">
                    <div class="w-1/2 mr-1">
                        <label class="block text-grey-darker text-sm font-bold mb-2" for="first_name"> Name</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="first_name" type="text" placeholder="Your first name" required/>
                    </div>
                   
                </div>
                <div class="mb-4">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="email">Email Address</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="email" placeholder="Your email address"/>
                </div>
                <div class="mb-4">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="password">Your Massage</label>
                    <textarea class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" rows="4" id="" type="" placeholder="send your massage"/>
                    <p class="text-grey text-xs mt-1">At least 6 characters</p>
                </div>
                <div class="flex items-center justify-between mt-8">
                <button className='mt-6 px-5 py-3 ring-2  ring-red-500  bg-red-600 text-white text-xs hover:bg-red-500 '>SEND MESSAGE</button>
                    
                </div>
            </div>
        </div>
     
    </div>
  </div>
            </div>
            <div></div>
          </div>
        </div>
       </div>
        
     <div>
    <GoogleMapReact 
      style={{ height: `300px` }}
      defaultZoom={10}
      resetBoundsOnResize={true}
      defaultCenter={{ lat:21.2322215, lng:72.8358743 }}
    />
  </div>
    </div>
 </div> 
  )
}

export default Contact
