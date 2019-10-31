import React, { Component,useEffect, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
// import { BrowserRouter, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import { withRouter } from "react-router";
import Swiper from 'react-id-swiper';
import 'react-id-swiper/lib/styles/css/swiper.css';
// import { Swiper, Navigation, Pagination } from 'swiper';
// import ReactIdSwiperCustom from 'react-id-swiper/lib/ReactIdSwiper.custom';
// import Swiper from 'swiper'
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
    // Provide Swiper class as props
    Swiper,
    // Add modules you need
    // modules: [Navigation, Pagination],
    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'bullets',
    //   clickable: true
    // },
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev'
    // },
    on: {
      touchStart: (e) => {
        // console.log(window.location,history, e.target.id)
        // history.push(`/${route}/${e.target.id}`)
      }
    },
    spaceBetween: 30
  }
  const style={
    height: '50px',
    padding: 15,
    minHeight: 100,
    color: '#fff',
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
// const DemoNested = (props) => {
//   const style={height: '50px'}
//   const onTest = () => { console.log('testtt')}
//   const [route, setRoute] = useState('')
//   const [slist, setSlist] = useState([])
//   const history = useHistory();
//   const onChangeIndex = (e) => {
//     console.log(window.location.origin)
//     // Route.router.push(
//     const newRoute = `page${e}`
//     history.push(`/${newRoute}`)
//     setRoute(newRoute)
//   }
//   useEffect(() => {
//     setSlist([3,4,2,4])
//   },[])
//   return (
//     <Inner slist={slist}/>
//   );
// }

// const Inner = ({slist}) => {
//   console.log(slist,'slist')
//   const params = {
//     on: {
//       init: (dd) => {
//         console.log(dd,'init')
//       },
//     },
//   }
//   return (
//     <Swiper {...params}>
//     {slist.map((el,index) => <div key={index}style={Object.assign({}, styles.slide, styles.slide1)}>slide n°{el}</div>)}
//   </Swiper>
//   )
// }

class Inner extends Component {
  state = {
    params: {
      on: {
        init: (dd) => {
          console.log('swiper init')
        },
      },
      dd: ''      
    },
    swiper: null
  }
  componentDidMount() {
    console.log('Inner componentDidMount swiper: ' + this.state.swiper)
    // setTimeout(() => {
      this.setState({
        params: {
          on: {
            init: (dd) => {
              console.log('swiper initttt')
            },
            transitionEnd: (e) => {
              console.log(this)
            }
          },      
          dd: 'fdsa'      
        },
      })
    // }, 1000);

  }
  setSwiper = (swiper) => {
    console.log('set swiper', swiper)
    this.setState({
      ...this.state,
      swiper: swiper
    })
  }
  // componentWillUpdate() {
  //   this.setState({
  //     params: {
  //       on: {
  //         init: (dd) => {
  //           console.log('swiper init')
  //         },
  //       },      
  //     }      
  //   })
  // }
  render() {
    if(this.state.swiper != null) {
      console.log(' swiper is not null')
      this.state.swiper.update()
    }
    const slist = this.props.slist
    console.log('Inner render', 'swiper length: '+slist.length)
    return (
      <Swiper {...this.state.params} getSwiper={this.setSwiper}>
      {slist.map((el,index) => <div key={index}style={Object.assign({}, styles.slide, styles.slide1)}>slide n°{el}</div>)}
      </Swiper> 
    )   
  }
}

class DemoNested extends Component {
  state = {
    slist: []
  }
  componentDidMount() {
    console.log('DemoNested componentDidMount')
    // this.setState({
    //   slist: [3,4,2,4]
    // })
  }
  
  render() {
    console.log('DemoNested render')
    return (
      <div>
        <Inner slist={[3,4,2,4]}/>
      </div>
    )
  }
}

export default DemoNested;