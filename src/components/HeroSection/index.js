import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
    HeroH1,
    HeroP,
    HeroContent,
} from "./HeroElements";

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Solutions For Your Buisness</HeroH1>
                <HeroP>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    quidem eveniet inventore minus. Commodi nostrum neque
                    consequuntur sint expedita aspernatur minima molestiae
                    ullam, eius cumque, officia facere suscipit quia ipsam?
                </HeroP>
                <HeroBtnWrapper>
                    <Button
                        to="about"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={true}
                        offset={-80}
                    >
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
