
// https://i.ibb.co/jTFt0gv/intelhr.jpg
// https://i.ibb.co/hXS025Q/intelvr.jpg
// https://i.ibb.co/HVBk3dW/googlevvr.jpg
// https://i.ibb.co/RyYsnrf/googlehr.jpg
// https://i.ibb.co/jz8k3Dq/sonyvr.jpg
// https://i.ibb.co/2qZn1QR/sonyhr.jpg
// https://i.ibb.co/jVDPK0X/samvr.jpg
// https://i.ibb.co/0nxwZT7/samhr.jpg
// https://i.ibb.co/cyX245C/applever.jpg
// https://i.ibb.co/QH4Dy2D/applehr.jpg

import NoProduct from "./NoProduct";


const BdSlider = ({brandDetails}) => {
 console.log(brandDetails);
  // const {brandDetails.name} = brandDetails
    return (
      <div>
        {
          brandDetails ? 
          <div className="flex">
          <div className="carousel lg:h-[80vh] lg:w-3/4 mx-auto">
<div id="slide1" className="carousel-item relative w-full">
  <img src={brandDetails[0].image} className="w-full" />
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide4" className="btn btn-circle">❮</a> 
    <a href="#slide2" className="btn btn-circle">❯</a>
  </div>
</div> 
<div id="slide2" className="carousel-item relative w-full">
  {/* "https://i.ibb.co/RyYsnrf/googlehr.jpg" */}
  <img src={brandDetails[1].image} className="w-full" />
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide1" className="btn btn-circle">❮</a> 
    <a href="#slide3" className="btn btn-circle">❯</a>
  </div>
</div> 
<div id="slide3" className="carousel-item relative w-full">
  {/* "https://i.ibb.co/2qZn1QR/sonyhr.jpg"  */}
  <img src={brandDetails[2].image} className="w-full" />
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide2" className="btn btn-circle">❮</a> 
    <a href="#slide4" className="btn btn-circle">❯</a>
  </div>
</div> 
<div id="slide4" className="carousel-item relative w-full">
  <img src={brandDetails[3].image} className="w-full" />
  {/* "https://i.ibb.co/2qZn1QR/sonyhr.jpg"  */}
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide3" className="btn btn-circle">❮</a> 
    <a href="#slide1" className="btn btn-circle">❯</a>
  </div>
</div>
</div>
      </div>
      :
      <NoProduct></NoProduct>
        }
    
      </div>
    );
};

export default BdSlider;