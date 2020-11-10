
import useWebAnimations, {  hinge } from '@wellyshen/use-web-animations'
import React from 'react'
import './glitch.css'
import Image from './glitch.jpg'

export const Glitch = () => {

  const {ref  : background , getAnimation:getBackgroundAnimation }= useWebAnimations({
      keyframes:{
          backgroundImage : `url(${Image})`
      },
      timing :{
          delay: 400,
          duration: 1800,
          iterations: 1,
      }
  })
  const {ref:fonts ,getAnimation :getFontsAnimation }= useWebAnimations({
    keyframes:{
      color : "red",
    },
    timing :{
        delay: 400,
        duration: 1800,
        iterations: 1,
    }
})
   const {keyframes , timing} = hinge
const {ref:image ,getAnimation:getImageAnimation }= useWebAnimations({
     keyframes,
     timing : {
       ...timing,
       delay :1000,
       duration : 2500,
       iterations : 1
     }
})

 const start =()=>{
   getBackgroundAnimation().play()
   getImageAnimation().play()
   getFontsAnimation().play()
 }

    return (
        <div ref={background} onClick={start} className="wrapper">
          <div ref={fonts} className="container">
           <p>Glitch</p>
             <img ref ={image} src="https://raw.githubusercontent.com/sakalx/react-glitch-effect/master/example/src/static/img/secondary.jpg" alt="glitch"/>
             <button onClick={start}>glitch</button>
          </div>
          
        </div>
    )
}
