import React, { useState } from "react";
import { Tabs } from "antd";

import TopTabs from "./TopTabs";
import type { IData } from "./types";

const LeftTabs = ({ data }: { data: IData[] }) => {
  const initialItems = data.map((item) => {
    return {
      label: item.name,
      children: <TopTabs data={item.technique} hideAdd={true}/>,
      key: item.id,
    };
  });
  const [activeKey, setActiveKey] = useState(initialItems[0].key);

  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey);
  };

  return (
    <Tabs
      tabPosition="left"
      onChange={onChange}
      activeKey={activeKey}
      items={initialItems}
    />
  );
};

export default LeftTabs;
