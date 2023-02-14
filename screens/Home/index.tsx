import React, { useEffect } from "react";
import Container from "../../components/Container";

import { useSelector } from "react-redux";

export default function Home({ navigation }: any) {
  const selector = useSelector((state) => state);

  // @ts-expect-error TS(2571): Object is of type 'unknown'.
  const user = selector.auth.currentUser;

  // @ts-expect-error TS(2571): Object is of type 'unknown'.
  const funds = selector.funds.funds;

  // @ts-expect-error TS(2571): Object is of type 'unknown'.
  const blog = selector.blog.blog;

  useEffect(() => {
    navigation.setOptions({ title: `Hello, ${user.firstName}` });
  }, []);

  return <Container>{/* <Header user={user} /> */}</Container>;
}
