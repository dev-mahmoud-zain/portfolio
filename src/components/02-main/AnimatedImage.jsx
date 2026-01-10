import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "./animated-2.json";

export default function AnimatedImage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData,
    });

    return () => animation.destroy();
  }, []);

  return <div className="lottie-container" ref={containerRef} />;
}
