import React from "react";
import MenuList from "./MenuList";

function TreeView({ menus = [] }) {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className=" bg-orange-500 w-[600px] h-auto text-white text-xl font-medium p-6 rounded-lg box-border">
        <MenuList list={menus} />
      </div>
    </div>
  );
}

export default TreeView;
