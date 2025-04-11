import { Button, Flex } from "antd";
import React from "react";

function UploadFile() {
  return (
    <div>
      <Flex align="center" justify="flex-start" gap="middle">
        <p>
          <b>Enter Set of Posts</b>
        </p>
        <Button color="cyan" variant="solid">
          Upload File
        </Button>
      </Flex>
    </div>
  );
}

UploadFile.displayName = "upload-file";

export default UploadFile;
