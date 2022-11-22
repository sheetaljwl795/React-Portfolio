import React from "react";

function Navbar({ currentPage, setCurrentPage }) {
  const pages = ["About", "Portfolio", "Contact", "Resume"];
  return (
    <div >
      <ul className="flex-row">
        {pages.map((page) => (
          <li
            className={
              currentPage === page ? "nav-item is-active" : "nav-item"
            }
            key={page}
          >
            <a
              href={"#" + page.toLowerCase()}

              onClick={() => setCurrentPage(page)}
              className={
                currentPage === page ? "nav-link active" : "nav-link"
              }
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
