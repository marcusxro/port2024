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


import ScrollTrigger from 'gsap/dist/ScrollTrigger'


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
    const [isEq, setIsEq] = useState('')
    const [toArr, setoToArr] = useState([])



    useEffect(() => {
        const itemService = document.querySelectorAll('.serviceCon .serviceItem');

        const handleMouseEnter = (itm) => {
            return () => {
                itemService.forEach((item) => {
                    if (item === itm) {
                        gsap.to(item, {
                            opacity: 1,
                            ease: 'power2.out',
                        });
                        scaleUpImg(item.innerHTML);
                        setIsEq(item.innerHTML);
                    } else {
                        gsap.to(item, {
                            opacity: 0.5,
                            ease: 'power2.out',
                        });
                    }
                });
            };
        };

        const handleMouseLeave = () => {
            itemService.forEach((item) => {
                gsap.to(item, {
                    opacity: 1,
                    ease: 'power2.out',
                });
            });
            scleImg();
        };

        itemService.forEach((itm) => {
            itm.addEventListener("mouseenter", handleMouseEnter(itm));
            itm.addEventListener("mouseleave", handleMouseLeave);
        });

        // Cleanup function to remove event listeners
        return () => {
            itemService.forEach((itm) => {
                itm.removeEventListener("mouseenter", handleMouseEnter(itm));
                itm.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);



    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);




        const updateScrollTrigger = () => {
            ScrollTrigger.getAll().forEach(t => t.kill());

            if (window.innerWidth >= 768) {
                // Use requestAnimationFrame and setTimeout to ensure elements are loaded
                requestAnimationFrame(() => {
                    setTimeout(() => {
                        gsap.to('.aboutCon .beliefCon .textCon', {
                            y: '76%',
                            scrollTrigger: {
                                trigger: '.aboutCon .beliefCon .textCon',
                                start: 'top 0%',
                                end: 'center',
                                scrub: 1,
                            },
                        });
                    }, 1000);
                });
            }
        };

        updateScrollTrigger();

        window.addEventListener('resize', updateScrollTrigger);



        return () => {
            window.removeEventListener('resize', updateScrollTrigger);
        };
    }, []);



    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger)
        gsap.to('.About .stickyCons .craft .headerText span img', {
            scale: '1',
            ease: 'power2.out',
            delay: 1,
            duration: 1,
            scrollTrigger: {
                trigger: '.stickyCons .craft',
                start: 'bottom 90%',
                end: 'bottom',
            }
        })


        gsap.to('.About .stickyCons .language', {
            left: '-30vw',
            ease: 'power2.out',
            delay: 0.5,
            duration: 1,
            scrollTrigger: {
                trigger: '.stickyCons .craft',
                start: 'bottom 100%',
                scrub: 1,
            }
        })
        gsap.to('.stickyCons .craft', {
            y: 0,
            scrollTrigger: {
                trigger: '.stickyCons .craft',
                start: 'bottom 100%',
                pin: true,
                scrub: true,
            }
        })
    }, [])


 const cursorRefs = useRef(null);

    useEffect(() => {
        const cursor = cursorRefs.current;
        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX ,
                y: e.clientY ,
                ease: 'power2.out',
                duration: 1
            });
        };
        document.addEventListener('mousemove', moveCursor);
        return () => {
            document.removeEventListener('mousemove', moveCursor);
        };
    }, []);
    return (
        <>
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
                    <div className="beliefs">
                        <Marquee
                            speed={200}
                            autoFill>
                            <div className="marqItem">
                                MY BELIEFS -
                            </div>
                            <div className="marqItem">
                                MY BELIEFS -
                            </div>
                        </Marquee>
                        <div className="beliefCon">
                            <div className="imgCon">
                                <img src={webDesign} alt="" />
                            </div>
                            <div className="textCon">
                                <div className="title">DESIGN IS AN EXPERIENCE</div>
                                <div className="desc">
                                    <div className="itmDesc">
                                        Design is not just colors, fonts and motion -
                                        It's about understanding your users needs and
                                        what gets their clock ticking. Truly understanding what takes design from just being design to creating a
                                        complete brand experience is what makes your
                                        business stand out from all the noise created in a digital doom-scroll era.
                                    </div>
                                    <div className="itmDesc">
                                        We were created for one purpose – to help brands evolve into being experiences across all touchpoints.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cert">
                        <div className="titleCon">
                            <Marquee
                                speed={200}
                                autoFill
                                direction='left'>
                                <div className="titleItem">
                                    LANGUAGES-
                                </div>
                            </Marquee>
                            <Marquee
                                speed={200}
                                autoFill
                                direction='right'>
                                <div className="titleItem">
                                    I USE-
                                </div>
                            </Marquee>
                        </div>
                        <div className="certCon">
                            <div className="certItem LItem">
                                <div className="absoBg">

                                </div>
                                <div className="imgCon">
                                    <img src={webDesign} alt="" />
                                </div>
                                <div className="title"><span>01/</span>REACT JS</div>
                                <div className="desc">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, vero tempora aperiam dignissimos voluptate commodi, itaque sequi, at nihil dolores hic! Ipsam odit quas quo quibusdam tempore. Quasi, id necessitatibus!
                                </div>
                                <span>| 3 Years</span>
                            </div>
                            <div className="certItem RItem">
                                <div className="absoBg">

                                </div>
                                <span> 3 Years |</span>
                                <div className="desc">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, vero tempora aperiam dignissimos voluptate commodi, itaque sequi, at nihil dolores hic! Ipsam odit quas quo quibusdam tempore. Quasi, id necessitatibus!
                                </div>
                                <div className="title">JAVASCRIPT <span>/02</span></div>
                                <div className="imgCon">
                                    <img src={webDesign} alt="" />
                                </div>
                            </div>
                            <div className="certItem LItem">
                                <div className="absoBg">

                                </div>
                                <div className="imgCon">
                                    <img src={webDesign} alt="" />
                                </div>
                                <div className="title"> <span>03/</span>NODE JS</div>
                                <div className="desc">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, vero tempora aperiam dignissimos voluptate commodi, itaque sequi, at nihil dolores hic! Ipsam odit quas quo quibusdam tempore. Quasi, id necessitatibus!
                                </div>
                                <span>| 2 Years</span>
                            </div>
                            <div className="certItem RItem">
                                <div className="absoBg">

                                </div>
                                <span> 2 Years |</span>
                                <div className="desc">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, vero tempora aperiam dignissimos voluptate commodi, itaque sequi, at nihil dolores hic! Ipsam odit quas quo quibusdam tempore. Quasi, id necessitatibus!
                                </div>
                                <div className="title">EXPRESS <span>/04</span></div>
                                <div className="imgCon">
                                    <img src={webDesign} alt="" />
                                </div>
                            </div>
                            <div className="certItem LItem">
                                <div className="absoBg">

                                </div>
                                <div className="imgCon">
                                    <img src={webDesign} alt="" />
                                </div>
                                <div className="title"><span>05/</span>JAVA</div>
                                <div className="desc">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, vero tempora aperiam dignissimos voluptate commodi, itaque sequi, at nihil dolores hic! Ipsam odit quas quo quibusdam tempore. Quasi, id necessitatibus!
                                </div>
                                <span>| 1 Year</span>
                            </div>
                            <div className="certItem RItem">
                                <div className="absoBg">

                                </div>
                                <span> 1 Year |</span>
                                <div className="desc">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, vero tempora aperiam dignissimos voluptate commodi, itaque sequi, at nihil dolores hic! Ipsam odit quas quo quibusdam tempore. Quasi, id necessitatibus!
                                </div>
                                <div className="title">VB.net <span>/06</span></div>
                                <div className="imgCon">
                                    <img src={webDesign} alt="" />
                                </div>
                            </div>
                            <div className="certItem LItem">
                                <div className="absoBg">

                                </div>
                                <div className="imgCon">
                                    <img src={webDesign} alt="" />
                                </div>
                                <div className="title"><span>07/</span>HTML5</div>
                                <div className="desc">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, vero tempora aperiam dignissimos voluptate commodi, itaque sequi, at nihil dolores hic! Ipsam odit quas quo quibusdam tempore. Quasi, id necessitatibus!
                                </div>
                                <span>| 3 Years</span>
                            </div>
                            <div className="certItem RItem">
                                <div className="absoBg">

                                </div>
                                <span> 3 Years |</span>
                                <div className="desc">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, vero tempora aperiam dignissimos voluptate commodi, itaque sequi, at nihil dolores hic! Ipsam odit quas quo quibusdam tempore. Quasi, id necessitatibus!
                                </div>
                                <div className="title">CSS3 <span>/08</span></div>
                                <div className="imgCon">
                                    <img src={webDesign} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



                <div className="stickyCons">
                    <div className="craft">
                        <div className="headerText">
                            LET'S <span>
                                <img src={uiAndUx} alt="" /></span> CRAFT
                        </div>
                        <div className="desc">
                            YOUR IDEAS.
                        </div>
                    </div>
                    <div className="language">

                        <div className="fillerDiv"></div>
                        <div className="cv" ref={cursorRefs}>
                               CLICK TO DOWNLOAD CV
                            </div>
                        <div className="textCon">
                            <div className="textItem">
                                WORK WITH
                            </div>
                            <div className="textItem">
                                ME
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

const ServiceItem = ({ title, onMouseOver, onMouseLeave }) => (
    <div className="serviceItem" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
        {title}
    </div>
);


export default About
