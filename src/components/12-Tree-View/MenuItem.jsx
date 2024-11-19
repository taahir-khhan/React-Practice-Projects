import React, { useState } from "react";
import MenuList from "./MenuList";

function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const handleToggle = (currentLabel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [currentLabel]: !displayCurrentChildren[currentLabel],
    });
  };

  console.log(displayCurrentChildren);

  return (
    <li className="ml-8 mb-4">
      <div className="flex gap-5 mb-4">
        <p className="mb-2">{item.label}</p>
        {item && item.children && item.children.length ? (
          <span
            className="cursor-pointer text-2xl"
            onClick={() => handleToggle(item.label)}
          >
            {displayCurrentChildren[item.label] ? "-" : "+"}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}

export default MenuItem;
