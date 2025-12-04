import { Button, Space } from "antd";
import { DownloadOutlined, SearchOutlined } from "@ant-design/icons";

const ButtonDemo = () => {
  return (
    <Space wrap>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
      <Button type="primary" icon={<DownloadOutlined />}>
      <Button type="primary" icon={<DownloadOutlined />}>
      <Button type="primary" icon={<DownloadOutlined />}>
      <Button type="primary" icon={<DownloadOutlined />}>
        Download
      </Button>
      <Button icon={<SearchOutlined />}>Search</Button>
      <Button type="primary" danger>
        Danger
      </Button>
    </Space>
  );
};

export default ButtonDemo;
