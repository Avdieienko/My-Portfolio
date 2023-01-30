import { useState, useEffect } from "react";
import { useRef } from "react";

export function useIsVisible(ref) {
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      );
  
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }, [ref]);
  
    return isIntersecting;
  }

export function FadeUp(props) {
    const ref=useRef();
    const isVisible = useIsVisible(ref)
    return(
        <div className={`bottom_animation ${isVisible?"visible":""}`} ref={ref}>
            {props.children}
        </div>
    )
}

export function FadeLeft(props) {
    const ref=useRef();
    const isVisible = useIsVisible(ref)
    return(
        <div className={`left_animation ${isVisible?"visible":""}`} ref={ref}>
            {props.children}
        </div>
    )
}

