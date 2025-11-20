import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form, Input, Space, message } from "antd";

const ReqResUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [form] = Form.useForm();

  const API_URL = "https://reqres.in/api/users";

  const fetchUsers = async (page = 1) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}?page=${page}`);
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      message.error("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const createUser = async (userData) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();

      // ReqRes doesn't actually create the user, so we simulate it
      const newUser = {
        id: Date.now(), // Temporary ID
        email: userData.email,
        first_name: userData.name.split(" ")[0],
        last_name: userData.name.split(" ")[1] || "",
        avatar: `https://i.pravatar.cc/150?u=${Date.now()}`,
      };

      setUsers((prev) => [...prev, newUser]);
      message.success("User created successfully!");
    } catch (error) {
      message.error("Failed to create user");
    }
  };

  const updateUser = async (id, userData) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();

      // Update local state
      setUsers((prev) =>
        prev.map((user) => (user.id === id ? { ...user, ...userData } : user))
      );
      message.success("User updated successfully!");
    } catch (error) {
      message.error("Failed to update user");
    }
  };

  const deleteUser = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      setUsers((prev) => prev.filter((user) => user.id !== id));
      message.success("User deleted successfully!");
    } catch (error) {
      message.error("Failed to delete user");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const columns = [
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (avatar) => (
        <img
          src={avatar}
          alt="avatar"
          style={{ width: 50, borderRadius: "50%" }}
        />
      ),
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "First Name",
      dataIndex: "first_name",
      key: "first_name",
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      key: "last_name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button onClick={() => handleEdit(record)}>Edit</Button>
          <Button danger onClick={() => deleteUser(record.id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const handleEdit = (user) => {
    setEditingUser(user);
    form.setFieldsValue({
      name: `${user.first_name} ${user.last_name}`,
      email: user.email,
    });
    setIsModalOpen(true);
  };

  const handleSubmit = (values) => {
    if (editingUser) {
      const [first_name, last_name] = values.name.split(" ");
      updateUser(editingUser.id, {
        first_name,
        last_name,
        email: values.email,
      });
    } else {
      createUser(values);
    }
    setIsModalOpen(false);
    form.resetFields();
  };

  return (
    <div style={{ padding: 24 }}>
      <Button
        type="primary"
        onClick={() => {
          setEditingUser(null);
          form.resetFields();
          setIsModalOpen(true);
        }}
        style={{ marginBottom: 16 }}
      >
        Add User
      </Button>

      <Table
        columns={columns}
        dataSource={users}
        rowKey="id"
        loading={loading}
        pagination={{ pageSize: 6 }}
      />

      <Modal
        title={editingUser ? "Edit User" : "Add User"}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={() => form.submit()}
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input email!" },
              { type: "email", message: "Please enter valid email!" },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ReqResUsers;
