import React, { useState, useRef, useEffect } from 'react';

export default function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(
        entry => {
          if(entry.isIntersecting)
            setVisible(entry.isIntersecting)
        }
      );
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section-${props.children.type.name === 'Block2' ? 'left' : 'right'} ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}