import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "Yapper",
  description = "this is the Chat App called Yapper",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
