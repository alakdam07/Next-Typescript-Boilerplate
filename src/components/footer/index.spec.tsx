import mount from "@test/mount";

import { Footer } from "./index";
import { ListItem } from "./styled";

describe("Footer component testing with enzyme", () => {
  const component = mount(<Footer />);

  it("renders without crashing", () => {
    expect(component).toBeTruthy();
  });


  it("should render 4 icons successfully", () => {
    expect(component.find(ListItem)).toHaveLength(4);
  });
});
