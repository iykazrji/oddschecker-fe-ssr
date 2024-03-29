import React from "react";
import { withRouter } from "next/router";

// typically you want to use `next/link` for this usecase
// but this example shows how you can also access the router
// using the withRouter utility.

const ActiveLink = ({ children, router, href }) => {
  const style = {
    marginRight: 10,
    color: "inherit"
  };

  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      style={style}
      className={router.pathname === href ? "active" : null}>
      {children}
    </a>
  );
};

export default withRouter(ActiveLink);
