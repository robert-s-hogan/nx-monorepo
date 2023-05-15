//libs/utils/src/lib/validation-utils.ts
export const isValidEmail = (email: string): boolean => {
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,}$/;
  return regex.test(email);
};

export const isValidPhoneNumber = (phoneNumber: string): boolean => {
  const regex = /^\+?\d{10,}$/;
  return regex.test(phoneNumber);
};

export const validateEmail = (email: string): boolean => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(String(email).toLowerCase());
};
