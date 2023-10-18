
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import './Slider.css'


// import "keen-slider/keen-slider.min.css"
// import "./styles.css"

const Slider = ({users}) => {
    const {image, name, brandname, type, price, shortdescription, rating, addbuttons } = users;
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <div className=''>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
            <img src={image} alt="" /></div>
        <div className="keen-slider__slide number-slide2">
            <img src={image} alt="" />
        </div>
        <div className="keen-slider__slide number-slide3">
            <img src={image} alt="" /></div>
        <div className="keen-slider__slide number-slide4">
            <img src={image} alt="" /></div>
        <div className="keen-slider__slide number-slide5">
            <img src={image} alt="" /></div>
        <div className="keen-slider__slide number-slide6">
            <img src={image} alt="" /></div>
      </div>
    </div>
  )
}


export default Slider;



// const Slider = ({users}) => {
//     const {image, name, brandname, type, price, shortdescription, rating, addbuttons } = users;
//   const [sliderRef, instanceRef] = useKeenSlider(
//     {
//       slideChanged() {
//         console.log('slide changed')
//       },
//     },
//       {
//         loop: true,
//       },
//       [
//         slider => {
//           slider.on('created', () => {
//             alert('Hello World')
//           })
//         },
//       ]
//   )



//   return (
//     <div ref={sliderRef} className="keen-slider">
//       <div className="keen-slider__slide">
//         <img src={image} alt="" />
//       </div>
//       <div className="keen-slider__slide">
//         <img src={image} alt="" />
//       </div>
//       <div className="keen-slider__slide">
//         <img src={image} alt="" />
//       </div>
//     </div>
//   )
// };

// export default Slider;