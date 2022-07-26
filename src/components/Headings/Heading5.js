import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Heading5 = () => {
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
      <h3 ref={headerText}>ABC 567</h3>
      <p>
        We are the best AR <br /> development company <br /> in the world
      </p>

      <footer>
        <p>View Case Study &rarr;</p>
        <p>S K I P</p>
      </footer>
    </div>
  );
};

export default Heading5;
