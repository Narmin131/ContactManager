import React, { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import styles from "../ContactForm/Form.module.scss";
import { toast } from "react-toastify";
import { Checkbox, Button, Form, Input, Select, Radio } from "antd";

const Form1 = () => {
  const { ADD_CONTACT } = useContext(GlobalContext);
  const [contact, setContact] = useState({
    id: uuidv4(),
    name: "",
    surname: "",
    fatherName: "",
    specialty: "",
    email: "",
    gender: "",
    updatesNotification: "",
    education: "",
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

  const selectOptions = [
    { label: "Bachelor", value: 1 },
    { label: "Master", value: 2 },
    { label: "Phd", value: 3 },
    { label: "Doctorate", value: 4 },
  ];

  return (
    <>
      <Form
        onFinish={onSubmit}
        className={styles.form}
        name="myForm"
        form={form}
        initialValues={{
          remember: true,
        }}
        labelCol={{
          span:4,
          offset:1
        }}
        wrapperCol={{
          span: 12,
          offset:3
        }}
      >
          <Form.Item
            style={{"justifyContent":'space-between'}}
            label="Name"
            name='Name'
            labelAlign="left"
            rules={[{ required: true, message: "Please enter your  name!"}]}
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
          name='Surname'
          labelAlign="left"
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
          name='Father Name'
          rules={[{ required: true, message: "Please enter your father name!" }]}
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
          name='Email'
          labelAlign="left"
          rules={[{ required: true, message: "Please enter your email!" }]}
        >
          <Input
            name="email"
            placeholder="Enter your e-mail"
            value={email}
            onChange={(e) =>
              setContact({ ...contact, [e.target.name]: e.target.value })
            }
          />
        </Form.Item>

        <Form.Item
          label="Specialty"
          name='Specialty'
          labelAlign="left"
          rules={[{ required: true, message: "Please enter your specialty!"  }]}
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
        label='Education' 
        name='Education Level' 
        labelAlign="left">
          <Select
            onChange={(e)=>setContact({ ...contact, education : e })}
            defaultValue={selectOptions[0].label}
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
         name='Gender' 
         rules={[{ required: true, message: "Please select your gender!" }]}>
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
            <Radio 
            id="Male" 
            value="Male" 
            checked={contact.gender === "Male"}>
              Male
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item  
        labelAlign="left"
        wrapperCol={{
          offset: 1,
          span: 16,
        }}>
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

        <div className={styles.buttons}>
          <Button type="primary" htmlType="submit" >
            Add contact
          </Button>
          <NavLink to="/" className="mx-3">
            <Button danger type="primary" >Cancel</Button>
          </NavLink>
        </div>
      </Form>
    </>
  );
};

export default Form1;
