import React from "react"

function Footer() {
  return (
    <footer className="page-footer">
      <p>
        &copy;&nbsp;
        {new Date().getFullYear()}&nbsp;
        <span>SimplyRecipes</span> Built with &nbsp;
        <a href="https://www.gatsbyjs.com/">Gatsby</a>
      </p>
    </footer>
  )
}

export default Footer
