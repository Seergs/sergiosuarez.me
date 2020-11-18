import React, { useRef, useState } from "react";
import styled, { css, useTheme } from "styled-components";
import useTranslation from "../hooks/useTranslation";
import mixins from "../theme/mixins";
import { motion } from "framer-motion";
import useForm from "../hooks/useForm";
import Checkmark from "../svg/checkmark.svg";
import Text from "./text";
const { flexRow, alignCenter, justifyCenter, flexColumn } = mixins;

const Form = styled.form`
  margin-top: 4rem;
  ${flexColumn};

  ${Text} {
    font-weight: 600;
  }
`;

const Row = styled.div`
  ${flexRow};
  ${alignCenter};
  gap: 1.5rem;
`;

const Col = styled.div`
  ${flexColumn}
`;

const Input = styled.input`
  ${(props) => css`
    height: 45px;
    border: 1px solid ${props.theme.inputOutline};
    border-radius: 3px;
    padding: 0 10px;
    ${props.type === "text"
      ? css`
          width: 380px;
        `
      : css`
          width: 500px;
        `}
  `}
`;

const Message = styled.textarea`
  ${(props) => css`
    width: 700px;
    border: 1px solid ${props.theme.inputOutline};
    resize: none;
    border-radius: 3px;
    padding: 10px;
  `}
`;

const Label = styled.label`
  ${(props) => css`
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--color-headings);
    margin-bottom: 0.5rem;

    ${props.htmlFor === "message" &&
    css`
      margin-top: 1.5rem;
    `}
  `}
`;

const Error = styled.span``;

const Button = styled(motion.button)`
  ${(props) => css`
    width: 250px;
    height: 45px;
    font-weight: 500;
    color: ${props.theme.contactButtonText};
    font-size: 0.9rem;
    border-radius: 3px;
    border: 0;
    cursor: pointer;

    ${flexRow};
    ${alignCenter};
    ${justifyCenter};

    &:disabled {
      cursor: not-allowed;
    }
  `}
`;

export default function ContactForm() {
  const { t } = useTranslation();
  const [error, setError] = useState(false);

  const theme = useTheme();

  const {
    values,
    isSubmitted,
    setIsSubmitted,
    handleChange,
    handleSubmit,
  } = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit,
  });

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join();
  };

  const contactForm = useRef();

  function onSubmit() {
    const form = contactForm.current;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...values,
      }),
    })
      .then(() => {
        setIsSubmitted(true);
        setError(false);
      })
      .catch((err) => {
        setError(true);
      });
  }
  return (
    <Form
      ref={contactForm}
      data-netlify="true"
      name="contact-form"
      onSubmit={handleSubmit}
    >
      <Row>
        <Col>
          <Label htmlFor="name">{t("home.contact.label_1")}</Label>
          <Input
            type="text"
            id="name"
            value={values.name}
            onChange={handleChange}
            name="name"
          />
        </Col>
        <Col>
          <Label htmlFor="email">{t("home.contact.label_2")}</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Label htmlFor="message">{t("home.contact.label_3")}</Label>
      <Message
        rows="15"
        id="message"
        name="message"
        value={values.message}
        onChange={handleChange}
      />
      {error ? (
        <Error>{t("home.contact.error")}</Error>
      ) : (
        <Row style={{ marginTop: "1.5rem" }}>
          <Button
            whileHover={isSubmitted ? undefined : animations.button.hover}
            disabled={isSubmitted}
            animate={
              isSubmitted
                ? { ...animations.button.animate, backgroundColor: theme.teal }
                : { backgroundColor: theme.headings }
            }
          >
            {isSubmitted ? <Checkmark /> : t("home.contact.button_text")}
          </Button>
          {isSubmitted && <Text>{t("home.contact.submitted_text")}</Text>}
        </Row>
      )}
    </Form>
  );
}

const animations = {
  button: {
    hover: {
      backgroundColor: "#000000",
    },
    animate: {
      width: "45px",
      borderRadius: "50%",
    },
  },
};
