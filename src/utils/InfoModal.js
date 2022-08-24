import React, {useState} from "react";
import { Button, Modal } from "antd";
import InfoIcon from "../assets/icons/InfoIcon";
const InfoModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
    console.log('salaaam');
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <div onClick={showModal}>
      <InfoIcon></InfoIcon>
      </div>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default InfoModal;
