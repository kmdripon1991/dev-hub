import React from "react";

const Blog = () => {
  return (
    <div className="my-container space-y-8 mb-5">
      <div className="space-y-3">
        <h1 className="text-2xl font-bold">
          When you should to use Context Api?
        </h1>
        <p className="text-gray-500">
          Sometimes in React, when you have components that are nested deeply
          and need access to certain data or functions, it can be a hassle to
          pass props down manually at every level. That's where the Context API
          comes in handy. It allows you to pass data through the component tree
          without the need for manual prop passing. This is particularly useful
          for global state management, where you need to share state between
          multiple components.
        </p>
      </div>
      <div className="space-y-3">
        <h1 className="text-2xl font-bold">What is a custom hook?</h1>
        <p className="text-gray-500">
          Hooks are a reuseable function. If you have component logic that
          requires usage across multiple components, we can abstract that logic
          into a custom Hook. Its start with 'use'. Example: useFetch,
          useLocalStorage, useToggle etc.
        </p>
      </div>
      <div className="space-y-3">
        <h1 className="text-2xl font-bold">What is useRef?</h1>
        <p className="text-gray-500">
          useRef is a React hook. The useRef Hook allows you to persist values
          between renders. It can be utilized to preserve a mutable value
          without triggering a re-render upon updates.cIts also used for access
          a DOM element directly.
        </p>
      </div>
      <div className="space-y-3">
        <h1 className="text-2xl font-bold">What is useMemo?</h1>
        <p className="text-gray-500">
          The React useMemo Hook returns a memoized value. This hook only runs
          when one of its dependencies update.
        </p>
      </div>
    </div>
  );
};

export default Blog;
