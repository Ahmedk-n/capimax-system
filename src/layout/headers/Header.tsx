"use client"
import Link from "next/link";
import { useState } from "react";
import UseSticky from "../../hooks/UseSticky";
import Image from "next/image";
import NavMenu from "./Menu/NavMenu";
import Sidebar from "./Menu/Sidebar";
import HeaderOffcanvas from "./Menu/HeaderOffcanvas";

import logo_1 from "@/assets/img/logo/logo.png";

const Header = () => {
    const { sticky } = UseSticky();
    const [isActive, setIsActive] = useState<boolean>(false);
    const [offCanvas, setOffCanvas] = useState<boolean>(false);

    return (
        <>
            <header id="header">
                <div id="sticky-header" className={`menu-area transparent-header ${sticky ? "sticky-menu" : ""}`}>
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="logo" data-animation="animate__fadeInLeft">
                                            <Link href="/"><Image src={logo_1} alt="Logo" /></Link>
                                        </div>
                                        <div className="navbar-wrap main-menu d-none d-lg-flex" data-animation="animate__fadeInDown">
                                            <NavMenu />
                                        </div>
                                        <div className="header-action" data-animation="animate__fadeInRight">
                                            <ul className="list-wrap">
                                                <li className="header-login animate__animated animate__bounceIn animate__delay-1s">
                                                    <Link href="https://panel.capimaxinvestment.com/">Login<i className="fas fa-user"></i></Link>
                                                </li>
                                                <li className="offcanvas-menu animate__animated animate__bounceIn animate__delay-2s">
                                                    <a onClick={() => setOffCanvas(true)} style={{ cursor: "pointer" }} className="menu-tigger">
                                                        <i className="fas fa-bars"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div onClick={() => setIsActive(true)} className="mobile-nav-toggler animate__animated animate__fadeIn">
                                            <i className="fas fa-bars"></i>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Sidebar style={false} isActive={isActive} setIsActive={setIsActive} />
            <HeaderOffcanvas offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
        </>
    );
}

export default Header;
