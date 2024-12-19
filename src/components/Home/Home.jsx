import React from 'react'
import image from '../../assets/Home_assets/sideImage.png'
function Home(){
  return (
    <div className='flex justify-around items-center'>
        <div className='w-'>More Than a Game, It's an Experience</div>
        <div className='w-'><img src={image} alt="" /></div>
    </div>
  );
}
export default Home;
