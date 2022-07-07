export const createValidation = {
    "email": "required|email",
    "firstName": "required|string",
    "lastName": "required|string"
};

export const loginValidation = {
    "email": "required|email",
    "password": "required|string|min:6"
};