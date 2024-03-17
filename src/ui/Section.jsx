import { useInView } from "framer-motion";
import React, { useContext, useEffect, useRef } from "react";
import { ProjectContext } from "../context/ProjectContext";

const Section = ({ chidren, id }) => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      console.log(ref.current.id);
    }
  }, [ref]);

  return (
    <section
      className="flex h-screen w-full items-center justify-center text-gray-50"
      id={id}
      ref={ref}
    >
      {chidren}
    </section>
  );
};

export default Section;
