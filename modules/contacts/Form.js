import { gql, useMutation } from "@apollo/client";
import client from "../../apollo-client";

import Spinner from "../common/Spinner";

import { FormElem } from "../../styles/contacts";

const SUBMIT_CONTACT = gql`
  mutation submitContact(
    $email: String
    $message: String
    $name: String
    $phone: numeric
  ) {
    insert_submit_one(
      object: { email: $email, message: $message, name: $name, phone: $phone }
    ) {
      id
    }
  }
`;

const Form = () => {
  const [sendForm, { data, loading, error }] = useMutation(SUBMIT_CONTACT, {
    client,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, message, phone, name } = [...e.target].reduce(
      (obj, curr) => (curr.id ? { ...obj, [curr.id]: curr.value } : { ...obj }),
      {}
    );
    sendForm({
      variables: {
        email,
        message,
        phone,
        name,
      },
    });
  };

  return (
    <FormElem.Container>
      <FormElem.Title>Остались вопросы?</FormElem.Title>
      <FormElem.Text>
        Оставьте свои контактные данные и мы обязательно свяжемся для более
        подробного обсуждения вашего проекта.
      </FormElem.Text>
      {error && !loading && (
        <FormElem.Error>
          Произошла ошибка. Повторите отправку данных.
        </FormElem.Error>
      )}
      {data && !error ? (
        <FormElem.Success>
          <Icon.Done /> Сообщение отправлено
        </FormElem.Success>
      ) : loading ? (
        <FormElem.Success>
          <Spinner />
        </FormElem.Success>
      ) : (
        <FormElem.Form onSubmit={handleSubmit}>
          <FormElem.Input placeholder="Имя" name="name" id="name" type="text" />
          <FormElem.Input
            placeholder="Телефон"
            name="phone"
            id="phone"
            type="text"
          />
          <FormElem.Input
            placeholder="Электронная почта"
            name="email"
            id="email"
            type="text"
          />
          <FormElem.TextArea
            placeholder="Сообщение"
            name="message"
            id="message"
            type="text"
          />
          <FormElem.SumbitBtn type="submit" value="ОТПРАВИТЬ" />
        </FormElem.Form>
      )}
    </FormElem.Container>
  );
};

export default Form;
