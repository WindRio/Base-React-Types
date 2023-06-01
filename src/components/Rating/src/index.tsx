import React, { useEffect } from "react";
import { Form, Button, Space, Card } from "antd";

import { MODE } from "/@/utils";

import LeftTabs from "./leftTabs";
import "./style.css";
import { data } from "./mockup";
import { FormRating } from "./FormRating";
import { t } from "i18next";

const Rating = () => {
  const [form] = Form.useForm();

  const handleComplete = async () => {
    try {
      // await form.validateFields()
      const dataForm = await form.getFieldsValue();
      // call api
    } catch (error) {}
  };

  const handleFetchInterview = async () => {
    try {
      // call api theo id
      form.setFieldValue("overallRating", data.overallRating);
    } catch (error) {
      // error
    }
  };

  useEffect(() => {
    handleFetchInterview();
  }, []);
  return (
    <div className="rating-container">
      <LeftTabs data={data.dataInterview} />
      <Card
        className="form-rating"
        actions={[
          <Button key="goBack">{t("common.back")}</Button>,
          <Button key="complete" type="primary" onClick={handleComplete}>
            Hoàn thành đánh giá
          </Button>,
        ]}
      >
        <FormRating form={form} mode={MODE.VIEW} />
      </Card>
    </div>
  );
};

export default Rating;
