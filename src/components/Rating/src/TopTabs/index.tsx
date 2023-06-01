import React, { useRef, useState } from "react";
import { Tabs } from "antd";
import CollapseComponent from "../Collapse";
import type { ITopTabsProps } from "../types";
import { useModal } from "/@/utils/hook";
import AddTechModal from "./addTechModal";

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const TopTabs = (props: ITopTabsProps) => {
  const { data, hideAdd } = props;
  const { isVisible, hideModal, showModal } = useModal();
  const initialItems = data.map((item) => {
    return {
      label: item.name,
      children: <CollapseComponent />,
      key: item.id,
    };
  });
  const [activeKey, setActiveKey] = useState(initialItems[0].key);
  const [items, setItems] = useState(initialItems);
  const newTabIndex = useRef(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey);
  };

  const add = () => {
    const newActiveKey = `newTab${newTabIndex.current++}`;
    const newPanes = [...items];
    newPanes.push({
      label: "New Tab",
      children: <CollapseComponent />,
      key: newActiveKey,
    });
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey: TargetKey) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = items.filter((item) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const onEdit = (
    targetKey: React.MouseEvent | React.KeyboardEvent | string,
    action: "add" | "remove"
  ) => {
    if (action === "add") {
      showModal();
      // add();
    } else {
      remove(targetKey);
    }
  };

  const handleCancelModal = () => {
    hideModal();
  };
  const handleConfirmModal = () => {
    add();
    hideModal();
  };

  return (
    <>
      <AddTechModal
        isOpen={isVisible}
        onCancel={handleCancelModal}
        onOk={handleConfirmModal}
      />
      <Tabs
        hideAdd={false}
        type="editable-card"
        onChange={onChange}
        activeKey={activeKey}
        onEdit={onEdit}
        items={items}
      />
    </>
  );
};

export default TopTabs;
