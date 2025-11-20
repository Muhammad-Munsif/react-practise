import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  Space,
  message,
  Card,
  Spin,
} from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

const ReqResUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [form] = Form.useForm();

  const API_URL = "https://reqres.in/api/users";

  // Fetch users from API
  const fetchUsers = async (page = 1) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}?page=${page}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Ensure data.data exists and is an array
      if (data && Array.isArray(data.data)) {
        setUsers(data.data);
      } else {
        setUsers([]); // Set empty array if no data
        message.warning("No user data found");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      message.error("Failed to fetch users");
      setUsers([]); // Ensure users is always an array
    } finally {
      setLoading(false);
    }
  };

  // Create user - Store locally since API doesn't persist
  const createUser = async (userData) => {
    try {
      // Simulate API call
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Create new user with proper data structure
      const nameParts = userData.name.split(" ");
      const first_name = nameParts[0] || userData.name;
      const last_name = nameParts.slice(1).join(" ") || "";

      const newUser = {
        id: Date.now(), // Use timestamp as temporary ID
        email: userData.email,
        first_name: first_name,
        last_name: last_name,
        avatar: `https://i.pravatar.cc/150?u=${Date.now()}`,
      };

      // Safely add to local state - ensure prev is always treated as array
      setUsers((prev) => {
        const previousUsers = Array.isArray(prev) ? prev : [];
        return [newUser, ...previousUsers];
      });

      message.success("User created successfully!");
      return true;
    } catch (error) {
      console.error("Error creating user:", error);
      message.error("Failed to create user");
      return false;
    }
  };

  // Update user
  const updateUser = async (id, userData) => {
    try {
      // Simulate API call
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Safely update local state
      setUsers((prev) => {
        const previousUsers = Array.isArray(prev) ? prev : [];
        return previousUsers.map((user) =>
          user.id === id ? { ...user, ...userData } : user
        );
      });

      message.success("User updated successfully!");
      return true;
    } catch (error) {
      console.error("Error updating user:", error);
      message.error("Failed to update user");
      return false;
    }
  };

  // Delete user
  const deleteUser = async (id) => {
    try {
      // Simulate API call
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Safely remove from local state
      setUsers((prev) => {
        const previousUsers = Array.isArray(prev) ? prev : [];
        return previousUsers.filter((user) => user.id !== id);
      });

      message.success("User deleted successfully!");
    } catch (error) {
      console.error("Error deleting user:", error);
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
          style={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      ),
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 80,
    },
    {
      title: "First Name",
      dataIndex: "first_name",
      key: "first_name",
      sorter: (a, b) => a.first_name?.localeCompare(b.first_name) || 0,
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      key: "last_name",
      sorter: (a, b) => a.last_name?.localeCompare(b.last_name) || 0,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Actions",
      key: "actions",
      width: 150,
      render: (_, record) => (
        <Space>
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          >
            Edit
          </Button>
          <Button
            type="link"
            danger
            icon={<DeleteOutlined />}
            onClick={() => deleteUser(record.id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const handleEdit = (user) => {
    setEditingUser(user);
    form.setFieldsValue({
      name: `${user.first_name || ""} ${user.last_name || ""}`.trim(),
      email: user.email || "",
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (values) => {
    try {
      let success = false;

      if (editingUser) {
        const nameParts = values.name.split(" ");
        const first_name = nameParts[0] || values.name;
        const last_name = nameParts.slice(1).join(" ") || "";

        success = await updateUser(editingUser.id, {
          first_name,
          last_name,
          email: values.email,
        });
      } else {
        success = await createUser(values);
      }

      if (success) {
        setIsModalOpen(false);
        setEditingUser(null);
        form.resetFields();
      }
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      message.error("Operation failed");
    }
  };

  const handleAddUser = () => {
    setEditingUser(null);
    form.resetFields();
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setEditingUser(null);
    form.resetFields();
  };

  return (
    <div style={{ padding: 24 }}>
      <Card
        title="User Management"
        extra={
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleAddUser}
          >
            Add User
          </Button>
        }
      >
        {loading ? (
          <div style={{ textAlign: "center", padding: "50px" }}>
            <Spin size="large" />
            <div style={{ marginTop: 16 }}>Loading users...</div>
          </div>
        ) : (
          <Table
            columns={columns}
            dataSource={users}
            rowKey="id"
            loading={loading}
            pagination={{
              pageSize: 6,
              showSizeChanger: false,
              showTotal: (total, range) =>
                `${range[0]}-${range[1]} of ${total} users`,
            }}
            scroll={{ x: 800 }}
            locale={{
              emptyText: "No users found",
            }}
          />
        )}
      </Card>

      <Modal
        title={editingUser ? "Edit User" : "Add New User"}
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={() => form.submit()}
        okText={editingUser ? "Update" : "Create"}
        cancelText="Cancel"
        destroyOnClose
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          autoComplete="off"
        >
          <Form.Item
            label="Full Name"
            name="name"
            rules={[
              { required: true, message: "Please input user's full name!" },
              { min: 2, message: "Name must be at least 2 characters!" },
            ]}
          >
            <Input placeholder="Enter first and last name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input email address!" },
              { type: "email", message: "Please enter a valid email address!" },
            ]}
          >
            <Input placeholder="Enter email address" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ReqResUsers;
