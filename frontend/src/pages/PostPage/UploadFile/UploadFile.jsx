import React, { useState } from "react";
import { Flex } from "antd";

import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const CustomButton = styled(Button)({
  backgroundColor: "#13c2c2",
  color: "white",
  fontSize: "14px",
  height: "32px",
  padding: "0px 15px",
  borderRadius: "6px",
  boxShadow: "0 2px 0 rgb(5, 255, 215, 0.1)",
});

function UploadFile() {
  //Need to hook up fileData to post data
  const [fileData, setFileData] = useState(null);

  return (
    <div>
      <Flex align="center" justify="flex-start" gap="middle">
        <p>
          <b>Enter Set of Posts</b>
        </p>
        <CustomButton
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
        >
          Upload File
          <VisuallyHiddenInput
            type="file"
            onChange={(event) => setFileData(event.target.files[0])}
          />
        </CustomButton>
      </Flex>
    </div>
  );
}

UploadFile.displayName = "upload-file";

export default UploadFile;
