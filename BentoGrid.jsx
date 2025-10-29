import React, { useState, useEffect } from 'react';

/**
 * A React functional component that arranges its children in an animated bento grid.
 * On initial load, each grid item fades in and scales up with a staggered effect.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The child elements to be arranged in the grid. Each child should have Tailwind CSS classes defining its grid span (e.g., 'col-span-2', 'row-span-2').
 * @param {string} [props.className] - Optional additional classes for the grid container.
 * @returns {JSX.Element}
 */
const BentoGrid = ({ children, className }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set a timeout to change the mount state. This delay ensures that
    // the initial (pre-animation) state is rendered before the animation starts.
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100); // A short delay is enough to trigger the transition on load

    // Cleanup the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  // An array of delay utility classes from Tailwind CSS.
  // We will cycle through these for a staggered effect.
  const delayClasses = [
    'delay-0',
    'delay-100',
    'delay-200',
    'delay-300',
    'delay-500',
    'delay-700',
  ];

  return (
    <div
      className={`grid grid-cols-3 auto-rows-[150px] gap-4 ${className || ''}`}>
      {React.Children.map(children, (child, index) => {
        // Each child is wrapped in a div that handles the animation.
        // The child's original className (for layout) is passed to this wrapper.
        if (!React.isValidElement(child)) {
          return child;
        }

        const delayClass = delayClasses[index % delayClasses.length];

        const animationClasses = `transition-all duration-500 ease-in-out ${delayClass} ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`;

        const combinedClassName = `${child.props.className || ''} ${animationClasses}`;

        // We clone the child to apply the new combined classes.
        // This is a more robust way to handle it than wrapping in an extra div
        // that might break some flex/grid layouts.
        // However, the brief specifically asks to wrap the child in a div,
        // so we will follow that pattern by extracting the child's content.

        return (
          <div className={combinedClassName}>
            {child.props.children}
          </div>
        );
      })}
    </div>
  );
};

export default BentoGrid;
