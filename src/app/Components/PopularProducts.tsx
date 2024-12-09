
import React from 'react'
import Image from 'next/image'

function  PopularProducts  () {
  return (
    
    <div className='w-full h-[300px] flex justify-center items-center mt-10 mb-20'>
      <div className='w-[80%] h-full'>
        {/* top size */}
        <div>
          <span className='border-l-8 border-black text-black mb-5 font-bold'></span>
          <div className='flex justify-between'>
          <h1 className='text-2xl'> Our Popular Product</h1>
          {/* <button className='py-2 px-5 bg-red-500 rounded-md text-white'>View All Products</button> */}
          </div>
        </div>
        <div className=' flex justify-between mt-7 '>
<div>
<div className='w-[400px] h-[170px] bg-gray-200 flex justify-center items-center'>
<Image src ={"/product10.png"} width ={150} height={100}alt ="gaming"></Image></div>
<div className='flex flex-col'>
  <span className='font-bold'>The poplar suede sofa </span>
  <span className='font-bold'> €980</span>
</div>
</div>
<div>
<div className='w-[200px] h-[170px] bg-gray-200 flex justify-center items-center'>
<Image src ={"/product1.png"} width ={150} height={100}alt ="gaming"></Image></div>
<div className='flex flex-col'>
<span className='font-bold'>The Dandy Chair

</span>
  <span className='font-bold'>€250</span>
</div>
</div>
<div>
<div className='w-[200px] h-[170px] bg-gray-200 flex justify-center items-center'>
<Image src ={"/product3.png"} width ={150} height={100}alt ="gaming"></Image></div>
<div className='flex flex-col'>
<span className='flex flex-col'>The Dandy Chair </span>

  <span className='font-bold'> €250</span>
  
</div>
</div>
<div>
 
</div>

</div>


<div className="bg-white shadow-sm border-b mx-auto flex flex-col w-[1200px]">
      <div className="flex items-center gap-4 px-8 py-4">
        <div className="text-black text-sm font-normal leading-[21px]">
          The furniture brand of the <br /> future, with timeless designs
        </div>
        <button className="py-2 px-5 bg-custome-purple rounded-md text-black">
          View Collection
        </button>
      </div>
      <div className="w-full h-[270px] flex justify-center mt-8">
        <div className="bg-black w-[80%] h-full flex justify-between items-center">
          <div className="text-white bg-custome-purple text-sm font-normal leading-[21px] px-8 py-4">
            
<h1 >From a studio in London to a global brand with
over 400 outlets</h1>
<p>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.   Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.. <br /> Using modern web technologies.</p>
          </div>

          <div className="w-[200px] mt-4">
            <h1 className="text-3xl font-sans font-bold ml-5">Avelon</h1>
            <button className="font-bold underline ml-5 mt-5">
              Discover More
            </button>
          </div>

          <div className="ml-8 mt-16">
            <Image
              src="/product7.png"
              width={350}
              height={200}
              alt="Hero Image"
              className="mt-5"
            />
          </div>
        </div>
      </div>

</div>
</div>
</div>
)
}
export default PopularProducts 



