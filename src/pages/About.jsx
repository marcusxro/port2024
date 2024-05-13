import React, { useEffect, useRef, useState } from 'react'
import Header from '../comps/Header'
import gsap from 'gsap'
import selfPic from '../img/self.png'
import Marquee from 'react-fast-marquee'
import Lenis from 'lenis'

import creativeDev from '../mockups/creativeDev.jpg'
import webDesign from '../mockups/webDes.jpg'
import branding from '../mockups/branding.jpg'
import motionDesign from '../mockups/oldPort.jpg'
import uiAndUx from '../mockups/cafe.png'
import visualIndentity from '../mockups/sideBg.jpg'

const About = () => {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    } requestAnimationFrame(raf)
    useEffect(() => {
        gsap.to('.About .header', {
            opacity: 1
        })
    }, [])
    const [serviceItem, setServiceItem] = useState({
        data: [
            { title: 'CREATIVE DEVELOPMENT' },
            { title: 'WEB DESIGN' },
            { title: 'BRANDING' },
            { title: 'MOTION DESIGN' },
            { title: 'UI/UX DESIGN' },
            { title: 'VISUAL IDENTITY' }
        ]
    });
    const [imgItem, setImg] = useState(null);

    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX - cursor.offsetWidth / 2,
                y: e.clientY - cursor.offsetHeight / 2,
                ease: 'power2.out',
                duration: 1
            });
        };
        document.addEventListener('mousemove', moveCursor);
        return () => {
            document.removeEventListener('mousemove', moveCursor);
        };
    }, []);


    const scaleUpImg = (itm) => {
        console.log(itm)
        switch (itm) {
            case 'CREATIVE DEVELOPMENT':
                gsap.to('.hoverImg', {
                    scale: 1,
                    opacity: 1,
                    ease: 'power2.out',
                    duration: 1,
                })
                setImg(<img src={creativeDev} alt="" />);
                break 
            case 'WEB DESIGN':
                gsap.to('.hoverImg', {
                    scale: 1,
                    opacity: 1,
                    ease: 'power2.out',
                    duration: 1,
                })
                setImg(<img src={webDesign} alt="" />);
                break 

            case 'BRANDING':
                gsap.to('.hoverImg', {
                    scale: 1,
                    opacity: 1,
                    ease: 'power2.out',
                    duration: 1,
                })
                setImg(<img src={branding} alt="" />);
                break 
            case 'MOTION DESIGN':
                gsap.to('.hoverImg', {
                    opacity: 1,
                    scale: 1,
                    ease: 'power2.out',
                    duration: 1,
                })
                setImg(<img src={motionDesign} alt="" />);
                break 
            case 'UI/UX DESIGN':
                gsap.to('.hoverImg', {
                    opacity: 1,
                    scale: 1,
                    ease: 'power2.out',
                    duration: 1,
                })
                setImg(<img src={uiAndUx} alt="" />);
                break 
            case 'VISUAL IDENTITY':
                gsap.to('.hoverImg', {
                    opacity: 1,
                    scale: 1,
                    ease: 'power2.out',
                    duration: 1,
                })
                setImg(<img src={visualIndentity} alt="" />);
                break  

        }

    }

    const scleImg = () => {
        const tl = gsap.to('.hoverImg', {
            scale: 0,
            ease: 'power2.out',
            duration: 1,
            opacity: 0,
        });
                setImg(null); // Reset imgItem state when mouse leaves
        return () => {
            tl();
        };
    }

    useEffect(() => {
        const itemService = document.querySelectorAll('.serviceCon .serviceItem');
    
        itemService.forEach((itm) => {
            itm.addEventListener("mouseenter", () => {
                scaleUpImg(itm.innerHTML);
            });
    
            itm.addEventListener("mouseleave", () => {
                scleImg()
            });
        });
    
        // Cleanup function to remove event listeners
        return () => {
            itemService.forEach((itm) => {
                itm.removeEventListener("mouseenter", scaleUpImg);
                itm.removeEventListener("mouseleave", scleImg);
            });
        };
    }, []);
    

    return (
        <div className='About'>
            <Header />

            <div className="hoverImg" ref={cursorRef}>
                {imgItem}
            </div>

            <div className="aboutCon">
                <div className="landing">
                    <div className="textCon">
                        <div className="textItem">BORN IN</div>
                        <div className="textItem">DIGITAL</div>
                    </div>
                    <div className="container">
                        <div className="imageCon">
                            <img src={selfPic} alt="" />
                            <div className="tetxt">
                                <Marquee autoFill>
                                    <div className="role txt">SOFTWARE DEVELOPER-</div>
                                    <div className="role txt">SOFTWARE DEVELOPER-</div>
                                </Marquee>
                            </div>
                        </div>
                        <div className="text">
                            I'M AN INDEPENDENT FULL-STACK DEVEOPER,
                            COMBINING BRANDING, MOTION DESIGN & DIGITAL DESIGN TO HELP AMAZING CLIENTS STAND OUT FROM THE CROWD IN A DIGITAL FIRST WORLD.
                        </div>
                    </div>
                </div>


                <div className="textContent">
                    <div className="firstText">
                        I believe that for a brand to break through the barrier of today's digital world, it needs to be a memorable experience across all platforms.
                    </div>
                    <div className="firstText">
                        My philosophy is that working closely with our clients and following a fun and engaging process filled with great workshops and conversations gives the best result.
                    </div>
                    <div className="firstText">
                        With more than 3+ years of experience – I have worked with various small and big clients, creating Innovative softwares & digital experiences.                    </div>
                </div>

                <div className="services">
                    <div className="upCOn">
                    <div className="serviTitle">
                        SERVICES
                    </div>
                    <div className="lowerCon">
                        <div className="icon">
                            <ion-icon name="construct-outline"></ion-icon>
                        </div>
                        <div className="desc">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex autem mollitia reprehenderit veritatis, dolorum dolore dolores, aliquid, ab explicabo sunt earum tempore asperiores officia ratione quisquam magni ducimus tempora similique!
                        </div>
                    </div>
                    </div>
                    <div className="serviceCon">

                        {serviceItem.data.map((itm, index) => (
                            <ServiceItem
                                key={index}
                                title={itm.title}
                            />
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

const ServiceItem = ({ title, onMouseOver, onMouseLeave }) => (
    <div className="serviceItem" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
        {title}
    </div>
);


export default About
