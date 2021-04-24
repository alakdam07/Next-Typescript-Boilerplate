import mount from "@test/mount";

import data from "@public/meta.json";

import { Cards } from "./index";
import { Card } from "./styled";

describe("Cards component testing with enzyme", () => {
  const component = mount(<Cards />);

  it("renders without crashing", () => {
    expect(component).toBeTruthy();
  });

  it("cards length must be equal to the length of the meta data ", () => {
    expect(component.find(Card).length).toEqual(data.plugins.length);
  });
});
