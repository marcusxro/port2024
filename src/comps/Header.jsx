import React, { useEffect } from 'react'
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    useEffect(() => {

        const menu = document.querySelector('.header .menu')
        const exitMenu = document.querySelector('.absoExit')

        console.log(exitMenu)
        menu.addEventListener('click', () => {

            gsap.to('.header',{
                pointerEvents: 'none'
            })
            gsap.to(menu,{
                opacity:0,
                pointerEvents:'none'
            })
            gsap.to('.absoMenu', {
                top: '0%',
                ease: 'power2.Out',
                onComplete: () => {
                    gsap.to('.absoMenu .menuItems span', {
                        y: '0%',
                        opacity: 1,
                        ease: 'power2.Out',
                        stagger: 0.3

                    })
                }
            })
        })

        exitMenu.addEventListener('click', () => {
            gsap.to('.header',{
                pointerEvents: 'none'
            })
            gsap.to(menu,{
                opacity:1,
                pointerEvents:'all'
            })
            gsap.to('.absoMenu .menuItems span', {
                opacity: 0,
                ease: 'power2.Out',
                stagger: 0.1,
                onComplete: () => {
                    gsap.to('.absoMenu', {
                        top: '-100%',
                        ease: 'power2.Out',
                    })
                }
            })

        })

        const navItems = document.querySelectorAll('.header .midCon .navItem');

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

    const nav = useNavigate()

    return (
        <>
            <div className="absoMenu">
                <div className="absoExit">
                    close
                </div>
                <div className="menuItems">
                    <span>HOME</span>
                </div>
                <div className="menuItems">
                    <span>WORKS</span>
                </div>
                <div className="menuItems">
                    <span>
                        CONTACT
                    </span>
                </div>
                <div className="menuItems">
                    <span>ABOUT</span>
                </div>
            </div>
            <div className="header">

                <div className="logo">Marcus <br />
                    Salopaso</div>
                <div className="midCon">
                    <div className="navItem" onClick={() => {nav('/')}}>
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
                    <div className="navItem" onClick={() => {nav('/about-me'); window.scrollTo(0,0)}}>
                        <div className="textOne">ABOUT</div>
                        <div className="textTwo">ABOUT</div>
                    </div>
                </div>
                <div className="year">
                    ©2024
                </div>
                <div className="menu">
                        <div className="lines"></div>
                        <div className="lines"></div>
                        <div className="lines"></div>
                    </div>
            </div>
        </>
    )
}

export default Header
