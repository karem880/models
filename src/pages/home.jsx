


import Navbar from "../component/navbar";


function Home() {

  const objects = [
    { image: './assets/cartoon-character-with-yellow-jacket-sunglasses.jpg', title: 'calsic fashion with us ', price: '$150' },
    { image: './assets/fashion-boy-with-yellow-jacket-blue-pants (1).jpg', title: 'calsic fashion with us ', price: '$150' },
    { image: './assets/cartoon-character-with-yellow-jacket-sunglasses.jpg', title: 'calsic fashion with us ', price: '$150' },
    { image: './assets/fashion-boy-with-yellow-jacket-blue-pants (1).jpg', title: 'calsic fashion with us ', price: '$150' },
    { image: './assets/cartoon-character-with-yellow-jacket-sunglasses.jpg', title: 'calsic fashion with us ', price: '$150' },
    {image: './assets/fashion-boy-with-yellow-jacket-blue-pants (1).jpg', title: 'calsic fashion with us ', price: '$150' },
    {image: './assets/cartoon-character-with-yellow-jacket-sunglasses.jpg', title: 'calsic fashion with us ', price: '$150' },
    { image: './assets/fashion-boy-with-yellow-jacket-blue-pants (1).jpg', title: 'calsic fashion with us ', price: '$100' },
    
  ];
  const backgroundImageUrl = './assets/fun-3d-illustration-cartoon-teenage-girl-with-rain-gear-removebg-preview.png';



  return (
 <>
 <Navbar/>

 <section className="mt-[50px] flex flex-col lg:flex-row items-center justify-around bg-gray-200  overflow-hidden w-full h-fit lg:h-[90vh]">
  <div className="w-[80%] mt-44 md:mt-0 lg:w-[40%] mx-auto flex flex-col justify-center gap-5 h-full  relative p-0 md:p-16">
    <span className="  absolute top-auto md:top-auto md:left-[10%] w-[350px] h-[350px] rounded-full opacity-20  bg-cyan-400  rounded-br-2xl z-[1]"></span>
    <h1 className=" text-[40px] md:text-[60px] font-serif " style={{fontWeight:"900"}}>DISCOVER MEN`S <br />LATEST <span className="w-fit p-2 bg-cyan-500 text-white">FASHION</span></h1>
    <p className="text-lg font-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quibusdam am Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse,</p>
    <button className="w-[150px] h-[50px] bg-cyan-500 text-white rounded-tr-xl rounded-bl-2xl ">call now</button>
  </div>
  <div className="w-[80%] h-full lg:w-[40%] object-cover mx-auto flex felx-col items-center justify-center gap-5">
<img src="./assets/head.png" className="w-full" alt="" />  </div>
 </section>

 <section className="mt-52 gap-10 md:mt-[30px] flex flex-col lg:flex-row items-center justify-center w-full flex-wrap ">



 <div
      className="w-[80%]  lg:w-[25%] h-[230px] rounded-xl justify-between z-10 relative bg-cyan-200 flex mt-16 overflow-hidden"
      style={{
        backgroundImage: `url("${backgroundImageUrl}")`,
        backgroundSize: 'contain',
        backgroundPosition: 'right,bottom',
        backgroundRepeat:"no-repeat"
        
      }}
    > 
    <span className="w-[200px] h-[200px] absolute left-20 rounded-full hover:left-0 hover:rotate-180 duration-1000 hover:w-[50%] hover:h-full   top-auto bg-cyan-400 opacity-20 z-[1] "></span>
     <div className="w-full flex ml-5 flex-col items-start justify-center gap-3  ">
      <span className="text-gray-400">abo mohsen </span>
      <h1 className="text-lg font-extrabold ">ABO MOHSEN ELGHALY </h1>
      <span className="text-cyan-400">abo mohsen </span>
  
    </div>
   
  </div>




  <div
      className="w-[80%]  lg:w-[25%] h-[230px] rounded-xl justify-between z-10 relative bg-gray-200 flex mt-16 overflow-hidden"
      style={{
        backgroundImage: `url("${backgroundImageUrl}")`,
        backgroundSize: 'contain',
        backgroundPosition: 'right,bottom',
        backgroundRepeat:"no-repeat"
        
      }}
    > 
    <span className="w-[200px] h-[200px] absolute left-20 rounded-full hover:left-0 hover:rotate-180 duration-1000 hover:w-[50%] hover:h-full   top-auto bg-gray-400 opacity-20 z-[1] "></span>
     <div className="w-full flex ml-5 flex-col items-start justify-center gap-3  ">
      <span className="text-gray-400">abo mohsen </span>
      <h1 className="text-lg font-extrabold ">ABO MOHSEN ELGHALY </h1>
      <span className="text-cyan-400">abo mohsen </span>
  
    </div>
   
  </div>







  <div
      className="w-[80%]  lg:w-[25%] h-[230px] rounded-xl justify-between z-10 relative bg-pink-200 flex mt-16 overflow-hidden"
      style={{
        backgroundImage: `url("${backgroundImageUrl}")`,
        backgroundSize: 'contain',
        backgroundPosition: 'right,bottom',
        backgroundRepeat:"no-repeat"
        
      }}
    > 
    <span className="w-[200px] h-[200px] absolute left-20 rounded-full hover:left-0 hover:rotate-180 duration-1000 hover:w-[50%] hover:h-full   top-auto bg-pink-400 opacity-20 z-[1] "></span>
     <div className="w-full flex ml-5 flex-col items-start justify-center gap-3  ">
      <span className="text-gray-400">abo mohsen </span>
      <h1 className="text-lg font-extrabold ">ABO MOHSEN ELGHALY </h1>
      <span className="text-cyan-400">abo mohsen </span>
  
    </div>
   
  </div>
 

 </section>

 <section className="mt-52   w-full bg-gray-200 pt-10  ">
 <h1 className="text-4xl font-bold text-center" > our proudct in store</h1>
<p className="text-lg text-center font-bold text-gray-400 mt-5" > Lorem ipsum dolor, sit amet consectetur  . Eaque, maxime?</p>
<div className="w-[90%] md:w-[70%] flex items-center justify-center mx-auto ">
  <ul className="flex items-center text-md md:text-2xl mx-auto mt-8 font-extrabold justify-center gap-2 md:gap-10 w-full" style={{
fontWeight:"900",fontFamily:"sans-serif"
  }}>
    <li className="text-cyan-500 rounded-md underline  bg-cyan-100">All</li>
    <li className="hover:text-cyan-500 hover:underline hover:bg-cyan-100 duration-1000 hover:scale-110 cursor-pointer">Featured </li>
    <li className="hover:text-cyan-500 hover:underline hover:bg-cyan-100 duration-1000 hover:scale-110 cursor-pointer">on sale </li>
    <li className="hover:text-cyan-500 hover:underline hover:bg-cyan-100 duration-1000 hover:scale-110 cursor-pointer">Trending </li>
  </ul>
</div>
<div className=" w-[80%] mx-auto flex flex-col lg:flex-row items-center justify-center  gap-10 flex-wrap ">

{objects.map((obj,id)=>(
<>
<div className="w-[90%] md:w-[300px] h-[500px] flex flex-col justify-center items-center  mt-12 hover:scale-110 duration-1000 hover:opacity-80  hover:rotate-[-2deg]" key={id} >
  <div className="w-full h-[80%]">
  <img src={obj.image} className="w-full h-full " alt="" />

  </div>
  <div className="w-full h-[20%] text-start">
    <h1 className="text-2xl font-extrabold">{obj.title}</h1>
    <p className="text-xl"> price is <span className="text-cyan-400 font-extrabold">{obj.price}</span>  </p>
  </div>



</div>
</>
))}




</div>

</section>


<section className="mt-52   w-full  ">

<div className="w-full md:w-[80%] bg-gray-200 flex flex-col md:flex-row justify-center items-center mx-auto h-fit p-10 ">

<div className="w-full md:w-[50%] flex items-center justify-center ">
  <img src="./assets/man-solo-traveling-backpacker-3d-illustration-removebg-preview.png" alt="" />
</div>
<div className="w-full mx-auto items-center md:items-start md:w-[50%] flex flex-col  justify-center ">
 <button className="w-[200px] bg-cyan-500 h-[40px] flex items-center justify-center text-lg text-white rounded-sm">LIMITED OFFER</button>
 <h1 className="text-3xl  mt-5 " style={{fontFamily:"sans-serif" ,fontWeight:"700"}}> Weekiy Sale ON </h1>
 <h1 className="text-3xl  mt-5 " style={{fontFamily:"sans-serif" ,fontWeight:"700"}}> <span className="text-cyan-500 text-5xl">60%</span> off All Product </h1>
<div className="w-full flex justify-center md:justify-start items-center gap-5 md:gap-20">
 <h1 className="text-xl  mt-5 text-cyan-500 " style={{fontFamily:"sans-serif" ,fontWeight:"700"}}> <span className="text-black text-3xl">5</span>O </h1>
 <h1 className="text-xl  mt-5 text-cyan-500 " style={{fontFamily:"sans-serif" ,fontWeight:"700"}}> <span className="text-black text-3xl">8</span>H </h1>
 <h1 className="text-xl  mt-5 text-cyan-500 " style={{fontFamily:"sans-serif" ,fontWeight:"700"}}> <span className="text-black text-3xl">32</span>M </h1>
 <h1 className="text-xl  mt-5 text-cyan-500 " style={{fontFamily:"sans-serif" ,fontWeight:"700"}}> <span className="text-black text-3xl">15</span>S </h1>

</div>

</div>


</div>


</section>


<section className="mt-52   w-full bg-gray-200 h-fit md:h-[200px] flex items-center justify-center  ">

<div className="w-[80%]  flex flex-col md:flex-row justify-center items-center ">

<div className="flex justify-center items-center flex-col w-full md:w-[50%]">
  <h1 className="text-4xl  " style={{fontFamily:"monospace",fontWeight:"900"}}>Subscribe Our newsletter</h1>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, adipisci ex.</p>
</div>

<div className="flex justify-center items-center w-full mt-10 md:w-[50%] ">
<input type="text" placeholder="Search about products" className="placeholder:text-gray-400 p-3 h-[50px] w-[70%] outline-none " />
<button className="w-[30%] h-[50px] bg-cyan-600 text-white flex items-center justify-center ">Subscribe </button>
</div>


</div>


</section>
<footer className="w-full bg-black text-white py-10">
        <div className="w-[80%] mx-auto flex flex-col md:flex-row justify-around gap-10">
          {/* Column 1 */}
          <div className="w-full md:w-[25%] mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">KAREMM MAHMOUD</h2>
            <p className="text-gray-500 mb-4">
              Some random text for the first column. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Column 2 */}
          <div className="w-full md:w-[25%] mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4"> about us</h2>
            <ul className=" text-gray-400 list-none">
              <li>Some random text here.</li>
              <li>More random text for this item.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Additional random text.</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="w-full md:w-[25%] mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4"> category</h2>
            <ul className=" text-gray-400 list-none">
              <li>Lorem ipsum dolor sit amet, .</li>
              <li>Some more random text here.</li>
              <li>Random text for this item.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="w-full md:w-[25%]">
            <h2 className="text-xl font-bold mb-4"> contact</h2>
            <ul className=" text-gray-400 list-none">
              <li>Random text for the first item.</li>
              <li>Additional random text.</li>
              <li>Lorem ipsum dolor sit amet, ct.</li>
              <li>Some more random text here.</li>
            </ul>
          </div>
        </div>
        <a href="https://karem-mahmoud-dev.vercel.app/" className="w-full flex items-center justify-center text-gray-300 text-sm mt-16 md:text-2xl  " style={{fontWeight:"900",fontFamily:"monospace"}} >aLL COPYRIGHT FOR @<span className="text-cyan-400">kAREM MAHMOUD </span></a>
      </footer>

 </>
  );
}

export default Home;
