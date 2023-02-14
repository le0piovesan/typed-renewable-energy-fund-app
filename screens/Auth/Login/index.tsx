import React, { useState, useRef } from "react";

import ButtonText from "../../../components/ButtonText";
import Container from "../../../components/Container";
import SectionRow from "../../../components/Container/SectionRow";
import ScrollForm from "../../../components/ScrollForm";
import { Title } from "../../../components/Text/Title";
import { Subtitle } from "../../../components/Text/Subtitle";
import { Main } from "../../../components/Text/Main";
import TextInput from "../../../components/TextInput";
import PressableBtn from "../../../components/PressableBtn";

import { Logo } from "../styles";

import Colors from "../../../constants/Colors";
import ContainerForm from "../../../components/Container/ContainerForm";

import { Formik } from "formik";
import * as yup from "yup";

import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux";
import { Auth } from "../../../redux/auth";

const loginSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

export default function Login({ navigation }: any) {
  const formikRef = useRef();
  const [wrongUser, setWrongUser] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const dispach = useAppDispatch();

  const users = useAppSelector((state) => state.auth.users);

  const logIn = (email: string, password: string) => {
    const userAuth = users.find(
      (user: any) => user.email === email && user.password === password
    );
    if (userAuth) dispach(Auth.logIn(userAuth));
    else setWrongUser(true);
  };

  return (
    <Container>
      <ScrollForm scrollHidden>
        <SectionRow>
          <Logo
            source={require("../../../assets/images/logo-renew.png")}
            resizeMode="contain"
          />
          <Title>
            Welcome to <Title color={Colors.brandPrimary}>ReNew Funds</Title>!
          </Title>
        </SectionRow>
        <Subtitle>Already have an account?</Subtitle>
        <ContainerForm>
          <Formik
            innerRef={formikRef}
            validationSchema={loginSchema}
            initialValues={{ email: "", password: "" }}
            onSubmit={async ({ email, password }) => {
              try {
                await logIn(email, password);
              } catch (err) {
                console.log(err);
              }
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <>
                <TextInput
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  error={touched.email && errors.email}
                  label={"E-mail"}
                />

                <TextInput
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  error={touched.password && errors.password}
                  label={"Password"}
                  secureTextEntry={passwordVisible ? false : true}
                  passwordVisible={passwordVisible}
                  setPasswordVisible={setPasswordVisible}
                />

                <PressableBtn onPress={handleSubmit} label={"Login"} />

                {wrongUser && (
                  <Main center color={Colors.brandDanger}>
                    User not found
                  </Main>
                )}
              </>
            )}
          </Formik>
        </ContainerForm>

        <ButtonText
          label={"Or sign up"}
          onPress={() => navigation.navigate("Register")}
        />
      </ScrollForm>
    </Container>
  );
}
