import React, { useState } from "react";
import { Card, CardHeader } from "@material-ui/core";

const Welcome = () => {
  const [title, setTitle] = useState(
    "Welcome to the best burger restaurant around!"
  );
  return (
    <Card>
      <CardHeader title={title}></CardHeader>
    </Card>
  );
};

export default Welcome;
