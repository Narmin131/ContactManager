import React, { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import   "../ContactForm/Form.scss";
import { toast } from "react-toastify";
import { Checkbox, Button, Form, Input, Select, Radio } from "antd";

const Form1 = () => {
  const { ADD_CONTACT } = useContext(GlobalContext);
  const selectOptions = [
    { value: "Bachelor" },
    { value: "Master" },
    { value: "Phd" },
    { value: "Doctorate" },
  ];
  const [contact, setContact] = useState({
    id: uuidv4(),
    name: "",
    surname: "",
    fatherName: "",
    specialty: "",
    email: "",
    gender: "",
    updatesNotification: "",
    education: selectOptions[0].value,
  });

  const { Option } = Select;
  const [form] = Form.useForm();

  const { name, surname, fatherName, specialty, email } = contact;

  let history = useNavigate();

  const onSubmit = () => {
    if (contact) {
      ADD_CONTACT(contact);
      history("/");
      console.log(contact);
      toast.success("Contact successfully added");
    }
  };

  return (
    <>
      <Form
        onFinish={onSubmit}
        name="myForm"
        form={form}
        className='form'
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
          label="Name"
          name="Name"
          labelAlign="left"
          style={{ fontWeight: "bold" }}
          rules={[{ required: true, message: "Please enter your  name!" }]}
        >
          <Input
            placeholder="Enter your name"
            value={name}
            name="name"
            onChange={(e) =>
              setContact({ ...contact, [e.target.name]: e.target.value })
            }
          />
        </Form.Item>

        <Form.Item
          label="Surname"
          name="Surname"
          labelAlign="left"
          style={{ fontWeight: "bold" }}
          rules={[{ required: true, message: "Please enter your surname!" }]}
        >
          <Input
            placeholder="Enter your surname"
            value={surname}
            name="surname"
            onChange={(e) =>
              setContact({ ...contact, [e.target.name]: e.target.value })
            }
          />
        </Form.Item>

        <Form.Item
          label="Father Name"
          labelAlign="left"
          style={{ fontWeight: "bold" }}
          name="Father Name"
          rules={[
            { required: true, message: "Please enter your father name!" },
          ]}
        >
          <Input
            placeholder="Enter your father name"
            value={fatherName}
            name="fatherName"
            onChange={(e) =>
              setContact({ ...contact, [e.target.name]: e.target.value })
            }
          />
        </Form.Item>

        <Form.Item
          label="Email"
          name="Email"
          labelAlign="left"
          style={{ fontWeight: "bold" }}
          rules={[{ required: true, message: "Please enter your email!" }]}
        >
          <Input
            name="email"
            type="email"
            placeholder="Enter your e-mail"
            value={email}
            onChange={(e) =>
              setContact({ ...contact, [e.target.name]: e.target.value })
            }
          />
        </Form.Item>

        <Form.Item
          label="Specialty"
          name="Specialty"
          labelAlign="left"
          style={{ fontWeight: "bold" }}
          rules={[{ required: true, message: "Please enter your specialty!" }]}
        >
          <Input
            name="specialty"
            placeholder="Enter your specialty"
            value={specialty}
            onChange={(e) =>
              setContact({ ...contact, [e.target.name]: e.target.value })
            }
          />
        </Form.Item>

        <Form.Item
          label="Education"
          name="Education Level"
          labelAlign="left"
          style={{ fontWeight: "bold" }}
        >
          <Select
            onChange={(e) => setContact({ ...contact, education: e })}
            defaultValue="bachelor"
            name="education"
            style={{
              width: 120,
              textTransform: "capitalize",
            }}
          >
            {selectOptions.map((item, index) => (
              <Option key={index} value={item.value}></Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Gender"
          labelAlign="left"
          name="Gender"
          style={{ fontWeight: "bold" }}
          rules={[{ required: true, message: "Please select your gender!" }]}
        >
          <Radio.Group
            onChange={(e) =>
              setContact({
                ...contact,
                [e.target.name]: e.target.checked ? e.target.id : "",
              })
            }
            name="gender"
          >
            <Radio
              id="Female"
              value="Female"
              checked={contact.gender === "Female"}
            >
              Female
            </Radio>
            <Radio id="Male" value="Male" checked={contact.gender === "Male"}>
              Male
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          labelAlign="left"
          style={{ fontWeight: "bold" }}
          wrapperCol={{
            offset: 1,
            span: 16,
          }}
        >
          <Checkbox
            name="updatesNotification"
            checked={contact.updatesNotification === "update"}
            id="update"
            onChange={(e) =>
              setContact({
                ...contact,
                [e.target.name]: e.target.checked ? e.target.id : "",
              })
            }
          >
            I want to receive information about news
          </Checkbox>
        </Form.Item>

        <div className='buttons'>
          <Button type="primary" htmlType="submit">
            Add contact
          </Button>
          <NavLink to="/" className="mx-3">
            <Button danger type="primary">
              Cancel
            </Button>
          </NavLink>
        </div>
      </Form>
    </>
  );
};

export default Form1;
