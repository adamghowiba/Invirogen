import gsap from 'gsap';

type Directive = 'horizontal' | 'vertical';

export const globalOptions = {
	duration: 0.45
};

export const fadeInLines = (line: string, dir: Directive, duration = 0.85): gsap.core.Tween => {
	return gsap.from(line, {
		width: dir == 'horizontal' ? 0 : null,
		height: dir == 'vertical' ? 0 : null,
		duration
	});
};

export class AnimationSequence {
	index: number;
	animations: Array<gsap.core.Timeline>;
	current: gsap.core.Timeline;

	constructor(timeline?: (() => gsap.core.Timeline)[]) {
		this.index = 0;
		this.animations = !timeline ? [] : timeline.map((func) => func());
		this.current = this.animations[this.index];
	}

	transition(onNext: (arg0: number) => number, onReverseComplete?: () => void) {
		this.current.reverse().eventCallback('onReverseComplete', () => {
			onReverseComplete();
			this.index = onNext(this.index);
			this.current = this.animations[this.index];
			this.current.play();
		});
	}

	refresh(timeline: (() => gsap.core.Timeline)[]): void {
		this.animations = timeline.map((func) => {
			if (!func) return;
			return func();
		});
		this.current = this.animations[this.index];
	}
}
