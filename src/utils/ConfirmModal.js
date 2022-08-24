import React from "react";
import { Modal, Space } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import DeleteIcon from "../assets/icons/DeleteIcon";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ConfirmModal = () => {

  const {  REMOVE_CONTACT, contact} = useContext(GlobalContext);

  const confirm = () => {
    Modal.confirm({
    title: 'Do you want to delete these items?',
    icon: <ExclamationCircleOutlined />,
    content: 'When clicked the OK button, this dialog will be closed after 1 second',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log('Oops errors!'));
    },
    onCancel() {},
  });
  };

  return (
    <>
      <div onClick={confirm}>
        <DeleteIcon onClick={() => REMOVE_CONTACT(contact.id)} />
      </div>
    </>
  );
};

export default ConfirmModal;
