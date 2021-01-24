import React from 'react'

import { 
    FooterConatiner, 
    InfoContainer, 
    LinksContainer, 
    LogoContainer,
    FooterLink,
    FooterLogo } from './footer.styles'

import Logo from '../../assets/logo_white.png';


const Footer = _ => (

   <FooterConatiner>
       <LogoContainer>
            <FooterLogo href="https://spikedev.eu" target="_blank">
                <img src={Logo} />
            </FooterLogo>
       </LogoContainer>
       
       <InfoContainer>
            <h4>DEMO SITE</h4>
            <p>This site is for a demonstartional purposes only.</p>
            <small>By using it You agree on Terms of Use as well as my Privacy policy.</small>
       </InfoContainer>

       <LinksContainer>
            <FooterLink href="https://spikedev.eu/privacy/" target="_blank">Privacy</FooterLink>
            <FooterLink href="https://spikedev.eu/terms-of-service/" target="_blank">Terms of Use</FooterLink>
       </LinksContainer>
   </FooterConatiner>
)

export default Footer