import React, { FC } from 'react';
// import {useLottie} from 'lottie-react';
import groovyWalkAnimation from "./stairs.json";

import './Intro.css';

interface IntroProps {}

// const Example = () => {
  
// };

// const options = {
//   animationData: groovyWalkAnimation,
//   loop: true,
//   autoplay: true,
// };

// const { View } = useLottie(options);

const Intro: FC<IntroProps> = () => (
  // const container = useRef(null)

  // useEffect(() => {
  //   Lottie.loadAnimation({
  //     container,
  //     renderer: 'svg',
  //     loop: true,
  //     autoplay: true
  //   })
  // }, []);


  <div className="app_intro app__bg section__padding">
    <div className='app_intro-name'>
      <p >Freelancer</p>
      <p>---</p>
      <p>Kaelin Bullock</p>
    </div>

    <div className='app_intro-greeting'>
      {/* {View} */}
      <h1 className='app__intro-info'>I'm a Freelance Programmer<br/>
        Full Stack Web Development
      </h1>
    </div>
    <div className='app_intro-contact'></div>
  </div>
);

export default Intro;
