# Project Title: React Animated Bento Grid

## Summary

This project provides a single, standalone React functional component called `BentoGrid`. It is designed to arrange child elements into an asymmetrical "bento grid" layout. The component uses Tailwind CSS for styling and animations, featuring a staggered fade-in and scale-up effect for each grid item on initial load.

## Setup

This is a component, not a full application. To use it, you need an existing React project that is configured with Tailwind CSS.

1.  **Project Setup**: Ensure your React project is running and Tailwind CSS is properly configured. If you are using Tailwind JIT, make sure your `tailwind.config.js` is set up to scan your component files.

2.  **Add Component**: Copy the `BentoGrid.jsx` file into your project's components directory (e.g., `src/components/`).

3.  **Usage**: Import and use the `BentoGrid` component in your application. Pass the grid items as children. Each child must have its own layout classes (like `col-span-2`, `row-span-1`, `bg-gray-200`, etc.).

Here is a basic usage example:

```jsx
// In your App.js or other component file

import BentoGrid from './components/BentoGrid';

function MyPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">My Bento Grid</h1>
      <BentoGrid className="max-w-4xl mx-auto">
        {/* Each child element defines its own position and span */}
        <div className="col-span-2 row-span-2 bg-blue-200 p-6 rounded-lg shadow-md flex flex-col justify-center">
          <h2 className="font-bold text-xl">Feature One</h2>
          <p>This item spans two columns and two rows.</p>
        </div>
        <div className="bg-pink-200 p-6 rounded-lg shadow-md flex items-center justify-center">
          <h2 className="font-bold text-xl">Feature Two</h2>
        </div>
        <div className="bg-green-200 p-6 rounded-lg shadow-md flex items-center justify-center">
          <h2 className="font-bold text-xl">Feature Three</h2>
        </div>
         <div className="col-span-1 bg-yellow-200 p-6 rounded-lg shadow-md flex items-center justify-center">
          <h2 className="font-bold text-xl">Feature Four</h2>
        </div>
        <div className="col-span-2 bg-purple-200 p-6 rounded-lg shadow-md flex items-center justify-center">
          <h2 className="font-bold text-xl">Feature Five</h2>
        </div>
      </BentoGrid>
    </div>
  );
}

export default MyPage;

```

## Code Explanation

-   **`BentoGrid.jsx`**: This file contains the core `BentoGrid` component.
    -   It acts as a container that applies a CSS grid layout.
    -   It uses `useState` (`isMounted`) and `useEffect` with a `setTimeout` to reliably trigger CSS transitions on component load.
    -   It iterates over its `children` using `React.Children.map`.
    -   For each child, it creates a wrapper `div`. This wrapper inherits the layout `className` from the original child (`col-span-*`, `row-span-*`) and adds animation classes.
    -   Animation classes include `transition-all`, `duration-500`, and conditional `opacity` and `scale` styles based on the `isMounted` state.
    -   A staggered effect is created by applying a different `delay-*` utility class to each child based on its index.

## License

This project is licensed under the MIT License.