import { Form, FormAttribute } from '../../components/Auth/interfaces';

export function getFormAttributes<T extends NonNullable<unknown>>(
  input: T,
  forms: Form[]
): FormAttribute[] {
  const attributes: FormAttribute[] = [];

  for (const [index, value] of Object.values(input).entries()) {
    const attribute = {
      type: forms[index].type,
      name: forms[index].name,
      placeholder: forms[index].placeholder,
      value: String(value),
    };

    attributes.push(attribute);
  }

  return attributes;
}
