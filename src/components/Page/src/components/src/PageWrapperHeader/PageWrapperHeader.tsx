import { Card } from "antd";

import "./index.css";

function PageWrapperHeader({ title }: { title: string }) {
  return (
    <Card className="page-wrapper-header">
      <span> {title} </span>
    </Card>
  );
}
export default PageWrapperHeader;
