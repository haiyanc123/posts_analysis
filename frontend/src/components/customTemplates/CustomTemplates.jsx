import { useState } from "react";
import PropTypes from "prop-types";
import { Col, Flex, Input, Radio, Row } from "antd";

function CustomTemplates({ mapper }) {
  const renderComponents = (mapper) => {
    //Using Switch statement to dynamic load UI element
    const element = mapper.map((item) => {
      switch (item.type) {
        case "input":
          return (
            <Col key={item.label}>
              <Flex>
                <label>{item.label}: </label>
                <Input
                  value={item.value}
                  onChange={item.onChange}
                  name={item.name}
                />
              </Flex>
            </Col>
          );
        case "radio":
          return (
            <Col key={item.label}>
              <Flex align="center">
                <label>{item.label}: </label>
                <Radio.Group options={item.options} onChange={item.onChange} />
              </Flex>
            </Col>
          );
      }
    });

    return element;
  };

  return (
    <>
      <Row gutter={[24, 24]}>
        <Flex>{renderComponents(mapper)}</Flex>
      </Row>
    </>
  );
}

CustomTemplates.prototype = {
  mapper: PropTypes.arrayOf({}),
};

CustomTemplates.defaultProps = {
  mapper: [],
};

export default CustomTemplates;
