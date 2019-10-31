import React, { useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
// import { BrowserRouter, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import { withRouter } from "react-router";
import Swiper from 'swiper'
import './swiper.min.css'
import './myswipe.css'
const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slideContainerY: {
    height: 100,
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
  divider: {
    height: 50,
  },
};

const Swiperr = (props) => {
  useEffect((props, dd) => {
    console.log(props, dd, 'dd')
    // setTimeout((props) => {
      var mySwiper = new Swiper('.swiper-container');
      console.log(mySwiper[0])
    // mySwiper[0].on('touchStart', function () {
    //   console.log('touchStart');
    //   props.history.push('/touch/test')
    // });
    // mySwiper[1].on('slideChange', function () {
    //   console.log('slide changed');
    // });
    // mySwiper[2].on('slideChange', function () {
    //   console.log('slide changed');
    // });     
    // }, 500)   
  }, [])
  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">Swiper 1</div>
        <div className="swiper-slide">Swiper 2</div>
        <div className="swiper-slide">Swiper 3</div>
      </div>
    </div>
  )
}
const DemoNested = (props) => {
  const history = useHistory();
  const onChangeIndex = (e) => {
    console.log(e)
    // console.log(history)
    // Route.router.push()

    history.push('/test')
  }
  return (
    <SwipeableViews onChangeIndex={onChangeIndex}>
      <div style={Object.assign({}, styles.slide, styles.slide1)}>
        <div style={{ overflow: 'scroll' }}>
          <div style={{ width: 700 }}>
            This is component is very large so we can test how a native scroll container is handled.
          </div>
        </div>
        slide n°1
        <div style={styles.divider} />
        <SwipeableViews onChangeIndex={onChangeIndex} resistance>
        <Swiperr/>
        </SwipeableViews>
      </div>
      <div style={Object.assign({}, styles.slide, styles.slide2)}>
        <div style={{ overflow: 'scroll' }}>
          <div style={{ width: 700 }}>
            This is component is very large so we can test how a native scroll container is handled.
          </div>
        </div>
        slide n°2
        <div style={styles.divider} />
        <Swiperr/>
      </div>
      <div style={Object.assign({}, styles.slide, styles.slide3)}>
        slide n°3
        <div style={styles.divider} />
        <Swiperr/>
      </div>
    </SwipeableViews>
  );
}

export default DemoNested;