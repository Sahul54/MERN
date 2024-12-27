import React, { useState, useEffect, useRef } from 'react';

const ResizableDiv = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const resizableRef = useRef(null); // Reference to the div

  // Update window size dynamically using resize event
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Attach event listener on mount
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [size, setSize] = useState({ width: windowSize.width / 2, height: windowSize.height / 2 });

  const isResizing = useRef(false); // Flag to track if resizing is happening

  useEffect(() => {
    // Function to handle mouse move event when resizing
    const handleMouseMove = (e) => {
      if (isResizing.current) {
        const newWidth = e.clientX;
        const newHeight = e.clientY;
        setSize({ width: newWidth, height: newHeight });
      }
    };

    // Function to handle mouse up event to stop resizing
    const handleMouseUp = () => {
      isResizing.current = false;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    // Function to handle mouse down event to start resizing
    const handleMouseDown = () => {
      isResizing.current = true;
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };

    // Add event listener to the div for mouse down
    const resizableElement = resizableRef.current;
    resizableElement.addEventListener('mousedown', handleMouseDown);

    // Clean up event listener when component unmounts
    return () => {
      resizableElement.removeEventListener('mousedown', handleMouseDown);
    };
  }, []); // Empty dependency array to ensure this effect runs only once

  return (
    <div>
      <div
        ref={resizableRef}
        style={{
          width: size.width,
          height: size.height,
          border: '2px solid black',
          position: 'relative',
          backgroundColor: 'lightblue',
          margin: '10px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '10px',
            height: '10px',
            backgroundColor: 'black',
            cursor: 'se-resize',
          }}
        ></div>
        <p>Resize Me!</p>
        <p>Width: {size.width}px</p>
        <p>Height: {size.height}px</p>
      </div>
      <div>
        <h3>Window Size:</h3>
        <p>Width: {windowSize.width}px</p>
        <p>Height: {windowSize.height}px</p>
      </div>
    </div>
  );
};

export default ResizableDiv;
