import React from 'react';
import { Button, Form, FormGroup, Modal } from 'react-bootstrap';
import API from '../../api';
import { UseInput } from '../../hooks/UseInput';
import { registerInput } from './inputs';
import { ModalSize, RegisterInput } from './interfaces';
import { getFormAttributes } from '../../utils/funcs';
import { registerForm } from './forms/registerForm';

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Register: React.FC<Props> = ({ show, setShow }) => {
  const { input, handleChange } = UseInput<RegisterInput>(registerInput);
  const handleClose = () => setShow(false);

  const registerData = {
    userName: input.userName,
    email: input.email,
    password: input.password,
    confirmPassword: input.confirmPassword,
  };

  async function register(event: any) {
    event.preventDefault();
    try {
      const { data } = await API.post('/sessions/create', registerData);
      const { accessToken, refreshToken } = data;
    } catch (e: any) {
      console.error(e.message);
    }
  }

  return (
    <Modal
      centered
      animation={true}
      size={ModalSize.SM}
      show={show}
      onHide={handleClose}
    >
      <Form onSubmit={register}>
        <FormGroup>
          {getFormAttributes(input, registerForm).map((form) => (
            <Form.Control
              key={form.name + 1}
              type={form.type}
              value={form.value}
              placeholder={form.placeholder}
              onChange={handleChange}
              isInvalid={!!form.name}
            />
          ))}
        </FormGroup>

        <Button type="submit">
          <span>Register</span>
        </Button>
      </Form>
    </Modal>
  );
};
