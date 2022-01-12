import React from "react";

import { Welcome, About, Card, Flow, Icon } from "./styles";

const Main = () => {
  return (
    <>
      {/* WELCOME SECTION */}
      <Welcome.Box>
        <Welcome.Image src="images/main-profile.png" alt="" />
        <div>
          <Welcome.Title>Фасадный Декор от производителя</Welcome.Title>
          <Welcome.Text>
            Мы представляем широкий выбор фасадного декора, с которым вы можете
            ознакомиться в нашем каталоге.
          </Welcome.Text>
        </div>
      </Welcome.Box>

      {/* ABOUT SECTION */}
      <About.Box>
        <About.Title>О продукте</About.Title>
        <About.Paragraph>
          Наша компания представляет широкий выбор архитектурных элементов
          декора, что позволяет нам создавать выдающиеся визуальные эффекты и
          эстетику отделки для вашего дома.
        </About.Paragraph>
        <About.Paragraph>
          Для изготовления лепных конструкций мы используем только самые
          качественные основные материалы. Наши фасадные профили отличаются
          высокой гибкостью и твердостью. У них острые и четкие края, что
          значительно влияет на конечный визуальный эффект каждого фасада.
          Благодаря высокой гибкости нашей лепнины, наш материал все время
          «работает» со зданием, в результате чего уменьшается появление
          микротрещин на стыках профилей (эта проблема часто возникает у
          профилей, покрытых клеем и сеткой).
        </About.Paragraph>

        <Card.Box>
          <Card.Elem>
            <Card.Title>Преимущества</Card.Title>
            <Welcome.Image
              style={{ height: "auto", width: "250px" }}
              src="images/decor-example.png"
              alt=""
            />
            <ul>
              <li>
                <Icon.Point />
                Лёгкий вес
              </li>
              <li>
                <Icon.Point />
                Простая установка
              </li>
              <li>
                <Icon.Point />
                Конкурентоспособная цена
              </li>
            </ul>
          </Card.Elem>
          <Card.Elem>
            <Card.Title>Состав</Card.Title>
            <Welcome.Image
              style={{ height: "auto", width: "250px" }}
              src="images/decor-inners.png"
              alt=""
            />
            <ul>
              <li>
                <Icon.Point />
                Пенопласт
              </li>
              <li>
                <Icon.Point />
                <span>
                  Сетка <small>(опционально)</small>
                </span>
              </li>
              <li>
                <Icon.Point />
                Полимерный раствор
              </li>
            </ul>
          </Card.Elem>
        </Card.Box>
      </About.Box>
      {/*  FLOW SECTION */}
      <Flow.Box>
        <Flow.Title>Схема работы</Flow.Title>
        <Card.Box
          style={{
            flexDirection: "column",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <Card.Elem>
            <Icon.Mail />
            <Card.Text>
              <div>
                Вы, просмотрев каталог, отсылаете нам на почту необходимые вам
                позиции.
              </div>
              <div>
                Если у вас есть свой проект, который хотите реализовать, можете
                сразу отправить его к нам на почту
              </div>
            </Card.Text>
          </Card.Elem>
          <Icon.Next />
          <Card.Elem>
            <Icon.Calc />
            <Card.Text>
              <div>
                Мы рассчитываем стоимость проекта и согласуем все детали.
              </div>
            </Card.Text>
          </Card.Elem>
          <Icon.Next />
          <Card.Elem>
            <Icon.Date />
            <Card.Text>
              <div>В среднем, производство продукции занимает две недели.</div>
            </Card.Text>
          </Card.Elem>
          <Icon.Next />
          <Card.Elem>
            <Icon.Done />
            <Card.Text>
              <div>Готов поставке, доставке или установки на месте.</div>
            </Card.Text>
          </Card.Elem>
        </Card.Box>
      </Flow.Box>
    </>
  );
};
export default Main;
