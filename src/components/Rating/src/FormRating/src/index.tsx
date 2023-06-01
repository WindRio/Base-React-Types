import React from "react";
import { FormInstance } from "antd";

import { BasicForm } from "/@/components/Form";
import { MODE } from "/@/utils";
import { useComponentRegister } from "/@/components/Form/src/hook/useComponentRegister";

import { dataConfig } from "./data.config";
import InputTextArea from "./inputTextArea";

export default function FormRating({
  mode,
  form,
}: {
  mode: MODE;
  form: FormInstance;
}) {
  useComponentRegister("InputTextArea", <InputTextArea />);
  return (
    <div>
      <BasicForm dataForm={dataConfig()} formSchema={form} mode={mode} />
    </div>
  );
}
