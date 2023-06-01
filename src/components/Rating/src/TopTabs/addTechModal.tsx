import React, { useState } from "react";
import { Button, Modal } from "antd";
import { t } from "i18next";

interface IModal {
  isOpen: boolean;
  onCancel: () => void;
  onOk: () => void;
}

const AddTechModal = (props: IModal) => {
  const { isOpen, onCancel, onOk } = props;

  return (
    <>
      <Modal
        title={t("common.add_text", {domain: t('domain.technique.technique')})}
        open={isOpen}
        onOk={onOk}
        onCancel={onCancel}
        okText={t("common.add_text")}
        cancelText={t("common.cancel_text")}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default AddTechModal;
