import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import DeleteIcon from "../../assets/icons/DeleteIcon";
import EditIcon from "../../assets/icons/EditIcon";
import InfoIcon from "../../assets/icons/InfoIcon";
import styles from "../Contacts/contacts.module.scss";
import ConfirmModal from "../../utils/ConfirmModal";
const Contacts = () => {
  
  const { contacts, REMOVE_CONTACT } = useContext(GlobalContext);

  return (
    <div className={styles.contacts} >
      <div className="container">
        <div className="row  d-flex justify-content-center">
          {contacts.map((contact) => (
            <div className="col-lg-7 p-3" key={contact.id}>
              <div className={styles.contact}>
                <div>
                  <h1 className={styles.title}>
                    {contact.name} {contact.surname} {contact.fatherName}
                  </h1>
                  <p className={styles.desc}>{contact.specialty}</p>
                  
                </div>
                <div className={styles.btns}>
                  <div className={`${styles.contactBtn} ${styles.infoBtn}`}>
                    <InfoIcon />
                  </div>
                  <div className={`${styles.contactBtn} ${styles.editBtn}`}>
                    <EditIcon contact={contact} />
                  </div>
                  <div className={`${styles.contactBtn} ${styles.deleteBtn}`}>
                    <ConfirmModal/>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
