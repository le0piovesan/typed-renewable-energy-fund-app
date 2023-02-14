import React, { useState, useRef } from "react";

import ButtonText from "../../../components/ButtonText";
import Container from "../../../components/Container";
import SectionRow from "../../../components/Container/SectionRow";
import ScrollForm from "../../../components/ScrollForm";
import { Title } from "../../../components/Text/Title";
import { Subtitle } from "../../../components/Text/Subtitle";
import { Secondary } from "../../../components/Text/Secondary";
import TextInput from "../../../components/TextInput";
import PressableBtn from "../../../components/PressableBtn";

import { Logo } from "../styles";

import Colors from "../../../constants/Colors";
import ContainerForm from "../../../components/Container/ContainerForm";

import { Formik } from "formik";
import * as yup from "yup";
import Checkbox from "expo-checkbox";

import { useAppDispatch } from "../../../hooks/useRedux";
import { Auth } from "../../../redux/auth";
import Loading from "../../../components/Loading";
import { Main } from "../../../components/Text/Main";

const registerSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  termsAgreed: yup.boolean().required(),
});

export default function Register({ navigation }: any) {
  const [enableButton, setEnableButton] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispach = useAppDispatch();

  const createUser = (user: object) => {
    dispach(Auth.addUser(user));
  };

  if (loading) {
    return (
      <Loading>
        You can already log in into your account and start investing
      </Loading>
    );
  }

  return (
    <Container>
      <ScrollForm scrollHidden>
        <Title>Create your account</Title>
        <Subtitle>And earn $100 ready to be invested</Subtitle>
        <ContainerForm>
          <Formik
            validationSchema={registerSchema}
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              termsAgreed: false,
            }}
            onSubmit={async ({
              firstName,
              lastName,
              email,
              password,
              termsAgreed,
            }) => {
              try {
                setLoading(true);
                await createUser({
                  firstName,
                  lastName,
                  email,
                  password,
                  termsAgreed,
                  account: 100,
                });

                // Mock loading success
                setTimeout(() => {
                  setLoading(false);
                  navigation.navigate("Login");
                }, 3000);
              } catch (err) {
                console.log(err);
                setLoading(false);
              }
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
              values,
              errors,
              touched,
            }) => (
              <>
                <TextInput
                  onChangeText={handleChange("firstName")}
                  onBlur={handleBlur("firstName")}
                  value={values.firstName}
                  error={touched.firstName && errors.firstName}
                  label={"First Name"}
                />

                <TextInput
                  onChangeText={handleChange("lastName")}
                  onBlur={handleBlur("lastName")}
                  value={values.lastName}
                  error={touched.lastName && errors.lastName}
                  label={"Last Name"}
                />

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

                <SectionRow>
                  <Checkbox
                    color={Colors.brandPrimary}
                    style={{
                      marginRight: 10,
                      borderRadius: 20,
                    }}
                    value={values.termsAgreed}
                    onValueChange={(nextValue) => {
                      setFieldValue("termsAgreed", nextValue);
                      setEnableButton(nextValue);
                    }}
                  />

                  <Main>
                    I am over 18 years old and I have read and agree to the
                    Terms of Service and Privacy Policy.
                  </Main>
                </SectionRow>

                <PressableBtn
                  onPress={handleSubmit}
                  label={"Create Account"}
                  disabled={!enableButton}
                />
              </>
            )}
          </Formik>
        </ContainerForm>
        <ButtonText
          label={"Or log in"}
          onPress={() => navigation.navigate("Login")}
        />
      </ScrollForm>
    </Container>
  );
}
