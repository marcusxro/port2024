import React, { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Marquee from "react-fast-marquee";
import brutalistImg from '../img/brutalistTwo.jpg'
import sideBg from '../mockups/sideBg.jpg'

//mockups img

import cafeEunoia from '../mockups/cafe.png'
import oldPort from '../mockups/oldPort.jpg'

import ulcImg from '../mockups/ulcImg.jpg'
import pcupIT from '../mockups/pcupIt.jpg'
import melchoraScanner from '../mockups/melchoraScanner.jpg'
import devanImg from '../mockups/devanImg.jpg'
import orderingApp from '../mockups/orderingAPp.jpg'




const Home = () => {
    window.scrollTo(0, 0)
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
        console.log(e)
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    const [perc, setPerc] = useState(0)
    const [isToLoad, setToLoad] = useState(false)
    useEffect(() => {
        window.scrollTo(0, 0)
        const interval = setInterval(() => {
            setPerc(prevPerc => {
                // Increment perc until it reaches 100
                if (prevPerc < 100) {
                    return prevPerc + 1;
                } else {
                    clearInterval(interval); // Clear the interval when perc reaches 100
                    return 100;
                }
            });
        }, 20);

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []); // Empty dependency array means this effect runs only once on mount

    useEffect(() => {
        if (perc === 100) {
            gsap.to('.loaders', {
                height: '0%',
                duration: 1,
                ease: 'power2.in',
                onComplete: () => {
                    gsap.to('.loaders', {
                        opacity: 0,
                        duration: 0,
                        top: '-50%',
                        onComplete: () => {
                            setToLoad(!isToLoad)
                        }
                    })
                    gsap.to('.HomeContent .header', {
                        opacity: 1,
                        ease: 'power2.in',
                        delay: 0.5
                    })
                    gsap.to('.HomePage .HomeContent', {
                        y: 0,
                        ease: 'power2.Out',
                    })
                    gsap.to('.HomeContent .textCon .goY .textItem ', {
                        y: 0,
                        delay: 0.2,
                        stagger: 0.3,
                        ease: 'power2.Out',
                        onComplete: () => {
                            gsap.to('.HomeContent .textCon .goY .textItem ', {
                                overflow: 'visible',
                            })
                        }
                    })
                    gsap.to('.HomeContent .firstCon .imgCon', {
                        maxHeight: '50vh',
                        delay: 0.2,
                        ease: 'power2.Out',
                    })
                    gsap.to('.HomeContent .firstCon .imgCon img', {
                        height: '100%',
                        delay: 0.5,
                        ease: 'power2.Out',
                    })
                }
            })
        }

    }, [perc])

    requestAnimationFrame(raf)

    useEffect(() => {
        const navItems = document.querySelectorAll('.HomePage .HomeContent .header .midCon .navItem');

        navItems.forEach((itm) => {
            itm.addEventListener("mouseenter", () => {
                gsap.to(itm.querySelector('.textOne'), {
                    y: "-100%",
                    ease: 'power2.Out',
                });
                gsap.to(itm.querySelector('.textTwo'), {
                    y: "-90%",
                    ease: 'power2.Out',
                });
            });
            itm.addEventListener("mouseleave", () => {
                gsap.to(itm.querySelector('.textOne'), {
                    y: 0,
                    ease: 'power2.Out',
                });
                gsap.to(itm.querySelector('.textTwo'), {
                    y: "100%",
                    ease: 'power2.Out',
                });
            });
        });
    }, []);


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        if (isToLoad) {
            gsap.to('.HomePage .section .imageCon', {
                height: '100%',
                ease: 'power2.Out',
                delay: 0.3,
                duration: 1,
                onComplete: () => {
                    gsap.to('.HomePage .section .imageCon img', {
                        height: '100%',
                        ease: 'power2.Out',
                        duration: 1,
                    })
                    gsap.to('.HomePage .section .textCon .textItem span', {
                        y: 0,
                        ease: 'power2.Out',
                        stagger: 0.3,
                    })
                },
                scrollTrigger: {
                    trigger: '.section',
                    start: 'top 50%',
                    end: 'bottom'
                }
            })


            gsap.to('.HomePage .selected .textCon .textItem span', {
                y: 0, // Snap to y: 0
                ease: 'power2.Out',
                duration: 0.5,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: '.HomePage .selected', // Trigger when this element is reached
                    start: 'top 50%', // Start the animation when the element is at the middle of the viewport
                    end: 'bottom', // End the animation when the bottom of the viewport reaches the triggers
                }
            });


            gsap.to('.itemFooter', {
                top: '0%', // Snap to y: 0
                ease: 'power2.Out',
                duration: 1,
                scrollTrigger: {
                    trigger: '.continue', // Trigger when this element is reached
                    start: 'bottom 95%', // Start the animation when the element is at the middle of the viewport
                    end: 'bottom',
                    scrub: true
                }
            });
            gsap.to('.itemFooter .firstCon .textItem span', {
                y: 0, // Snap to y: 0
                ease: 'power2.Out',
                stagger: 0.3,
                delay: 1,
                scrollTrigger: {
                    trigger: '.continue', // Trigger when this element is reached
                    start: 'bottom 100%', // Start the animation when the element is at the middle of the viewport
                    end: 'bottom',
                    scrub: true
                }
            });
            gsap.to('.social', {
                opacity: 1, // Snap to y: 0
                ease: 'power2.Out',
                stagger: 0.3,
                delay: 1.5,
                scrollTrigger: {
                    trigger: '.continue', // Trigger when this element is reached
                    start: 'bottom 100%', // Start the animation when the element is at the middle of the viewport
                    end: 'bottom',

                }
            });

            gsap.to('.selectedProjects .firstProject .projectItem .imgCon', {
                height: '100%', // Snap to y: 0
                ease: 'power2.Out',
                stagger: 0.3,
                delay: 1,
                onComplete: () => {
                    gsap.to('.selectedProjects .firstProject .projectItem .imgCon img', {
                        height: '100%', // Snap to y: 0
                        ease: 'power2.Out',
                        stagger: 0.3,
                    });
        
                },
                scrollTrigger: {
                    trigger: '.selectedProjects', // Trigger when this element is reached
                    start: 'top 100%', // Start the animation when the element is at the middle of the viewport
                    end: 'bottom',
                }
            });



        }
    }, [isToLoad])


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

    const mailtoLink = `mailto:marcussalopaso1@gmail.com`;

  const handleClick = () => {
    window.location.href = mailtoLink;
  };

    
    return (
        <div className='HomePage'>
      <div className='bg'></div>
            <div className="custom-cursor" ref={cursorRef}>

            </div>

            <div className="loaders">

                <div className="loadWrap">
                    <div className="upperCon">
                        <div className="desc">
                            MARCUS <br />
                            IS A CREATIVE DEVELOPER
                        </div>
                        <div className="loader">
                            {perc}% / 100
                        </div>
                    </div>
                    <div className="secCon">
                        <Marquee autoFill
                            speed={250}>
                            <div className="loaderMarq">
                                LOADING (SHORTLY)
                            </div>
                            <div className="loaderMarq">
                                LOADING (SHORTLY)
                            </div>
                        </Marquee>
                    </div>
                </div>

            </div>

            <div className="HomeContent">
                <div className="header">
                    <div className="logo">Marcus <br />
                        Salopaso</div>
                    <div className="midCon">
                        <div className="navItem">
                            <div className="textOne">HOME</div>
                            <div className="textTwo">HOME</div>
                        </div>
                        <div className="navItems">
                            /
                        </div>
                        <div className="navItem">
                            <div className="textOne">WORKS</div>
                            <div className="textTwo">WORKS</div>
                        </div>
                        <div className="navItems">
                            /
                        </div>
                        <div className="navItem">
                            <div className="textOne">CONTACT</div>
                            <div className="textTwo">CONTACT</div>
                        </div>
                        <div className="navItems">
                            /
                        </div>
                        <div className="navItem">
                            <div className="textOne">ABOUT</div>
                            <div className="textTwo">ABOUT</div>
                        </div>
                    </div>
                    <div className="year">
                        ©2024
                    </div>
                </div>
                <div className="firstCon">
                    <div className="imgCon">
                        <img src={sideBg} alt="" />
                        <div className="text">GALLERY SW'</div>
                    </div>
                </div>
                <div className="secCon">
                    <div className="textCon">
                        <div className="goY">
                            <div className="textItem">
                                ©‘18 MARCUS <span>
                                    <img src={brutalistImg} alt="" />
                                </span>
                                SALOPASO
                            </div>
                        </div>
                        <div className="goY">
                            <div className="textItem">
                                CREATIVE DEVELOPER
                            </div>
                        </div>
                        <div className="goY">
                            <div className="textItem">
                                SPECIALIZING IN <span> <img src={brutalistImg} alt="" /></span>
                            </div>
                        </div>
                        <div className="goY">
                            <div className="textItem">
                                FULL-STACK AND  <div className="colored"> (MOTION)</div>
                            </div>
                        </div>
                    </div>
                    <div className="scroll">SCROLL</div>
                </div>
            </div>



            <div className="stickyCon">
                <div className="section">
                    <div className="imageCon">
                        <img src={brutalistImg} alt="" />
                    </div>
                    <div className="textCon">
                        <div className="textItem">
                            <span>MINIMALIST</span>
                        </div>
                        <div className="textItem">
                            <span>BRUTALIST</span>
                        </div>
                        <div className="textItem">
                            <span>INNOVATIVE</span>
                        </div>
                        <div className="textItem">
                            <span>DESIGN</span>
                        </div>
                    </div>
                </div>
                <div className="first"></div>
                <div className="selected">
                    <div className="textCon">
                        <div className="textItem">
                            <span>SELECTED</span>
                        </div>
                        <div className="textItem">
                            <span>(WORKS)</span>
                        </div>
                        <div className="textItem">
                            <span>21'23</span>
                        </div>
                        <div className="footerText">
                            KEEP SCROLLING
                        </div>
                    </div>
                </div>
                <div className="selectedProjects">
                    <div className="firstProject flexCol">
                        <div className="projectItem">
                            <div className="imgCon">
                                <img src={cafeEunoia} alt="" />
                            </div>
                            <div className="textCon">
                                <div className="num">00(1)</div>
                                <div className="midCon">
                                    <div className="text">MERN</div>
                                    <div className="text">/</div>
                                    <div className="text">INVENTORY SYSTEM</div>
                                </div>
                                <div className="date">
                                    2024
                                </div>
                            </div>
                        </div>

                        <div className="projectItem">
                            <div className="imgCon">
                                <img src={oldPort} alt="" />
                            </div>
                            <div className="textCon">
                                <div className="num">00(2)</div>
                                <div className="midCon">
                                    <div className="text">REACT JS & GSAP</div>
                                    <div className="text">/</div>
                                    <div className="text">2023 PORTFOLIO</div>
                                </div>
                                <div className="date">
                                    2023
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="secProject flexCol">
                        <div className="projectItem">
                            <div className="imgCon">
                                <img src={pcupIT} alt="" />
                            </div>
                            <div className="textCon">
                                <div className="num">00(3)</div>
                                <div className="midCon">
                                    <div className="text">MERN</div>
                                    <div className="text">/</div>
                                    <div className="text">PRINTING SYSTEM</div>
                                </div>
                                <div className="date">
                                    2024
                                </div>
                            </div>
                        </div>
                        <div className="projectItem">
                            <div className="imgCon">
                                <img src={ulcImg} alt="" />
                            </div>
                            <div className="textCon">
                                <div className="num">00(4)</div>
                                <div className="midCon">
                                    <div className="text">REACT JS & GSAP</div>
                                    <div className="text">/</div>
                                    <div className="text">KNOWLEDGE WEBSITE</div>
                                </div>
                                <div className="date">
                                    2024
                                </div>
                            </div>
                        </div>
                        <div className="projectItem">
                            <div className="imgCon">
                                <img src={melchoraScanner} alt="" />
                            </div>
                            <div className="textCon">
                                <div className="num">00(5)</div>
                                <div className="midCon">
                                    <div className="text">MERN</div>
                                    <div className="text">/</div>
                                    <div className="text">ATTENDANCE SYSTEM</div>
                                </div>
                                <div className="date">
                                    2024
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="thirdProject flexCol">

                        <div className="projectItem">
                            <div className="imgCon">
                                <img src={orderingApp} alt="" />
                            </div>
                            <div className="textCon">
                                <div className="num">00(7)</div>
                                <div className="midCon">
                                    <div className="text">MERN</div>
                                    <div className="text">/</div>
                                    <div className="text">ORDERING SYSTEM</div>
                                </div>
                                <div className="date">
                                    2024
                                </div>
                            </div>
                        </div>
                        <div className="projectItem">
                            <div className="imgCon">
                                <img src={devanImg} alt="" />
                            </div>
                            <div className="textCon">
                                <div className="num">00(6)</div>
                                <div className="midCon">
                                    <div className="text">MERN</div>
                                    <div className="text">/</div>
                                    <div className="text">STREAMING APP</div>
                                </div>
                                <div className="date">
                                    2024
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="continue">
                        <Marquee autoFill>
                            <div className="marqItem">CONTINUE SCROLLING -</div>
                            <div className="marqItem">CONTINUE SCROLLING -</div>
                        </Marquee>
                    </div>
                    <div className="whiteSpace">
                        s
                    </div>
                </div>

            </div>
            <div className="itemFooter">
                <div className="firstCon">
                    <div className="textItem">
                        <span>HAVE A PROJECT IN MIND?</span>
                    </div>
                    <div className="textItem">
                        <span>OR YOU WANT TO SAY HELLO,</span>
                    </div>
                    <div className="textItem">
                        <span>GET IN TOUCH WITH ME</span>
                    </div>
                </div>
                <div className="secCon">
                    <div className="item social">
                        ©2024
                    </div>
                    <div className="item">
                        <div className="social" onClick={() => {  window.open('https://www.facebook.com/marcuss09', '_blank');}}>FACEBOOK</div>
                        <div className="social" onClick={() => {  window.open('https://www.instagram.com/mrcsxro/', '_blank');}}>INSTAGRAM</div>
                        <div className="social" onClick={() => {  window.open('https://www.tiktok.com/@marcuxro', '_blank');}}>TIKTOK</div>
                        <div className="social" onClick={() => {handleClick()}}>E-MAIL</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
