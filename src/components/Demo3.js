import React, { useEffect, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
// import { BrowserRouter, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import { withRouter } from "react-router";
// import Swiper from 'react-id-swiper';
import Swiper from './my-react-id-swiper';
import 'react-id-swiper/lib/styles/css/swiper.css';

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

const Testt = ({onTest}) => {
  const click = () => {
    console.log('click',onTest)
    onTest()
  }
  return (
    <div>
      <input type="button" value="test"  onClick={click}/>
    </div>
  )
}


const Swiperr = ({ onTest, route, list }) => {
  const history = useHistory();
  const params = {
    // virtualTranslate: true,
    on: {
      init: () => {
        console.log('init')
      },
      touchStart: (e) => {
      }
    },
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 500,
      stretch: 100,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    spaceBetween: 30
  }
  const style={
    height: '50px',
    padding: 15,
    minHeight: 100,
    color: '#543423',
    backgroundColor: '#fff111'
  }
  return (
    <>
    <Testt onTest={onTest}/>
    <Swiper {...params}>
      {list.map(el => <div style={style} id="id1">Slide #{el}</div>)}
    </Swiper>
    </>
  )
}
const DemoNested = (props) => {
  const style={height: '50px'}
  const onTest = () => { console.log('testtt')}
  const [route, setRoute] = useState('')
  const [slist, setSlist] = useState([])
  
  const history = useHistory();
  const onChangeIndex = (e) => {
    console.log(window.location.origin)
    // Route.router.push(
    const newRoute = `page${e}`
    history.push(`/${newRoute}`)
    setRoute(newRoute)
  }

  return (
    <>
    {/* <Inner slist={[3,4,2,4]}/>
    <p>dfasf</p> */}
    <Swiperr list={[1,2,3,4]}/>
    </>
  );
}
const test = (value) => {
  console.log(value)
}
const Inner = ({slist}) => {
  console.log(slist,'slist')
  const [startScreenX, setStartScreenX] = useState(NaN)
  const [endScreenX, setEndScreenX] = useState(NaN)
  const [dist, setDist] = useState(0)
  const params = {
    on: {
      init: (dd) => {
        console.log(dd,'init')
      },
      touchStart: (e) => {
        console.log(e)
        setStartScreenX(e.screenX)
      },
      touchEnd: (e) => {
        setEndScreenX(e.screenX)
      },
    },
  }
  useEffect(() => {
    if(endScreenX - startScreenX > 0) {
      console.log('move Left')
    } else {
      console.log('move Right')
    }
  }, [endScreenX])
  return (
    <Swiper {...params}>
    {slist.map((el,index) => <div key={index}style={Object.assign({}, styles.slide, styles.slide1)}>slide n°{el}</div>)}
  </Swiper>
  )
}

export default DemoNested;