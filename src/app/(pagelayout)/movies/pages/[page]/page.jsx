import React from "react";

const page = async ({ params }) => {
  const page = (await params).page;
  return <div>page</div>;
};

export default page;
