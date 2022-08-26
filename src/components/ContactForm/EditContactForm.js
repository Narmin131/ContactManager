import React from "react";
import { NavLink } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import styles from "../ContactForm/Form.module.scss";
import { toast } from "react-toastify";
import { Checkbox, Button, Form, Input, Select, Radio } from "antd";
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
    education: "",
  });
  const history = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const userId = id;
    const selectedContact = contacts.find((user) => String(user.id) === userId);
    if (selectedContact) {
      setSelectedContact(selectedContact);
    }
  }, [id, contacts]);

  function onSubmit() {
     if (
      JSON.stringify(selectedContact) ===
      JSON.stringify(contacts.find((user) => user.id === selectedContact.id))
    ) {
      toast.warning("There is no update in the data");
    } else if (selectedContact) {
      UPDATE_CONTACT(selectedContact);
      history("/");
      toast.success("Contact has been successfully updated");
    }
  }

  const handleOnChange = (e) => {
    setSelectedContact((selectedContact) => ({
      ...selectedContact,
      [e.target.name]: e.target.value,
    }));
  };


  const { Option } = Select;
  const [form] = Form.useForm();
  const selectOptions = [
    { label: "Bachelor", value: 1 },
    { label: "Master", value: 2 },
    { label: "Phd", value: 3 },
    { label: "Doctorate", value: 4 },
  ];


  return (
    <Form
      onFinish={onSubmit}
      className={styles.form}
      name="myForm"
      form={form}
      initialValues={{
        remember: true,
      }}
      labelCol={{
        span: 5,
        offset: 1,
      }}
      wrapperCol={{
        span: 14,
        offset: 3,
      }}
    >
      <Form.Item
        style={{fontWeight:'bold',}}
        label="Name"
        labelAlign="left"
      >
        <Input
          name="name"
          value={selectedContact.name }
          onChange={handleOnChange}
          required
        />
      </Form.Item>

      <Form.Item
        label="Surname"
        style={{fontWeight:'bold',}}
        labelAlign="left"
      >
        <Input
          placeholder="Enter your surname"
          value={selectedContact.surname}
          name="surname"
          required
          onChange={(e) =>
            setSelectedContact({ ...selectedContact, [e.target.name]: e.target.value })
          }
        />
      </Form.Item>

      <Form.Item
        label="Father Name"
        style={{fontWeight:'bold',}}
        labelAlign="left"
      >
        <Input
          placeholder="Enter your father name"
          value={selectedContact.fatherName}
          required
          name="fatherName"
          onChange={(e) =>
            setSelectedContact({ ...selectedContact, [e.target.name]: e.target.value })
          }
        />
      </Form.Item>

      <Form.Item
        style={{fontWeight:'bold',}}
        label="Email"
        labelAlign="left"
      >
        <Input
          name="email"
          placeholder="Enter your e-mail"
          type='email'
          required
          value={selectedContact.email}
          onChange={(e) =>
            setSelectedContact({ ...selectedContact, [e.target.name]: e.target.value })
          }
        />
      </Form.Item>

      <Form.Item
        label="Specialty"
        labelAlign="left"
        style={{fontWeight:'bold',}}
      >
        <Input
          name="specialty"
          placeholder="Enter your specialty"
          value={selectedContact.specialty}
          required
          onChange={(e) =>
            setSelectedContact({ ...selectedContact, [e.target.name]: e.target.value })
          }
        />
      </Form.Item>

      <Form.Item
        label="Education"
        style={{fontWeight:'bold',}}
        labelAlign="left"
      >
        <Select
          onChange={(e) => setSelectedContact({ ...selectedContact, education: e })}
          value={selectedContact.education}
          defaultValue={selectOptions[0].value}
          name="education"
          required
          style={{
            width: 120,
          }}
        >
          {selectOptions.map((item) => (
            <Option key={item.value} value={item.label}>
              {item.label}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Gender"
        style={{fontWeight:'bold',}}
        labelAlign="left"
        rules={[{ required: true, message: "Please select your gender!" }]}
      >
        <Radio.Group
          onChange={(e) =>
            setSelectedContact({
              ...selectedContact,
              [e.target.name]: e.target.checked ? e.target.value : "",
            })
          }
          name="gender"
          value={selectedContact.gender}
        >
          <Radio
            value='Female'
            checked={selectedContact.gender === "Female"}
          >
            Female
          </Radio>
          <Radio 
          value='Male'
          checked={selectedContact.gender === "Male"}>
            Male
          </Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        labelAlign="left"
        style={{fontWeight:'bold',}}
        wrapperCol={{
          offset: 1,
          span: 16,
        }}
      >
        <Checkbox
          name="updatesNotification"
          checked={selectedContact.updatesNotification === "update"}
          id="update"
          onChange={(e) =>
            setSelectedContact({
              ...selectedContact,
              [e.target.name]: e.target.checked ? e.target.id : "",
            })
          }
        >
          I want to receive information about news
        </Checkbox>
      </Form.Item>

      <div className={styles.buttons}>
        <Button type="primary" htmlType="submit">
          Update contact
        </Button>
        <NavLink to="/" className="mx-3">
          <Button danger type="primary">
            Cancel
          </Button>
        </NavLink>
      </div>
    </Form>
  );
};

export default EditContactForm;
