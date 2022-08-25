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
      history("/contacts");
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
        span: 4,
        offset: 1,
      }}
      wrapperCol={{
        span: 12,
        offset: 3,
      }}
    >
      <Form.Item
        style={{ justifyContent: "space-between" }}
        label="Name"
        labelAlign="left"
        rules={[{ required: true, message: "Please enter your  name!" }]}
      >
        <Input
          name="name"
          value={selectedContact.name }
          onChange={handleOnChange}
        />
      </Form.Item>

      <Form.Item
        label="Surname"
        labelAlign="left"
        rules={[{ required: true, message: "Please enter your surname!" }]}
      >
        <Input
          placeholder="Enter your surname"
          value={selectedContact.surname}
          name="surname"
          onChange={(e) =>
            setSelectedContact({ ...selectedContact, [e.target.name]: e.target.value })
          }
        />
      </Form.Item>

      <Form.Item
        label="Father Name"
        labelAlign="left"
        rules={[{ required: true, message: "Please enter your father name!" }]}
      >
        <Input
          placeholder="Enter your father name"
          value={selectedContact.fatherName}
          name="fatherName"
          onChange={(e) =>
            setSelectedContact({ ...selectedContact, [e.target.name]: e.target.value })
          }
        />
      </Form.Item>

      <Form.Item
        label="Email"
        labelAlign="left"
        rules={[{ required: true, message: "Please enter your email!" }]}
      >
        <Input
          name="email"
          placeholder="Enter your e-mail"
          value={selectedContact.email}
          onChange={(e) =>
            setSelectedContact({ ...selectedContact, [e.target.name]: e.target.value })
          }
        />
      </Form.Item>

      <Form.Item
        label="Specialty"
        labelAlign="left"
        rules={[{ required: true, message: "Please enter your specialty!" }]}
      >
        <Input
          name="specialty"
          placeholder="Enter your specialty"
          value={selectedContact.specialty}
          onChange={(e) =>
            setSelectedContact({ ...selectedContact, [e.target.name]: e.target.value })
          }
        />
      </Form.Item>

      <Form.Item
        label="Education"
        labelAlign="left"
        rules={[{ required: true, message: "Please enter education level!" }]}
      >
        <Select
          onChange={(e) => setSelectedContact({ ...selectedContact, education: e })}
          value={selectedContact.education}
          name="education"
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
