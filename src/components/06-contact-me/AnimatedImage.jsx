import { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function AnimatedImage({animationData , loop=true}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop,
      autoplay: true,
      animationData,
    });

    return () => animation.destroy();
  }, []);

  return <div className="lottie-container" ref={containerRef} />;
}