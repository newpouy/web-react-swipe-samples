import React, { useState, useEffect } from 'react'
import Swiper from 'react-id-swiper';
import './demoAxis.css'
// import 'react-id-swiper/lib/styles/css/swiper.css';

const DemoAxis = () => {
  var interleaveOffset = 0.7;
  const params = {
    direction: 'vertical',
    autoHeight: true,
    slidePerView: 'auto',
    centerSlides: true,
    watchSlidesProgress: true,
    on: {
      progress: function() {
        var swiper = this;
        // let opacity = 0
        for (var i = 0; i < swiper.slides.length; i++) {
          var slideProgress = swiper.slides[i].progress;
          var innerOffset = swiper.width * interleaveOffset;
          var innerTranslate = slideProgress * innerOffset;
          // slide progress 0 ~ 1 / -1 ~ 0 / -2 ~ -1 
          const opacity = slideProgress
          if(i===swiper.activeIndex) console.log('active: ', i, ' ', opacity, ' = ', slideProgress) //, ' + ', i, ' - ', swiper.activeIndex)
          swiper.slides[i].querySelector(".item_cover").style.display = 'block'
          swiper.slides[i].querySelector(".item_cover").style.opacity = opacity
          swiper.slides[i].querySelector(".slide-inner").style.transform =
            `translate3d(0, ${innerTranslate}px, 0)`;
        }      
      },
      touchStart: function() {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = "";
        }
      },
      setTransition: function(speed) {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = speed + "ms";
          swiper.slides[i].querySelector(".slide-inner").style.transition =
            speed + "ms";
        }
      }
    }
  } 
  const conStyle = {
    textAlign: 'center',
    fontSize: '18px',
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const list = [
    { id: 1, color:'white' },
    { id: 2, color:'white' },
    { id: 3, color:'white' },
  ]
  const [swiper, setSwiper] = useState(null)
  const [deviceHeight, setDeviceHeight] = useState(0)
  useEffect(() => {
    if(swiper != null) swiper.update()
    // console.log(window.innerHeight)
    setDeviceHeight(window.innerHeight)
  }, [swiper])
  return (
    <div style={{height: '640px'}}>
    <Swiper {...params}>
        {list.map((el, index) => {
          let style = { ...conStyle, backgroundColor: el.color}
          const coverStyle = {
            width: '100%',
            height: '100vh',
            background: 'rgb(0, 0, 0)', zIndex: '2', display: 'none', opacity: '0',
            position: 'absolute', left: '0px', top: `${index * 100}vh`
          }
          return (
            <div style={style}>
              <div className="slide-inner">Slide #{el.id}</div>
              <div className="item_cover" style={coverStyle}></div>
            </div>
          )
        })}
    </Swiper>
    </div>
  )
}

export default DemoAxis


