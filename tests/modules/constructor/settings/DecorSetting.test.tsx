import "@testing-library/react/dont-cleanup-after-each";
import { fireEvent, render, screen, cleanup } from "@testing-library/react";

import client from "../../../../apollo-client";

import DecorSetting from "../../../../modules/constructor/settings/DecorSetting";
import DecorItemInterface from "../../../../api/DecorItemInterface";
import { CATEGORIES_RES, ITEMS_RES } from "../../catalogData";
import ConstructorWrapper, { store } from "../ConstructorWrapper";

const wrappedComponent = (
  <ConstructorWrapper>
    <DecorSetting />
  </ConstructorWrapper>
);

describe("Constructor: DecorSetting", () => {
  describe("Default render", () => {
    /*
      Default render behaviour
    */
    afterEach(() => {
      cleanup();
    });
    beforeEach(() => {
      render(wrappedComponent);
    });

    it("renders && title is present", () => {
      expect(screen.getByText("Декор")).toBeInTheDocument();
    });

    it("setting box is responsive to hide state", () => {
      // click to hide settings
      fireEvent.click(screen.getByText("Декор"));
      expect(() => screen.getByText(/Выбрать/)).toThrow();
      // click to show settings
      fireEvent.click(screen.getByText("Декор"));
      expect(screen.getAllByText(/Выбрать/)[0]).toBeInTheDocument();
    });
  });

  describe("Catalog responsivness", () => {
    /*
      SIMULATING HOW USER WOULD CHOOSE AN ITEM
    */
    afterAll(() => {
      cleanup();
    });
    beforeAll(() => {
      render(wrappedComponent);
      client.query = jest
        .fn()
        .mockImplementationOnce(async () => CATEGORIES_RES)
        .mockImplementationOnce(async () => ITEMS_RES);
    });

    const item = ITEMS_RES.data.categories_by_pk.items[0];
    const category = CATEGORIES_RES.data.categories[0];

    it("usage selection - will result in categories list", async () => {
      // choose usage
      fireEvent.click(screen.getAllByText("Выбрать")[0]);
      // check - catalog is opened
      expect(screen.getByText(/Выберите/)).toBeInTheDocument();
      // check - categories is mounted
      expect(await screen.findByText(category.name)).toBeInTheDocument();
    });

    it("category selection - will result in items list", async () => {
      // choose category
      fireEvent.click(screen.getByText(category.name));
      // check for an item
      expect(await screen.findByText(item.name)).toBeInTheDocument();
    });

    it("item selection and its appliance to scene", async () => {
      // select an item from list
      fireEvent.click(screen.getByText(item.name));
      // placeholder with 'Выберите элемент...' has to be removed
      expect(screen.queryByText(/выберите элемент/i)).not.toBeInTheDocument();
      // apply item
      fireEvent.click(screen.getByText("Apply"));
      // check if item is applied
      expect(
        await screen.findByText(`Выбрано: ${item.name}`)
      ).toBeInTheDocument();
      // ... and state equals to chosen item
      expect(
        (store.getState().usage.Middle.chosen as DecorItemInterface).name
      ).toBe(item.name);
      expect(client.query).toHaveBeenCalledTimes(2);
    });
  });
});
