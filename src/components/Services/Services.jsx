import React from "react";
import Icon1 from '../../images/about.svg'
import Icon2 from '../../images/discoverImage.svg'
import Icon3 from '../../images/guideImage.svg'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesStyle";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>24/7 Support</ServicesH2>
          <ServicesP>We are with you 24/7 you can contact us anytime</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>24/7 Support</ServicesH2>
          <ServicesP>We are with you 24/7 you can contact us anytime</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>24/7 Support</ServicesH2>
          <ServicesP>We are with you 24/7 you can contact us anytime</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
