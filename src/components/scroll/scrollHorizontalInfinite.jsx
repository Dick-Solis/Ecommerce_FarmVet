// import React, { useEffect } from 'react';
// import styled from '@emotion/styled';

// const ScrollerContainer = styled.div`
//   width: 900px;
//   overflow: hidden;

//   .scroller__inner {
//     display: flex;
//     gap: 1rem;
//     animation: scroll ${props => props.animationDuration || '40s'} linear infinite;
//   }

//   @keyframes scroll {
//     to {
//       transform: translateX(calc(-100% - 1rem));
//     }
//   }
// `;

// const ScrollAnimation = ({
//   animated,
//   direction = 'left',
//   speed = 'slow',
//   animationDuration,
//   children
// }) => {
//   useEffect(() => {
//     if (animated && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
//       addAnimation();
//     }
//   }, [animated]);

//   const addAnimation = () => {
//     const scrollerInner = document.querySelector('.scroller__inner');
//     const scrollerContent = Array.from(scrollerInner.children);

//     scrollerContent.forEach((item) => {
//       const duplicatedItem = item.cloneNode(true);
//       duplicatedItem.setAttribute('aria-hidden', true);
//       scrollerInner.appendChild(duplicatedItem);
//     });
//   };

//   return (
//     <ScrollerContainer animated={animated} animationDuration={animationDuration}>
//       <div className="scroller__inner">
//         {children}
//       </div>
//     </ScrollerContainer>
//   );
// };

// export default ScrollAnimation;


import './scrollHorizontalInfinite.css'

export function HorizontalInfinite({ children }) {

  const scrollers = document.querySelectorAll(".scroller");

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }

  return (
    <div className="scroller" data-direction="left" data-speed="slow">
      <div className="scroller__inner">
        {children}
      </div>
    </div>
  )
}