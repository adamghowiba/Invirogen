import gsap from 'gsap';

type Directive = 'horizontal' | 'vertical';

export const globalOptions = {
    duration: 0.45
}

export const globalTimeline = gsap.timeline();

export const fadeInLines = (line: string, dir: Directive, duration = 0.85) => {
    return gsap.from(line, {
        width: dir == 'horizontal' ? 0 : null,
        height: dir == 'vertical' ? 0 : null,
        duration,
    })
}

let animations;
let currentAnimation = 0;
export const controller = () => {
    
    return {
        previous: ()=> {
            currentAnimation--;
        },
        next: () => {
            currentAnimation++;
        }
    }
}

