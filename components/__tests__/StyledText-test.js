import * as React from "react";
import renderer from "react-test-renderer";

import { Title } from "../Text/Title";

it(`renders correctly`, () => {
  const tree = renderer.create(<Title>Snapshot test!</Title>).toJSON();

  expect(tree).toMatchSnapshot();
});
