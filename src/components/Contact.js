import React, { useRef, useState } from "react";
import styled from "styled-components";
import { RedLink } from "../GlobalStyle";
import ErrorSVG from "../assets/icon-error.svg";

const Section = styled.section`
  grid-column: 1 / -1;
  background-color: #5368df;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  color: #fff;
  padding: 6rem 0;
  max-width: 41rem;

  @media (max-width: 23em) {
    max-width: 40rem;
  }
`;

const AlreadyJoined = styled.span`
  display: inline-block;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 5px;
`;

const Paragraph = styled.p`
  font-weight: 500;
  font-size: 3rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  gap: 1rem;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (max-width: 48em) {
    flex-direction: column;
    align-items: stretch;
    gap: 4rem;
  }
`;

const Input = styled.input`
  border: none;
  border-radius: ${(props) => (!props.emailValid ? "0px" : "7px")};
  padding: 1.3rem 2rem;
  width: 71%;
  font-family: inherit;
  color: #868e96;
  border: ${(props) => !props.emailValid && "2px solid #fa5757"};

  &::placeholder {
    font-family: inherit;
    color: inherit;
  }
  &:focus {
    outline: ${(props) =>
      !props.emailValid ? "2px solid #fa5757" : "2px solid #495057"};
  }

  @media (max-width: 48em) {
    width: auto;
    padding: 1.8rem 2rem;
  }
`;

const RedButton = styled(RedLink)`
  padding: 1.2rem 1.9rem;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: none;
  transition: all 0.3s ease-in-out;
  font-size: 1.3rem;

  @media (max-width: 48em) {
    padding: 1.8rem 1.9rem;
  }
`;

const ErrorIcon = styled.img`
  display: block;
  position: absolute;
  top: 50%;
  right: 13rem;
  transform: translateY(-50%);

  @media (max-width: 48em) {
    right: 1.5rem;
    top: 10%;
    transform: translateY(0%);
  }
`;

const ErrorMessage = styled.p`
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem;
  background-color: #fa5757;
  position: absolute;
  bottom: -2rem;
  width: 71%;

  @media (max-width: 48em) {
    bottom: 6.2rem;
    width: 100%;
    font-size: 1.2rem;
    padding: 1rem 0.5rem;
  }
`;

const Contact = () => {
  const emailRef = useRef();
  const [emailValid, setEmailValid] = useState(true);
  const emailFocusHandler = () => {
    setEmailValid(true);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    if (!enteredEmail.includes("@")) {
      setEmailValid(false);
    }
  };
  return (
    <Section>
      <Container>
        <AlreadyJoined>35,000+ Already Joined</AlreadyJoined>
        <Paragraph>Stay up-to-date with what we're doing</Paragraph>
        <Form onSubmit={formSubmitHandler}>
          <Input
            ref={emailRef}
            placeholder="Enter your email address"
            onFocus={emailFocusHandler}
            emailValid={emailValid}
          />
          <RedButton as="button">Contact Us</RedButton>
          {!emailValid && <ErrorIcon src={ErrorSVG} alt="Error Icon" />}
          {!emailValid && (
            <ErrorMessage>Whoops, make sure it's an email</ErrorMessage>
          )}
        </Form>
      </Container>
    </Section>
  );
};

export default Contact;
