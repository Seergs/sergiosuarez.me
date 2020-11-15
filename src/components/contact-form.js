import React, { useState } from "react";
import styled, { css } from "styled-components";
import useTranslation from "../hooks/useTranslation";
import mixins from "../theme/mixins";
const { flexRow, flexColumn } = mixins;

const Form = styled.form`
  margin-top: 4rem;
  ${flexColumn};
`;

const Row = styled.div`
  ${flexRow};
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
  `}
`;

const Label = styled.label`
  ${(props) => css`
    font-size: 0.9rem;
    font-weight: 700;
    color: ${props.theme.headings};
    margin-bottom: 0.5rem;

    ${props.htmlFor === "message" &&
    css`
      margin-top: 1.5rem;
    `}
  `}
`;

const Error = styled.span``;

const Button = styled.button`
  ${(props) => css`
    margin-top: 1.5rem;
    width: 250px;
    height: 45px;
    font-weight: 500;
    background-color: ${props.theme.headings};
    color: ${props.theme.contactButtonText};
    font-size: 0.9rem;
    border-radius: 3px;
    border: 0;
    cursor: pointer;
  `}
`;

export default function ContactForm() {
  const { t } = useTranslation();
  return (
    <Form>
      <Row>
        <Col>
          <Label htmlFor="name">{t("home.contact.label_1")}</Label>
          <Input type="text" id="name" />
        </Col>
        <Col>
          <Label htmlFor="email">{t("home.contact.label_2")}</Label>
          <Input type="email" id="email" />
        </Col>
      </Row>
      <Label htmlFor="message">{t("home.contact.label_3")}</Label>
      <Message rows="15" id="message" />
      <Button>{t("home.contact.button_text")}</Button>
    </Form>
  );
}
