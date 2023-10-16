import React from 'react'

   const menuData = [
     { title: "Link1", href: "#1", active: true },
     { title: "Link2", href: "#2" },
     { title: "Link3", href: "#3" },
     { title: "Link4", href: "#4", disabled: true },
   ]
export const Navigation = () => {
  const result = menuData.map((el) => (
    <a className={`nav-link ${el.active ? "active" : ''} ${el.disabled ? "disabled": ''}`} href={el.href}>
      {el.title}
    </a>
  ));
  return (
    <nav>{result}</nav>
  )
}
