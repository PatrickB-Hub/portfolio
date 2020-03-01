import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import {
  color_primary,
  color_primary_dark,
  color_grey_8,
  color_grey_5,
  color_grey_3
} from "../atoms/variables";

import { Container } from "./Container";

import { media } from "../utilities/mediaQueriesBuilder";

const Contact = () => {
  const [mailStatus, setMailStatus] = useState({
    mailSent: false,
    error: null
  });

  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    message: ""
  });

  const onChangeHandler = (e, field) => {
    const newContactDetails = { ...contactDetails };
    newContactDetails[field] = e.target.value;
    setContactDetails(newContactDetails);
  };

  const onSubmitHandler = e => {
    setMailStatus({ mailSent: false, error: null });
    e.preventDefault();
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}`,
      data: contactDetails
    })
      .then(response => {
        if (response.data.sent) {
          setMailStatus({ mailSent: true, error: false });
          setContactDetails({ name: "", email: "", message: "" });
        } else {
          setMailStatus({ mailSent: false, error: true });
        }
      })
      .catch(() => {
        setMailStatus({ mailSent: false, error: true });
      });
  };

  return (
    <Container title="Kontakt">
      <FormWrapper>
        <form onSubmit={onSubmitHandler}>
          <InputWrapper>
            <input
              className="name-field"
              type="text"
              placeholder="Name"
              value={contactDetails.name}
              onChange={e => onChangeHandler(e, "name")}
              required
            />
            <input
              className="email-field"
              type="email"
              placeholder="E-Mail"
              value={contactDetails.email}
              onChange={e => onChangeHandler(e, "email")}
              required
            />
            <textarea
              className="message-field"
              type="textarea"
              placeholder="Nachricht.."
              maxLength="500"
              value={contactDetails.message}
              onChange={e => onChangeHandler(e, "message")}
              required
            />
          </InputWrapper>
          <ButtonWrapper>
            <Button type="submit">Senden</Button>
          </ButtonWrapper>

          {mailStatus.mailSent && (
            <Success>
              <div className="success">Vielen Dank für Ihre Nachricht.</div>
            </Success>
          )}
          {mailStatus.error && (
            <Error>
              <div className="error">
                Leider ist Ihre Nachricht nicht angekommen. Bitte versuchen Sie
                es später erneut.
              </div>
            </Error>
          )}
        </form>
      </FormWrapper>
    </Container>
  );
};

export default Contact;

const FormWrapper = styled.div`
  width: 85%;

  ${media.sizeIII`
    min-width: 90%;
  `}
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-areas: "firstName email" "message message";
  grid-gap: 1rem;
  margin: 2rem .5rem 0;

  .name-field {
    grid-area: firstName;
  }

  .email-field {
    grid-area: email;
  }

  .message-field {
    grid-area: message;
    height: 25rem;

    ${media.sizeIV`
      height: 20rem;  
	  `}
  }

  .name-field,
  .email-field,
  .message-field {
    font-size: 1.7rem;
    font-family: inherit;
    color: inherit;
    padding: 13px;
    border-radius: 10px;
    background-color: ${color_grey_8};
    border: none;
    border: 1px solid #ccc
    min-width: 70%;
    display: block;
    resize: none;
    transition: all 0.3s;

    &:focus {
      outline: none;
      box-shadow: 0 1rem 2rem rgba(${color_primary}, 0.1);
      border-bottom: 3px solid ${color_primary_dark};
      padding-top: 10px;
    }

    &:focus:invalid {
      border-bottom: 3px solid ${color_grey_5};
    }

    &::-webkit-input-placeholder {
      color: ${color_grey_3};
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
`;

const Button = styled.button`
  color: #fff;
  font-size: 1.8rem;
  font-family: inherit;
  font-weight: inherit;
  text-decoration: none;
  text-align: center;
  padding: 1.2rem 2.5rem;
  width: 12rem;
  margin-top: 1.5rem;
  border-radius: 3px;
  border: transparent;
  background-color: ${color_primary_dark}
  cursor: pointer;
  transition: all 0.2s;
  outline: none;

  :hover,
  :focus {
    transform: translateY(-2px);
    background-color: ${color_primary}
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.15);
  }

  :active {
    transform translateY(0);
  }

  ${media.sizeV`
    padding: 1.2rem 2rem;
	`}
`;

const Success = styled.div`
  width: 70%;
  font-size: 1.6rem;
  font-family: inherit;
  font-weight: inherit;
  text-align: center;
  margin: 20px auto;
  border: 2px solid green;
  padding: 7px;
`;

const Error = styled.div`
  width: 70%;
  font-size: 1.6rem;
  font-family: inherit;
  font-weight: inherit;
  text-align: center;
  margin: 20px auto;
  border: 2px solid red;
  padding: 7px;
`;
