import React from "react";
import {  Modal } from "antd";
import InfoIcon from "../assets/icons/InfoIcon";
import 'antd/dist/antd.min.css'
import styles from "../utils/Modal.scss"


const InfoModal = (  {contact} ) => {
  const info = () => {
    Modal.info({
      title: "Contact details info",
      content: (
        <div>
          <p className={styles.p}>Name: <span>{contact.name}</span></p>
          <p className={styles.p}>Surname: <span>{contact.surname}</span></p>
          <p className={styles.p}>Father Name: <span>{contact.fatherName}</span></p>
          <p className={styles.p}>Gender: <span>{contact.gender}</span></p>
          <p className={styles.p}>Specialty: <span>{contact.specialty}</span></p>
          <p className={styles.p}>Email: <span>{contact.email}</span></p>
          <p className={styles.p}>Education: <span>{contact.education}</span></p>
        </div>
      ),
      onOk() {},
    });
  };

  return (
    <div onClick={() => info(contact.id)}>
      <InfoIcon></InfoIcon>
    </div>
  );
};

export default InfoModal;
