// import React from 'react';
// import WomanImg from '../img/elu-removebg-preview.png';

// const Hero = () => {
//   return (
//     <section className='h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
//       <div className='container mx-auto flex justify-between h-full bg-green-300'>
//         <div className='flex flex-col justify-center max-w-[50%]'>
//           <div className='font-semibold flex items-center uppercase '>
//             <div className='w-14 h-[2px] bg-red-500 mr-3'></div>
//             <div className=''>Discover Autumn Trend</div>
//           </div>
//           <h1 className='text-[70px] leading-[1.1] font-light mb-4 mt-9'>
//             Leaves Are Falling, Prices Are Dropping! <br />
//             <span className='font-semibold'>Shop Now</span>
//           </h1>
//         </div>
//         <div className='hidden lg:block ]'>
//           <img
//             className='h-[600px] ' // Adjust the height and width here
//             src={WomanImg}
//             alt=''
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from 'react';
import WomanImg from '../img/elu-removebg-preview.png';
const Hero = () => {
  return(
<section className='bg-pink-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24 '>
  <div className='container mx-auto flex justify-around h-full'>
    <div className='flex flex-col justify-center'>
   
      <div className='font-semibold flex items-center uppercase '>
        <div className='w-14 h-[2px] bg-red-500 mr-3'></div>
        <div className=''>Discover Autumn Trend</div>


      </div>
     
      <h1 className='xl:text-[80px] sm:text-[50px] text-[40px] lg:text-[60px] 2xl:text-[70px] leading-[1.1] font-light mb-4 mt-9 '>
  Leaves Are Falling,
  <br />
  Prices are dropping!
  <br/>
  <span className='font-semibold'>Shop Now </span>
</h1>
      
     

    </div>
    <div className='hidden lg:block'>
      <img src={WomanImg} alt=''/>
    </div>
  </div>
</section>
  ) ;
};

export default Hero;