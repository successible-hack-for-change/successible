import type { NextPage } from 'next';
import { FormEvent, useContext, useState } from 'react';
import { Callout, FormGroup, InputGroup, Label } from '@blueprintjs/core';
import { Tooltip2 } from '@blueprintjs/popover2';
import { useRouter } from 'next/router';
import axios from 'axios';
import PageLayout from '../PageLayout';
import CustomButton from '../../components/customButton';
import AppContext from '../../context/AppContext';
import InlineError from '../../components/inlineError';
import mockData from '../../data/questions.json';

const StartTest: NextPage = () => {
  const router = useRouter();
  const appContext = useContext(AppContext);
  const [userFullName, setUserFullName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [accessCode, setAccessCode] = useState<string>('');
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isAccessCodeValid, setIsAccessCodeValid] = useState<boolean>(false);
  const [isFullNameValid, setIsFullNameValid] = useState<boolean>(false);

  const validateField = (field: string, fieldValue: string): void => {
    switch (field) {
      case 'email':
        setIsEmailValid(
          /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(fieldValue),
        );
        break;
      case 'access code':
        setIsAccessCodeValid(/[\w]{4,}/i.test(fieldValue));
        break;
      case 'full name':
        setIsFullNameValid(/[a-zA-Z]{1,}/i.test(fieldValue));
        break;
      default:
        break;
    }
  };

  const handleStartOnClick = () => {
    appContext.setAccessCode(accessCode);
    axios
      .post('https://successible-api-nqnaexycua-nw.a.run.app/users', {
        username: userEmail,
        email: userEmail,
        accessCode,
      })
      .then((res) => {
        appContext.setUserId(res.data.id);
        router.push('/test-in-progress');
      })
      .catch(() => {
        router.push('/error');
      });
  };

  return (
    <PageLayout>
      <div className="p-4 max-w-4xl flex-col justify-center mx-auto">
        <h1 className="text-center">Are you ready to take your test?</h1>
        <Callout title="Important!" className="mb-4 !bg-accent-light">
          {appContext.state.accessCodeRecognised
            ? 'Please make sure you have read the instructions and completed the example question first. We recommend you take your test on a computer.'
            : 'Your access code was not recognised. Please try again, or contact us at help@successible.com'}
        </Callout>
        <FormGroup className="bg-light text-grey-darkest p-4 rounded-lg max-w-md !mx-auto !my-10 shadow">
          <Label className="pb-3">
            <p className="font-bold mb-0">Full Name</p>
            <InputGroup
              leftIcon="person"
              placeholder="Full name"
              large
              value={userFullName}
              onChange={(e) => {
                setUserFullName(e.target.value);
                validateField('full name', e.target.value);
              }}
            />
            <InlineError errorStatus={isFullNameValid} field={' full name'} />
          </Label>
          <Label className="pb-3">
            <p className="font-bold mb-0">Email address</p>
            <InputGroup
              type="email"
              leftIcon="envelope"
              placeholder="Email address"
              large
              value={userEmail}
              onChange={(e) => {
                setUserEmail(e.target.value);
                validateField('email', e.target.value);
              }}
            />
            <InlineError errorStatus={isEmailValid} field={' email address'} />
          </Label>
          <Label className="pb-3">
            <p className="font-bold mb-0">Entry code</p>
            <Tooltip2 content="This code was emailed to you with your invitation to take this test">
              <InputGroup
                leftIcon="lock"
                placeholder="Entry code"
                large
                value={accessCode}
                onChange={(e) => {
                  setAccessCode(e.target.value);
                  validateField('access code', e.target.value);
                }}
              />
            </Tooltip2>
            <InlineError
              errorStatus={isAccessCodeValid}
              field={' access code'}
            />
          </Label>
          <CustomButton
            title="Start your test"
            onClick={handleStartOnClick}
            type="submit"
            disabled={!(isFullNameValid && isEmailValid && isAccessCodeValid)}
          />
        </FormGroup>
      </div>
    </PageLayout>
  );
};

export default StartTest;
