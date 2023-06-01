import { iFormOverallRating } from "../../types";
import type { FormSchemaModel } from "/@/components/Form/src/types/form";

export const dataConfig = (): FormSchemaModel<iFormOverallRating>[] => [
  {
    field: "overallRating",
    label: "Đánh giá tổng quan",
    component: "InputTextArea",
    colProps: {
      xl: 24,
    },
  },
];
