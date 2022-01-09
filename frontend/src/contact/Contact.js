import React, { useState } from "react";

import {
  Container,
  Title,
  Text,
  Icon,
  ContactElem,
  ContentBox,
  FormElem,
} from "./styles";

import axios from "axios";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = [...e.target].reduce(
      (obj, curr) => (curr.id ? { ...obj, [curr.id]: curr.value } : { ...obj }),
      {}
    );
    const url = "http://127.0.0.1:8000/users/submit";
    axios.post(url, data).then((res) => setSubmitted(true));
  };

  return (
    <Container>
      <Title>НАШИ КОНТАКТЫ</Title>
      <ContentBox>
        <FormElem.Container>
          <FormElem.Title>Остались вопросы?</FormElem.Title>
          <FormElem.Text>
            Оставьте свои контактные данные и мы обязательно свяжемся для более
            подробного обсуждения вашего проекта.
          </FormElem.Text>
          {!submitted ? (
            <FormElem.Form onSubmit={handleSubmit}>
              <FormElem.Input
                placeholder="Имя"
                name="name"
                id="name"
                type="text"
              />
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
          ) : (
            <FormElem.Success>
              <Icon.Done /> Сообщение отправлено
            </FormElem.Success>
          )}
        </FormElem.Container>

        <ContactElem.Box>
          <Text>
            Если у вас есть вопросы или идеи, которыми вы бы хотели поделиться,
            отправьте сообщение. Для более подробной информации Вы можете
            связаться с нами по телефону, указанному ниже.
          </Text>
          <ContactElem.Item>
            <Icon.Phone />
            +7-911-756-5366
          </ContactElem.Item>
          <ContactElem.Item>
            <Icon.Map /> ул. Лесная д. 3в
          </ContactElem.Item>
          <ContactElem.Item>
            <Icon.Mail />
            info@decolight.com
          </ContactElem.Item>
        </ContactElem.Box>
      </ContentBox>
    </Container>
  );
};

export default Contact;
