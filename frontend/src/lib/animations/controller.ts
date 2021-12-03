import gsap from 'gsap';

type Directive = 'horizontal' | 'vertical';

export const globalOptions = {
    duration: 0.45
}

export const fadeInLines = (line: string, dir: Directive, duration = 0.85) => {
    return gsap.from(line, {
        width: dir == 'horizontal' ? 0 : null,
        height: dir == 'vertical' ? 0 : null,
        duration,
    })
}

export class AnimationSequence {
    count: number;
    animations: Array<() => gsap.core.Timeline>;
    currentAnimation: gsap.core.Timeline;
    previousAnimation: gsap.core.Timeline;

    constructor(animations: Array<() => gsap.core.Timeline>, count = 0) {
        this.count = count;
        this.animations = animations;
    }

    get nextAnimation(): gsap.core.Timeline {
        this.previousAnimation = this.currentAnimation;
        this.currentAnimation = this.animations[++this.count]();

        return this.currentAnimation;
    }
    get prevAnimation(): gsap.core.Timeline {
        this.count--;
        console.log('Getting previous animation', this.count);
        this.currentAnimation = this.previousAnimation;
        return this.previousAnimation;
    }
    init(): void {
        this.currentAnimation = this.animations[this.count]();
    }

}