import { Input } from "antd";

import { Recordable } from "/@/utils";

function InputTextArea(attrs: Recordable) {
  const getAtrr = () => {
    return {
      ...attrs,
    };
  };
  return <Input.TextArea {...getAtrr()} autoSize />;
}
export default InputTextArea;
