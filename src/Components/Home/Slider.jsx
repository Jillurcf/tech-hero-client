
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./Slider.css"

// 
// https://i.ibb.co/hXS025Q/intelvr.jpg
// https://i.ibb.co/HVBk3dW/googlevvr.jpg
// 
// https://i.ibb.co/jz8k3Dq/sonyvr.jpg
// 
// https://i.ibb.co/jVDPK0X/samvr.jpg
// 
// https://i.ibb.co/cyX245C/applever.jpg
// 


const carousel = (slider) => {
  const z = 300
  function rotate() {
    const deg = 360 * slider.track.details.progress
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
    })
    rotate()
  })
  slider.on("detailsChanged", rotate)
}

export default function Slider() {
   const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  )

  return (
    <div className="">
      <div className="wrapper sliderBody mt-36 mb-60">
      <div className="scene">
        <div className="carousel keen-slider" ref={sliderRef}>
          <div className="carousel__cell number-slide1">
            <img src="https://i.ibb.co/jTFt0gv/intelhr.jpg" alt="" /></div>
          <div className="carousel__cell number-slide2">
            <img src="https://i.ibb.co/RyYsnrf/googlehr.jpg" alt="" />
          </div>
          <div className="carousel__cell number-slide3">
            <img src="https://i.ibb.co/2qZn1QR/sonyhr.jpg" alt="" />
          </div>
          <div className="carousel__cell number-slide4"><img src="https://i.ibb.co/0nxwZT7/samhr.jpg" alt="" /></div>
          <div className="carousel__cell number-slide5">
            <img src="https://i.ibb.co/QH4Dy2D/applehr.jpg" alt="" />
          </div>
          <div className="carousel__cell number-slide6"><img src="https://i.ibb.co/jTFt0gv/intelhr.jpg" alt="" /></div>
        </div>
      </div>
    </div>
      {/* <div className="wrapper sliderBody mt-36 mb-60">
      <div className="scene">
        <div className="carousel keen-slider" ref={sliderRef}>
          <div className="carousel__cell number-slide1">
            <img src="https://i.ibb.co/jTFt0gv/intelhr.jpg" alt="" /></div>
          <div className="carousel__cell number-slide2">
            <img src="https://i.ibb.co/RyYsnrf/googlehr.jpg" alt="" />
          </div>
          <div className="carousel__cell number-slide3">
            <img src="https://i.ibb.co/2qZn1QR/sonyhr.jpg" alt="" />
          </div>
          <div className="carousel__cell number-slide4"><img src="https://i.ibb.co/0nxwZT7/samhr.jpg" alt="" /></div>
          <div className="carousel__cell number-slide5">
            <img src="https://i.ibb.co/QH4Dy2D/applehr.jpg" alt="" />
          </div>
          <div className="carousel__cell number-slide6"><img src="https://i.ibb.co/jTFt0gv/intelhr.jpg" alt="" /></div>
        </div>
      </div>
    </div> */}
      {/* <div className="wrapper sliderBody mt-36 mb-60">
      <div className="scene">
        <div className="carousel keen-slider" ref={sliderRef}>
          <div className="carousel__cell number-slide1">
            <img src="https://i.ibb.co/jTFt0gv/intelhr.jpg" alt="" /></div>
          <div className="carousel__cell number-slide2">
            <img src="https://i.ibb.co/RyYsnrf/googlehr.jpg" alt="" />
          </div>
          <div className="carousel__cell number-slide3">
            <img src="https://i.ibb.co/2qZn1QR/sonyhr.jpg" alt="" />
          </div>
          <div className="carousel__cell number-slide4"><img src="https://i.ibb.co/0nxwZT7/samhr.jpg" alt="" /></div>
          <div className="carousel__cell number-slide5">
            <img src="https://i.ibb.co/QH4Dy2D/applehr.jpg" alt="" />
          </div>
          <div className="carousel__cell number-slide6"><img src="https://i.ibb.co/jTFt0gv/intelhr.jpg" alt="" /></div>
        </div>
      </div>
    </div> */}
    </div>
  )
}
