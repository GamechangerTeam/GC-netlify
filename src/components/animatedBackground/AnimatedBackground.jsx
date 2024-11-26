"use client"
import { useRef } from 'react'
import './AnimatedBackground.scss'
import Image from 'next/image';

function AnimatedBackground() {
  const elementsRef = useRef([]);

  const mainAnimationTime = 5;

  function getAnimationDelay(element) {
    const computedStyle = window.getComputedStyle(element);
    return computedStyle.animationDelay;
  }

  function restartAnimation() {
    elementsRef.current.forEach((element) => {
      const delay = getAnimationDelay(element);
      element.style.animation = 'none';
      void element.offsetWidth;
      element.style.animation = `fadeIn ${mainAnimationTime}s linear forwards`;
      element.style.animationDelay = delay;
    });
  }

  setInterval(restartAnimation, mainAnimationTime * 10000);
  return (
    <div className='animatedBg'>
      <Image loading="eager" priority={true} quality={100} fill className='picture-2' src="/images/animatedBg/bg-1.jpg" alt="animatedBg" />

      <Image loading='lazy' quality={100} fill className='picture-3 remove' ref={(el) => (elementsRef.current[0] = el)} src="/images/animatedBg/bg-2.jpg" alt="animatedBg"/>
      <Image loading='lazy' quality={100} fill className='picture-4 remove' ref={(el) => (elementsRef.current[1] = el)} src="/images/animatedBg/bg-3.jpg" alt="animatedBg"/>
      <Image loading='lazy' quality={100} fill className='picture-5 remove' ref={(el) => (elementsRef.current[2] = el)} src="/images/animatedBg/bg-4.jpg" alt="animatedBg"/>
      <Image loading='lazy' quality={100} fill className='picture-6 remove' ref={(el) => (elementsRef.current[3] = el)} src="/images/animatedBg/bg-5.jpg" alt="animatedBg"/>
      <Image loading='lazy' quality={100} fill className='picture-7 remove' ref={(el) => (elementsRef.current[4] = el)} src="/images/animatedBg/bg-6.jpg" alt="animatedBg"/>
      <Image loading='lazy' quality={100} fill className='picture-8 remove' ref={(el) => (elementsRef.current[5] = el)} src="/images/animatedBg/bg-7.jpg" alt="animatedBg"/>
      <Image loading='lazy' quality={100} fill className='picture-9 remove' ref={(el) => (elementsRef.current[6] = el)} src="/images/animatedBg/bg-8.jpg" alt="animatedBg"/>
      <Image loading='lazy' quality={100} fill className='picture-10 remove' ref={(el) => (elementsRef.current[7] = el)} src="/images/animatedBg/bg-9.jpg" alt="animatedBg"/>
      <Image loading='lazy' quality={100} fill className='picture-11 remove' ref={(el) => (elementsRef.current[8] = el)} src="/images/animatedBg/bg-10.jpg" alt="animatedBg" />
      <Image loading='lazy' quality={100} fill className='picture-12 remove' ref={(el) => (elementsRef.current[9] = el)} src="/images/animatedBg/bg-1.jpg" alt="animatedBg"/>
    </div>
  )
}

export default AnimatedBackground
