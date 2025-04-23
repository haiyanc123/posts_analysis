import React, { useState } from 'react';
import { Button, Input, DatePicker, notification, Row, Col } from 'antd';

function RepostContainer() {
  const [formData, setFormData] = useState({
    postTime: "",
    postUserName: "",
    postSocialMedia: "",
    repostTime: "",
    repostUserName: "",
    repostSocialMedia: "",
  });

  const handleChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here
    console.log("Repost submitted:", formData);
    notification.success({
      message: 'Repost Successful!',
      description: 'Your repost details have been successfully saved.',
    });
  };

  console.log("formData", formData)
  return (
    <div className="repost-container">
      <h2>Repost Information</h2>
      <form onSubmit={handleSubmit}>
        <Row gutter={16}>
          <Col span={12}>
            <label>Post Time:</label>
            <DatePicker
              name="postTime"
              value={formData.post_time}
              onChange={(value) => setFormData({ ...formData, repo_time: value })}
              style={{ width: '100%' }}
            />
          </Col>
          <Col span={12}>
            <label>Post Username:</label>
            <Input
              type="text"
              name="postUserName"
              value={formData.post_username}
              onChange={handleChangeInput}
              placeholder="Enter post username"
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <label>Post Social Media:</label>
            <Input
              type="text"
              name="postSocialMedia"
              value={formData.post_social_media}
              onChange={handleChangeInput}
              placeholder="Enter social media"
            />
          </Col>
          <Col span={12}>
            <label>Repost Time:</label>
            <DatePicker
              name="repostTime"
              value={formData.repo_time}
              onChange={(value) => setFormData({ ...formData, post_time: value })}
              style={{ width: '100%' }}
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <label>Repost Username:</label>
            <Input
              type="text"
              name="repostUsername"
              value={formData.repo_username}
              onChange={handleChangeInput}
              placeholder="Enter repost username"
            />
          </Col>
          <Col span={12}>
            <label>Repost Social Media:</label>
            <Input
              type="text"
              name="repostSocialMedia"
              value={formData.repo_social_media}
              onChange={handleChangeInput}
              placeholder="Enter social media"
            />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit" style={{ marginTop: '16px' }}>
          Submit Repost
        </Button>
      </form>
    </div>
  );
}

export default RepostContainer;
