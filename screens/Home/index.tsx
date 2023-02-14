import React, { useEffect } from "react";
import { useAppSelector } from "../../hooks/useRedux";
import Container from "../../components/Container";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export default function Home({ navigation }: any) {
  const selector = useAppSelector((state) => state);
  const user = selector.auth.currentUser;
  const funds = selector.funds.funds;
  const blog = selector.blog.blog;

  useEffect(() => {
    navigation.setOptions({ title: `Hello, ${user.firstName}` });
  }, []);

  return (
    <Container>
      <Header user={user} />
      <Main funds={funds} />
      <Footer blog={blog} />
    </Container>
  );
}
