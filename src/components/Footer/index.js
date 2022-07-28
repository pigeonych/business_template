import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
} from "./FooterElements";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to="/form">How it works</FooterLink>
                            <FooterLink to="/form">Telegram</FooterLink>
                            <FooterLink to="/form">Gmail</FooterLink>
                            <FooterLink to="/form">Terms of service</FooterLink>
                            <FooterLink to="/form">Investors</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to="/form">How it works</FooterLink>
                            <FooterLink to="/form">Telegram</FooterLink>
                            <FooterLink to="/form">Gmail</FooterLink>
                            <FooterLink to="/form">Terms of service</FooterLink>
                            <FooterLink to="/form">Investors</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to="/form">How it works</FooterLink>
                            <FooterLink to="/form">Telegram</FooterLink>
                            <FooterLink to="/form">Gmail</FooterLink>
                            <FooterLink to="/form">Terms of service</FooterLink>
                            <FooterLink to="/form">Investors</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/form">Facebook</FooterLink>
                            <FooterLink to="/form">Telegram</FooterLink>
                            <FooterLink to="/form">Gmail</FooterLink>
                            <FooterLink to="/form">Good</FooterLink>
                            <FooterLink to="/form">Investors</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">Fortex</SocialLogo>
                        <WebsiteRights>
                            Fortex © {new Date().getFullYear()} All rights
                            reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="Facebook"
                            >
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="Twitter"
                            >
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="Youtube"
                            >
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink
                                href="/"
                                target="_blank"
                                aria-label="Youtube"
                            >
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
