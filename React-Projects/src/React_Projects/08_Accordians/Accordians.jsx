import { useState } from "react";
import "./Accordians.css";

export const accordionData = [
  {
    title: "What Is HTML?",
    content: `The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.`,
  },
  {
    title: "What Is React?",
    content: `React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.`,
  },
  {
    title: "What Is Node.js?",
    content: `Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.`,
  },
  {
    title: "What Is Golang?",
    content: `Go is a statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. It is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency`,
  },
];

function AccordionCard({ title, content }) {
    const [isActive, setIsActive] = useState(false);
  return (
    <section className="accordion-card" key={Math.random()}>
      <div className="header" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        {/* Icon changes to "-" when isActive is true and "+" when isActive is false */}
        <p className="icon">{isActive ? "-" : "+"}</p>
      </div>
      <div className="content">
        {/* Display the content when is active is set to true */}
        {isActive && <p className="card-info">{content}</p>}
      </div>
    </section>
  );
}

const Accordians = () => {
  return (
    <div className="accordion">
      {accordionData.map(({ title, content }) => (
        <AccordionCard title={title} content={content} />
      ))}
    </div>
  );
};

export default Accordians;
