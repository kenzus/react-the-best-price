import React from "react";

export default function Header(props) {
  const { countCartItems } = props;
  return (
    <header className="row block center">
      <div>
        <a href="#/">
          <h1>The Best Price</h1>
        </a>
      </div>
      <div className="side">
<h3>
<a href="#/cart">
          Cart{" "}
          {countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ) : (
            ""
          )}
        </a>
  </h3>{" "}
        <h3>
        <a href="#/signin">Sign In</a>
        </h3>
      </div>
    </header>
  );
}
