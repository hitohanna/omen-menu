import Modal from "@/components/modal/Modal";
import React from "react";

const page = ({ params: id }: { params: { id: number } }) => {
  const ids = id.id;
  return <Modal>{ids}</Modal>;
};

export default page;
