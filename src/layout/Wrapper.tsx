"use client";

import { useEffect } from "react";
import ScrollToTop from "@/components/common/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "animate.css";

if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap");
}

const Wrapper = ({ children }: any) => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target as HTMLElement;
                    const animation = element.dataset.animation || 'animate__fadeIn';
                    const delay = element.dataset.delay || '';
                    element.classList.add('animate__animated', animation);
                    if (delay) {
                        element.classList.add(delay);
                    }
                    observer.unobserve(element);
                }
            });
        }, { 
            threshold: 0.1,
            rootMargin: '50px'
        });

        document.querySelectorAll('[data-animation]').forEach(element => {
            observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return <>
        {children}
        <ScrollToTop />
        <ToastContainer position="top-center" />
    </>;
}

export default Wrapper;