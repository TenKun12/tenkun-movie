import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  redirect("/");
  return <div>page</div>;
};

export default page;
