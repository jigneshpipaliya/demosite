import React from 'react'

function Blog() {
  return (
    <div>
        <div className=' bg-zinc-300'>
       <div className="page-slider">
            <div className="relative text-center">
              <div className=' container '>
                <h5 className=" text-white ml-28 font-semibold">Our services</h5>
                <h1 className=" text-white ml-24 font-bold text-7xl my-4" >What We Do</h1>
                <h5 className=" text-white ml-28 font-semibold">Home / <span className=' text-zinc-400'> Our services</span></h5>
            </div>
            </div>
        </div>
        <div className=' container mx-auto grid grid-cols-2 sm:grid-cols-3 gap-5 mt-28 pb-20 text-center'>
                 
                 <div className='ml-12 bg-white pb-10'>
                 <img src="https://demo.themefisher.com/megakit/images/blog/1.jpg" alt=""  className='rounded '/>
                 <h1 className=' icon-color mt-8 text-lg ml-3'>Design/ Ui/Ux/ admin</h1>
                 <h1 className=' text-3xl font-semibold'>How to improve design with typography?</h1>
                 <button className='mt-12 px-5 py-3 ring-2 rounded-full ring-red-500  bg-red-600 text-white text-xs hover:bg-red-500 '>LEARN MORE</button>
                 </div>
                 <div className='ml-12 bg-white pb-10'>
                 <img src="https://demo.themefisher.com/megakit/images/blog/1.jpg" alt=""  className='rounded '/>
                 <h1 className=' icon-color mt-8 text-lg ml-3'>Design/ Ui/Ux/ admin</h1>
                 <h1 className=' text-3xl font-semibold'>How to improve design with typography?</h1>
                 <button className='mt-12 px-5 py-3 ring-2 rounded-full ring-red-500  bg-red-600 text-white text-xs hover:bg-red-500 '>LEARN MORE</button>
                 </div>
                
                <div className='ml-12 bg-white pb-10'>
                 <img src="https://demo.themefisher.com/megakit/images/blog/1.jpg" alt=""  className='rounded '/>
                 <h1 className=' icon-color mt-8 text-lg ml-3'>Design/ Ui/Ux/ admin</h1>
                 <h1 className=' text-3xl font-semibold'>How to improve design with typography?</h1>
                 <button className='mt-12 px-5 py-3 ring-2 rounded-full ring-red-500  bg-red-600 text-white text-xs hover:bg-red-500 '>LEARN MORE</button>
                 </div>
                
                <div className='ml-12 bg-white pb-10'>
                 <img src="https://demo.themefisher.com/megakit/images/blog/1.jpg" alt=""  className='rounded '/>
                 <h1 className=' icon-color mt-8 text-lg ml-3'>Design/ Ui/Ux/ admin</h1>
                 <h1 className=' text-3xl font-semibold'>How to improve design with typography?</h1>
                 <button className='mt-12 px-5 py-3 ring-2 rounded-full ring-red-500  bg-red-600 text-white text-xs hover:bg-red-500 '>LEARN MORE</button>
                 </div>  
               </div>

        </div>
    </div>
  )
}

export default Blog
