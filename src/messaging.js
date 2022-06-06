const status = {
  success: 'success',
  invalid_input: 'invalid_input',
};

const statusCodes = {
  [status.invalid_input]: 400,
};

const createMessage = (status, message = '') => {
  return {status, message};
};

export default {status, statusCodes, createMessage};
