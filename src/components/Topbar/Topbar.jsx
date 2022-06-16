import React from "react";
import {
  TopbarContainer,
  Icon,
  CloseIcon,
  TopbarWrapper,
  TopbarMenu,
  TopbarLink,
  TopBtnWrap,
  TopbarRoute,
} from "./TopbarStyle";

const Topbar = ({ isOpen, toggle }) => {
  return (
    <TopbarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <TopbarWrapper>
        <TopbarMenu>
          <TopbarLink to="about" onClick={toggle}>
            ABOUT US
          </TopbarLink>
          <TopbarLink to="expertise" onClick={toggle}>
            OUR EXPERTISE
          </TopbarLink>
          <TopbarLink to="services" onClick={toggle}>
            SERVICES
          </TopbarLink>
          <TopbarLink to="guide" onClick={toggle}>
            GUIDE
          </TopbarLink>
        </TopbarMenu>
        <TopBtnWrap>
          <TopbarRoute to="/contact">Contact US</TopbarRoute>
        </TopBtnWrap>
      </TopbarWrapper>
    </TopbarContainer>
  );
};

export default Topbar;
