import React from "react";
import { NavLink } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

const EditContactForm = () => {

  const { contacts, UPDATE_CONTACT } = useContext(GlobalContext);

  const [selectedContact, setSelectedContact] = useState({
    id: "",
    name: "",
    surname: "",
    fatherName: "",
    specialty: "",
    email: "",
    gender: "",
  });
  const history = useNavigate();

  const {id} = useParams();

  useEffect(() => {
    const userId = id;
    const selectedContact = contacts.find((user) => String(user.id) === userId);
    if (selectedContact) {
      setSelectedContact(selectedContact);
    } 
  }, [id, contacts]);

  function onSubmit(e) {
    e.preventDefault();
    UPDATE_CONTACT(selectedContact);
    console.log("new user edited:", selectedContact);
    history("/contacts");
  }

  const handleOnChange = (e) => {
    setSelectedContact(selectedContact => ({
      ...selectedContact,
      [e.target.name]: e.target.value
    }));
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
            <input
              class="form-control"
              name="name"
              required
              value={selectedContact?.name ?? ''}
              onChange={handleOnChange}
            />
          </div>
        </div>

        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Surname</label>
          <div class="col-sm-10">
            <input
              class="form-control"
              name="surname"
              required
              value={selectedContact?.surname ?? ''}
              onChange={handleOnChange}
            />
          </div>
        </div>

        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Father Name</label>
          <div class="col-sm-10">
            <input
              class="form-control"
              name="fatherName"
              required
              value={selectedContact?.fatherName ?? ''}
              onChange={handleOnChange}
            />
          </div>
        </div>

        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input
              class="form-control"
              name="email"
              required
              value={selectedContact?.email ?? ''}
              onChange={handleOnChange}
            />
          </div>
        </div>

        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Specialty</label>
          <div class="col-sm-10">
            <input
              class="form-control"
              name="specialty"
              required
              value={selectedContact?.specialty ?? ''}
              onChange={handleOnChange}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label class="col-sm-2 col-form-label">Vezife</label>
          <div className="col-sm-10 d-flex justify-content-center align-items-center">
            <select class="form-select" aria-label="Default select example">
              <option selected>Bakalavr</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <div className="mb-3 row">
          <label class="col-sm-2 col-form-label">Gender</label>
          <div className="col-sm-10">
            <div class="form-check form-check-inline ">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                required
                value="male"
                onChange={handleOnChange}
              />
              <label class="form-check-label">Male</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                value="female"
                onChange={handleOnChange}
              />
              <label class="form-check-label">Female</label>
            </div>
          </div>
        </div>

        <div class="form-check mb-3">
          <input class="form-check-input" type="checkbox" />
          <label class="form-check-label" for="flexCheckDefault">
          I want to be notified of updates
          </label>
        </div>

        <button type="submit" class="btn btn-primary">
          Update a contact
        </button>
        <NavLink to="/contacts" className="btn btn-danger m-2">
          Cancel
        </NavLink>
      </form>
    </div>
  );
};

export default EditContactForm;
