import { SUBMIT_CONTACT } from "../../../modules/contacts/Form";

export const reqConactSubmit = {
  query: SUBMIT_CONTACT,
  variables: {
    email: "sastesthasergeev1@gmail.com",
    message: "testing on error",
    phone: "89112354897",
    name: "SaSha",
  },
};

export const mockErrorMutation = {
  request: reqConactSubmit,
  error: new Error("test"),
};
export const mockSuccessMutation = {
  request: reqConactSubmit,
  result: { data: { insert_submit_one: { id: 11 } } },
};
