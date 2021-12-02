import { gsap } from 'gsap';
export const a1 = () => {
    const t1 = gsap.timeline({ paused: true });
    t1.to('.block--1', {
        yPercent: -150
    });
    t1.to('.block--1', {
        rotate: 90
    });

    return t1;
};
export const a2 = () => {
    return gsap.to('.block--2', {
        yPercent: -150
    });
};
export const a3 = () => {
    return gsap.to('.block--3', {
        yPercent: -100
    });
};
