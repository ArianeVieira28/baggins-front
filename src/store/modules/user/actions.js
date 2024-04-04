export function createUserRequest(user) {
  return {
    type: '@user/CREATE_REQUEST',
    user,
  };
}
export function createUserSuccess(data) {
  return {
    type: '@user/CREATE_SUCCESS',
    data,
  };
}
export function createUserFailure(data) {
  return {
    type: '@user/CREATE_FAILURE',
    data,
  };
}

export function loginRequest(user) {
  return {
    type: '@user/LOGIN_REQUEST',
    user,
  };
}
export function loginSuccess(data) {
  return {
    type: '@user/LOGIN_SUCCESS',
    data,
  };
}
export function loginFailure(data) {
  return {
    type: '@user/LOGIN_FAILURE',
    data,
  };
}

export function loginAdminRequest(user) {
  return {
    type: '@user/LOGIN_ADMIN_REQUEST',
    user,
  };
}
export function loginAdminSuccess(data) {
  return {
    type: '@user/LOGIN_ADMIN_SUCCESS',
    data,
  };
}
export function loginAdminFailure(data) {
  return {
    type: '@user/LOGIN_ADMIN_FAILURE',
    data,
  };
}

export function getUserRequest(id) {
  return {
    type: '@user/GET_REQUEST',
    id,
  };
}
export function getUserSuccess(user) {
  return {
    type: '@user/GET_SUCCESS',
    user,
  };
}
export function getUserFailure(data) {
  return {
    type: '@user/GET_FAILURE',
    data,
  };
}

export function userUpdateRequest(id, user) {
  return {
    type: '@user/UPDATE_REQUEST',
    data: { id, user },
  };
}
export function userUpdateSuccess(user) {
  return {
    type: '@user/UPDATE_SUCCESS',
    user,
  };
}
export function userUpdateFailure(data) {
  return {
    type: '@user/UPDATE_FAILURE',
    data,
  };
}

export function createUserAddressRequest(token, user) {
  return {
    type: '@user/CREATE_ADDRESS_REQUEST',
    data: { token, user },
  };
}
export function createUserAddressSuccess(user) {
  return {
    type: '@user/CREATE_ADDRESS_SUCCESS',
    user,
  };
}
export function createUserAddressFailure(data) {
  return {
    type: '@user/CREATE_ADDRESS_FAILURE',
    data,
  };
}

export function getUserAddressRequest(token, id) {
  return {
    type: '@user/GET_ADDRESS_REQUEST',
    data: { token, id },
  };
}
export function getUserAddressSuccess(user) {
  return {
    type: '@user/GET_ADDRESS_SUCCESS',
    user,
  };
}
export function getUserAddressFailure(data) {
  return {
    type: '@user/GET_ADDRESS_FAILURE',
    data,
  };
}

export function userAddressUpdateRequest(id, token, user) {
  return {
    type: '@user/UPDATE_ADDRESS_REQUEST',
    data: { id, token, user },
  };
}
export function userAddressUpdateSuccess(user) {
  return {
    type: '@user/UPDATE_ADDRESS_SUCCESS',
    user,
  };
}
export function userAddressUpdateFailure(data) {
  return {
    type: '@user/UPDATE_ADDRESS_FAILURE',
    data,
  };
}

export function createUserContactRequest(token, user) {
  return {
    type: '@user/CREATE_CONTACT_REQUEST',
    data: { token, user },
  };
}
export function createUserContactSuccess(user) {
  return {
    type: '@user/CREATE_CONTACT_SUCCESS',
    user,
  };
}
export function createUserContactFailure(data) {
  return {
    type: '@user/CREATE_CONTACT_FAILURE',
    data,
  };
}

export function getUserContactRequest(token, id) {
  return {
    type: '@user/GET_CONTACT_REQUEST',
    data: { token, id },
  };
}
export function getUserContactSuccess(user) {
  return {
    type: '@user/GET_CONTACT_SUCCESS',
    user,
  };
}
export function getUserContactFailure(data) {
  return {
    type: '@user/GET_CONTACT_FAILURE',
    data,
  };
}

export function updateUserContactRequest(id, token, user) {
  return {
    type: '@user/UPDATE_CONTACT_REQUEST',
    data: { id, token, user },
  };
}
export function updateUserContactSuccess(user) {
  return {
    type: '@user/UPDATE_CONTACT_SUCCESS',
    user,
  };
}
export function updateUserContactFailure(data) {
  return {
    type: '@user/UPDATE_CONTACT_FAILURE',
    data,
  };
}
