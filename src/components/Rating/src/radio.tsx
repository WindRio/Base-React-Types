import React, { useState } from "react";
import { Radio, RadioChangeEvent } from "antd";

interface RadioProps {
  data: {
    id: string;
    name: string;
  }[];
  onRating: Function;
}

export default function RadioComponent(props: RadioProps) {
  const { data, onRating } = props;

  const [radioValue, setRadioValue] = useState("");

  const onChangeRadio = (e: RadioChangeEvent) => {
    setRadioValue(e.target.value);
    onRating(e.target.value);
  };
  return (
    <Radio.Group
      onChange={onChangeRadio}
      value={radioValue}
      style={{ paddingLeft: "5%" }}
    >
      {data.map((item) => (
        <Radio value={item.id} key={item.id}>
          {item.name}
        </Radio>
      ))}
    </Radio.Group>
  );
}
