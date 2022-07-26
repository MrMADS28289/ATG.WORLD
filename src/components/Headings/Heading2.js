import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Heading2 = () => {
  const headerText = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerText.current,
      {
        rotateX: 180,
      },
      {
        rotateX: 0,
        duration: 1,
      }
    );
  }, []);

  return (
    <div className="heading">
      <h3
        className="mb-3"
        ref={headerText}
      >ABC 123</h3>

      <p>
        We are the best web development <br /> company in the world
      </p>

      <footer>
        <p>Coming Soon</p>
        <p>S K I P</p>
      </footer>
    </div>
  );
};

export default Heading2;
