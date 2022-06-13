import React from "react";

function Footer() {
  let foot = {
    position: "relative",
    top: "10vh",
    width: "100%"
  }
  return (
    <footer className="bg-dark text-light py-3 my-3" style={foot}>
      <p className="text-center">Copyright &copy; MyTodoslist.com</p>
    </footer>
  );
}

export default Footer;
