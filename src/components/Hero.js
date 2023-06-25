import React from 'react';
import WomanImg from '../img/woman_hero.png'
const Hero = () => {
  return(
<section className='bg-pink-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24 '>
  <div className='container mx-auto flex justify-around h-full'>
    <div className='flex flex-col justify-center'>
   
      <div className='font-semibold flex items-center uppercase '>
        <div className='w-14 h-[2px] bg-red-500 mr-3'></div>
        <div className=''>New Trend</div>


      </div>
     
      <h1 className='text-[70px] leading-[1.1] font-light mb-4  mt-9'>
        AUTUMN SALE STYLISH <br/>
        <span className='font-semibold'>WOMEN </span>
      </h1>
      <div className='font-semibold flex flex-col uppercase '>
        <div className=''>Discover more</div>
        <div className='w-32 h-[2px] bg-gray-500 mr-3'></div>


      </div>
     

    </div>
    <div className='hidden lg:block'>
      <img src={WomanImg} alt=''/>
    </div>
  </div>
</section>
  ) ;
};

export default Hero;
