import {Button} from "../ButtonStyle";
import React,{useState} from "react";
import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from "./HeroStyle";

const HeroSection = () => {
    const [hover,setHover]=useState(false)
    const onHover=()=>{
        setHover(!hover)
    }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>INVEST NOW FOR A BETTER FUTURE</HeroH1>
        <HeroP>
          It's the time for your best investment. Talk to an expert Financial
          Advisor!
        </HeroP>
        <HeroBtnWrapper>
          <Button to="guide" onMouseEnter={onHover} onMouseLeave={onHover}
          primary ='true' dark = 'true'>
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
