import styled from 'styled-components';


export const FooterConatiner = styled.div`
    margin: auto;
    position: relative;
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;

    &:before {
        position: absolute;
        content: '';
        width: 30%;
        height: 2px;
        top: 0px;
        left: calc(50% - 15%);

        background-color: black;
    }

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`
export const LogoContainer = styled.div`
    width: 23%;
    display: flex;
`

export const FooterLogo = styled.a`
    display: inline-block;
    cursor: pointer;
    width: 60px;
    height: 60px;
    overflow: hidden;
    margin: auto;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    &:hover {
        transform: scale(1.1);

    }
`

export const ImageContainer = styled.div`

`

export const InfoContainer = styled.div`
    text-align: center;
    h4 {
        margin: auto;
        margin-bottom: 5px
    }

    p {
        margin-top: 0;
        margin-bottom: 2px;
    }

    small {

    }

    @media screen and (max-width: 800px) {
        width: 100%;
        text-align: center
    }
`

export const LinksContainer = styled.div`

    width: 23%;

    @media screen and (max-width: 800px) {
        width: 100%;
        text-align: center
    }
`

export const FooterLink = styled.a`
    margin-right: 20px;
    transition: all 0.2s ease-in;

    &:hover {
        color: grey;
        transition: all 0.2s ease-in;
    }

    @media screen and (max-width: 800px) {
        display: inline-block;
        margin: 20px 20px;
    }
`