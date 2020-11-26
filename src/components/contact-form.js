import React from "react";
import styled, { css } from "styled-components";
import useTranslation from "../hooks/useTranslation";
import mixins from "../theme/mixins";
import { motion } from "framer-motion";
import useForm from "../hooks/useForm";
import Text from "./text";
import { mediaQueries } from "../theme/breakpoints";
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

  ${mediaQueries("xl")`
    flex-direction:column;
    align-items:flex-start;
  `}
`;

const Col = styled.div`
  ${flexColumn}
  width: 100%;
`;

const Input = styled.input`
  ${(props) => css`
    height: 45px;
    border: 1px solid var(--color-inputOutline);
    background-color: var(--color-inputBackground);
    color: var(--color-headings);
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

  ${mediaQueries("lg")`
    width: 100%;
  `}
`;

const Message = styled.textarea`
  ${(props) => css`
    width: 700px;
    border: 1px solid var(--color-inputOutline);
    background-color: var(--color-inputBackground);
    color: var(--color-headings);
    resize: none;
    border-radius: 3px;
    padding: 10px;

    ${mediaQueries("lg")`
      width: 100%;
     `}
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

const Button = styled(motion.button)`
  ${(props) => css`
    width: 250px;
    height: 48px;
    font-weight: 600;
    color: var(--color-contactButtonText);
    background-color: var(--color-contactButtonBackground);
    font-size: 0.9rem;
    border-radius: 3px;
    border: 0;
    cursor: pointer;
    margin-top: 2rem;

    ${flexRow};
    ${alignCenter};
    ${justifyCenter};

    &:hover {
      filter: brightness(1.1);
    }

    ${mediaQueries("md")`
      width: 100%;
      margin-left: auto;
      margin-right: auto;
    `}
  `}
`;

export default function ContactForm() {
  const { t } = useTranslation();

  const { values, handleChange } = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  return (
    <Form
      name="contact-form"
      method="post"
      data-netlify="true"
      onSubmit="submit"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact-form" />

      <div hidden>
        <label>
          Don't fill this out: <input name="bot-field" />
        </label>
      </div>

      <Row>
        <Col>
          <Label htmlFor="name">{t("home.contact.label_1")}</Label>
          <Input
            type="text"
            id="name"
            value={values.name}
            onChange={handleChange}
            name="name"
            required
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
            required
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
        required
      />
      <Button type="submit">{t("home.contact.button_text")}</Button>
    </Form>
  );
}
