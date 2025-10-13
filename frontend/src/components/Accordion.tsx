import React, { useState } from "react";

interface AccordionProps {
  number: number;
  question: string;
  parent?: string | null;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ number, question, parent = null, children }) => {
  const headingId = `heading${number}`;
  const collapseId = `collapse${number}`;
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="accordion-item border border-gray-300 rounded-lg mb-3">
      <h2 className="accordion-header" id={headingId}>
        <button
          className={`accordion-button w-full text-left font-semibold py-3 px-4 ${
            isOpen ? "" : "collapsed"
          }`}
          type="button"
          onClick={toggleAccordion}
          aria-expanded={isOpen}
          aria-controls={collapseId}
        >
          {number}. {question}
        </button>
      </h2>

      <div
        id={collapseId}
        className={`accordion-collapse transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        }`}
        aria-labelledby={headingId}
        data-bs-parent={parent ? `#${parent}` : undefined}
      >
        <div className="accordion-body p-4 text-gray-700">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;