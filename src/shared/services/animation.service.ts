import gsap, {Power1, Power3, TweenLite} from 'gsap'
import anime from 'animejs';
export class AnimationService {
  static gsap = gsap;
  static anime = anime;
  static tweenLite = TweenLite;
  static timeLine = gsap.timeline;
  static easing = {
    power1: Power1,
    power3: Power3
  };
}
