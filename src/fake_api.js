const existingUsernames = ["younes", "anders"];

const existingEmails = ["younes@hyf.com", "anders@hyf.com"];

export function createUser(username, email, password) {
  const usernameValidation = validateUsername(username);
  const emailValidation = validateEmail(email);
  if (!usernameValidation.valid) {
    return usernameValidation.response;
  } else if (!emailValidation.valid) {
    return emailValidation.response;
  }

  if (usernameValidation.valid && emailValidation.valid) {
    return { status: 201, message: "New user created." };
  } else {
    return { status: 500, message: "An unexpected error occured." };
  }
}

export function validateUsername(username) {
  if (username.length < 4) {
    return {
      valid: false,
      response: { status: 406, message: "Use at least 4 characters." }
    };
  } else if (!username.match(/^[0-9a-z]+$/)) {
    return {
      valid: false,
      response: {
        status: 406,
        message: "Only alphanumeric characters are allowed."
      }
    };
  } else if (existingUsernames.includes(username)) {
    return {
      valid: false,
      response: {
        status: 409,
        message: "Username already taken."
      }
    };
  } else {
    return { valid: true };
  }
}

export function validateEmail(email) {
  if (!isValidEmail(email)) {
    return {
      valid: false,
      response: { status: 406, message: "E-mail not valid." }
    };
  } else if (existingEmails.includes(email)) {
    return {
      valid: false,
      response: {
        status: 409,
        message: "E-mail already taken."
      }
    };
  } else {
    return { valid: true };
  }
}

function isValidEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
