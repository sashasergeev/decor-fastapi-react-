import { SyntheticEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";

import Spinner from "../common/Spinner";

import { FormElem, Icon } from "../../styles/contacts";

export const SUBMIT_CONTACT = gql`
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
    errorPolicy: "all",
  });

  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      await sendForm({
        variables: {
          email,
          message,
          phone,
          name,
        },
      });
    } catch (e) {
      // console.log(e);
    }
  };

  return (
    <FormElem.Container>
      <FormElem.Title>Остались вопросы?</FormElem.Title>
      <FormElem.Text>
        Оставьте свои контактные данные и мы обязательно свяжемся для более
        подробного обсуждения вашего проекта.
      </FormElem.Text>
      {error && (
        <FormElem.Error>
          Произошла ошибка. Повторите отправку данных.
        </FormElem.Error>
      )}
      {data ? (
        <FormElem.Success>
          <Icon.Done /> Сообщение отправлено
        </FormElem.Success>
      ) : loading ? (
        <FormElem.Success>
          <Spinner />
          идёт отправка...
        </FormElem.Success>
      ) : (
        <FormElem.Form onSubmit={handleSubmit}>
          <FormElem.Input
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            aria-label="name"
          />
          <FormElem.Input
            placeholder="Телефон"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            aria-label="phone"
          />
          <FormElem.Input
            placeholder="Электронная почта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            aria-label="email"
          />
          <FormElem.TextArea
            placeholder="Сообщение"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-label="message"
          />
          <FormElem.SumbitBtn type="submit" value="ОТПРАВИТЬ" />
        </FormElem.Form>
      )}
    </FormElem.Container>
  );
};

export default Form;
