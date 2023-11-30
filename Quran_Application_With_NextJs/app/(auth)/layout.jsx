import React from "react";

function Layout({ children }) {
  return (
    <div className="relative scroll-smooth max-w-screen-xl mx-auto min-h-screen pt-16">
      {children}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quae amet sunt placeat itaque minus quis officiis nobis? Dolor distinctio ipsam voluptas quasi, quaerat laborum saepe accusantium deserunt est illum?</p>
    </div>
  );
}

export default Layout;
