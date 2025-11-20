import React, { useState, useEffect } from 'react';
import { Table, Input, Select, Button, Space, Avatar, Card } from 'antd';
import { SearchOutlined, ReloadOutlined } from '@ant-design/icons';

const { Search } = Input;
const { Option } = Select;

const RandomUsers = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [genderFilter, setGenderFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const fetchUsers = async (count = 10) => {
    setLoading(true);
    try {
      const response = await fetch(`https://randomuser.me/api/?results=${count}`);
      const data = await response.json();
      const formattedUsers = data.results.map(user => ({
        id: user.login.uuid,
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        phone: user.phone,
        gender: user.gender,
        location: `${user.location.city}, ${user.location.country}`,
        avatar: user.picture.medium,
        age: user.dob.age,
        registered: new Date(user.registered.date).toLocaleDateString(),
      }));
      setUsers(formattedUsers);
      setFilteredUsers(formattedUsers);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    let results = users;
    
    // Apply gender filter
    if (genderFilter !== 'all') {
      results = results.filter(user => user.gender === genderFilter);
    }
    
    // Apply search filter
    if (searchTerm) {
      results = results.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredUsers(results);
  }, [users, genderFilter, searchTerm]);

  const columns = [
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (avatar) => <Avatar src={avatar} size="large" />,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      render: (gender) => gender.charAt(0).toUpperCase() + gender.slice(1),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Registered',
      dataIndex: 'registered',
      key: 'registered',
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <Card>
        <Space style={{ marginBottom: 16, width: '100%', justifyContent: 'space-between' }}>
          <Space>
            <Search
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: 300 }}
              prefix={<SearchOutlined />}
            />
            <Select
              value={genderFilter}
              onChange={setGenderFilter}
              style={{ width: 120 }}
            >
              <Option value="all">All Genders</Option>
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>
          </Space>
          <Button 
            icon={<ReloadOutlined />} 
            onClick={() => fetchUsers(20)}
            loading={loading}
          >
            Refresh Users
          </Button>
        </Space>

        <Table
          columns={columns}
          dataSource={filteredUsers}
          rowKey="id"
          loading={loading}
          pagination={{ pageSize: 10 }}
          scroll={{ x: 800 }}
        />
      </Card>
    </div>
  );
};

export default RandomUsers;