import { fireEvent, render, screen } from "@testing-library/react";
import Form, { SUBMIT_CONTACT } from "../../../modules/contacts/Form";
import { MockedProvider } from "@apollo/react-testing";
import {
  mockErrorMutation,
  mockSuccessMutation,
  reqConactSubmit,
} from "./requestData";

describe("Contacts Page Form", () => {
  it("renders without an error", () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <Form />
      </MockedProvider>
    );
  });

  describe("Default render - basic elements", () => {
    beforeEach(() => {
      render(
        <MockedProvider mocks={[]} addTypename={false}>
          <Form />
        </MockedProvider>
      );
    });

    it("Title and description", () => {
      expect(screen.getByText(/Остались вопросы?/)).toBeInTheDocument();
      expect(
        screen.getByText(/Оставьте свои контактные данные/)
      ).toBeInTheDocument();
    });
    it("Input fields and buttons", () => {
      expect(screen.getByRole("textbox", { name: "name" })).toBeInTheDocument();
      expect(
        screen.getByRole("textbox", { name: "phone" })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("textbox", { name: "email" })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("textbox", { name: "message" })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "ОТПРАВИТЬ" })
      ).toBeInTheDocument();
    });
  });

  describe("Submitting form states ui", () => {
    describe("loading and error", () => {
      beforeEach(() => {
        render(
          <MockedProvider mocks={[mockErrorMutation]} addTypename={false}>
            <Form />
          </MockedProvider>
        );
        fireEvent.click(screen.getByRole("button", { name: "ОТПРАВИТЬ" }));
      });
      it("loading", () => {
        expect(screen.getByText(/идёт отправка/i)).toBeInTheDocument();
      });
      it("error", async () => {
        expect(
          await screen.findByText(/произошла ошибка/i)
        ).toBeInTheDocument();
      });
    });

    describe("success", () => {
      it("success text", async () => {
        render(
          <MockedProvider mocks={[mockSuccessMutation]} addTypename={false}>
            <Form />
          </MockedProvider>
        );

        // filling form with data
        Object.entries(reqConactSubmit.variables)
          .map((e) => ({ name: e[0], value: e[1] }))
          .forEach((e) =>
            fireEvent.change(screen.getByRole("textbox", { name: e.name }), {
              target: { value: e.value },
            })
          );

        fireEvent.click(screen.getByRole("button", { name: "ОТПРАВИТЬ" }));
        expect(
          await screen.findByText(/сообщение отправлено/i)
        ).toBeInTheDocument();
      });
    });
  });
});
