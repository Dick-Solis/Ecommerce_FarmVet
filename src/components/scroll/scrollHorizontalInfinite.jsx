import './scrollHorizontalInfinite.css'
import { useEffect } from 'react';

function HorizontalInfinite({ children }) {
  // useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    //   addAnimation(scrollers);
    // }

  useEffect(()=>{
    addAnimation(scrollers);
  })

    function addAnimation(scrollers) {
      scrollers.forEach((scroller) => {
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scroller.setAttribute("data-animated", true);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
    console.log("que fue");
  // }, []);
  return (
    <div className="scroller" data-direction="left" data-speed="slow">
      <div className="scroller__inner">
        {children}
      </div>
    </div>
  );
}

export default HorizontalInfinite;
