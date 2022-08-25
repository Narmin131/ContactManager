import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import EditIcon from "../../assets/icons/EditIcon";
import styles from "../Contacts/contacts.module.scss";
import { NavLink } from "react-router-dom";
import InfoModal from "../../utils/InfoModal";
import ConfirmModal from "../../utils/ConfirmModal";
const Contacts = () => {
  
  const { contacts } = useContext(GlobalContext);

  return (
    <div className={styles.contacts} >
      <div className="container">
        <div className="row  d-flex justify-content-center">
          {contacts?.map((contact) => 
            (
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
                      <InfoModal  id={contact.id} contact={contact}/>
                    </div>
                    <NavLink className={`${styles.contactBtn} ${styles.editBtn}`} to={`/contact/edit/${contact.id}`}>
                      <EditIcon contact={contact} />
                    </NavLink>
                    <div className={`${styles.contactBtn} ${styles.deleteBtn}`}  >
                      <ConfirmModal id={contact.id} />
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
