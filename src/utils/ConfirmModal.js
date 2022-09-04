import React from "react";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import DeleteIcon from "../assets/icons/DeleteIcon";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { toast } from "react-toastify";

const ConfirmModal = ({ id }) => {
  const { REMOVE_CONTACT } = useContext(GlobalContext);

  const confirm = () => {
    Modal.confirm({
      title: "Do you want to delete this contact?",
      icon: <ExclamationCircleOutlined />,
      onOk() {
        REMOVE_CONTACT(id);
        toast.info("Item succesfully deleted");
      },
      onCancel() {},
    });
  };

  return (
    <>
      <div onClick={confirm}>
        <DeleteIcon />
      </div>
    </>
  );
};

export default ConfirmModal;
