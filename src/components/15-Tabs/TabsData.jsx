import React from "react";
import Tabs from "./Tabs";

function TabsData() {
  const tabs = [
    {
      label: "Tab-1",
      content: <div>Content for Tab-1</div>,
    },
    {
      label: "Tab-2",
      content: <div>This is the content of Tab-2</div>,
    },
    {
      label: "Tab-3",
      content: <div>Here goes the content of Tab-3</div>,
    },
  ];
  return <Tabs tabsContent={tabs} />;
}

export default TabsData;
