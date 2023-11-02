import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Section = ({ chidren }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <section
      className="flex h-screen w-full snap-start items-center justify-center bg-slate-900 text-gray-50"
      ref={ref}
    >
      <div
        style={{
          transform: isInView ? "none" : "translateY(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s ease",
        }}
      >
        {chidren}
      </div>
    </section>
  );
};

export default Section;
