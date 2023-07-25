import { LoginInput, RegisterInput } from '../interfaces';

export const registerInput: RegisterInput = {
  userName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const loginInput: LoginInput = {
  email: '',
  password: '',
};

class NewUserInput {}

export const newUserInput: NewUserInput = {
  firstName: '',
  lastName: '',
  bio: '',
  location: '',
};
