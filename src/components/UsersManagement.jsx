import React, { useState, useEffect } from "react";
import { Table, Button, Space, message, Card, Avatar } from "antd";
import { UserOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_URL = "https://jsonplaceholder.typicode.com/users";

  // Fetch users
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      message.error("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  // Create user
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
      setUsers((prev) => [...prev, { ...userData, id: data.id }]);
      message.success("User created successfully!");
    } catch (error) {
      message.error("Failed to create user");
    }
  };

  // Update user
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
      setUsers((prev) => prev.map((user) => (user.id === id ? data : user)));
      message.success("User updated successfully!");
    } catch (error) {
      message.error("Failed to update user");
    }
  };

  // Delete user
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
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 80,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name, record) => (
        <Space>
          <Avatar icon={<UserOutlined />} />
          {name}
        </Space>
      ),
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Website",
      dataIndex: "website",
      key: "website",
      render: (website) => (
        <a href={`http://${website}`} target="_blank" rel="noopener noreferrer">
          {website}
        </a>
      ),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (address) => (
        <span>
          {address.street}, {address.city}
        </span>
      ),
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
      render: (company) => company.name,
    },
    {
      title: "Actions",
      key: "actions",
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
    const updatedUser = {
      ...user,
      name: `${user.name} (Updated)`,
    };
    updateUser(user.id, updatedUser);
  };

  const handleAddUser = () => {
    const newUser = {
      name: "New User",
      username: "newuser",
      email: "newuser@example.com",
      phone: "1-770-736-8031",
      website: "newuser.org",
      address: {
        street: "New Street",
        city: "New City",
      },
      company: {
        name: "New Company",
      },
    };
    createUser(newUser);
  };

  return (
    <div style={{ padding: 24 }}>
      <Card
        title="User Management"
        extra={
          <Button type="primary" onClick={handleAddUser}>
            Add User
          </Button>
        }
      >
        <Table
          columns={columns}
          dataSource={users}
          rowKey="id"
          loading={loading}
          pagination={{ pageSize: 5 }}
        />
      </Card>
    </div>
  );
};

export default UserManagement;
