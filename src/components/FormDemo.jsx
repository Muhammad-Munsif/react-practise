import React from "react";
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  InputNumber,
  Switch,
} from "antd";

const { Option } = Select;
const { TextArea } = Input;

const FormDemo = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form values:", values);
  };

  return (
    <Form
      form={form}
      layout="horizantal"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      className=""
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input placeholder="Enter username" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please input your email!" },
          { type: "email", message: "Please enter a valid email!" },
        ]}
      >
        <Input placeholder="Enter email" />
      </Form.Item>

      <Form.Item label="Gender" name="gender">
        <Select placeholder="Select gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Birth Date" name="birthDate">
        <DatePicker style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item label="Age" name="age">
        <InputNumber min={1} max={100} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <TextArea rows={4} placeholder="Enter description" />
      </Form.Item>

      <Form.Item label="Subscribe" name="subscribe" valuePropName="checked">
        <Switch className="bg-blue-600 " />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormDemo;
