import React, { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
const Form = () => {
  const { ADD_CONTACT } = useContext(GlobalContext);
  const [contact, setContact] = useState({
    id: uuidv4(),
    name: "",
    surname: "",
    fatherName: "",
    specialty: "",
    email: "",
    gender: "",
    updatesNotification:''
  });

  
  const { name, surname, fatherName, specialty, email } = contact;

  let history = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (contact) {
      ADD_CONTACT(contact);
      history("/contacts");
      console.log(contact);
    }
  };

  

  return (
    <form onSubmit={onSubmit}>
      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-10">
          <input
            class="form-control"
            name="name"
            required
            value={name}
            onChange={(e) =>
              setContact({ ...contact, [e.target.name]: e.target.value })
            }
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
            value={surname}
            onChange={(e) =>
              setContact({ ...contact, [e.target.name]: e.target.value })
            }
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
            value={fatherName}
            onChange={(e) =>
              setContact({ ...contact, [e.target.name]: e.target.value })
            }
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
            value={email}
            onChange={(e) =>
              setContact({ ...contact, [e.target.name]: e.target.value })
            }
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
            value={specialty}
            onChange={(e) =>
              setContact({ ...contact, [e.target.name]: e.target.value })
            }
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label class="col-sm-2 col-form-label">Job</label>
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
              value="male"
              onChange={(e) =>
                setContact({ ...contact, [e.target.name]: e.target.value })
              }
            />
            <label class="form-check-label">Kisi</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              value="female"
              onChange={(e) =>
                setContact({ ...contact, [e.target.name]: e.target.value })
              }
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
        Create a new contact
      </button>
      <NavLink to="/contacts" className="btn btn-danger m-2">
        Cancel
      </NavLink>
    </form>
  );
};

export default Form;
