import type { NextPage } from 'next';
import { ReactNode, useContext, useState } from 'react';
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
  const [userEmail, setUserEmail] = useState<string>('');
  const [accessCode, setAccessCode] = useState<string>('');
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);

  const validateEmail = (email: string): void => {
    setIsEmailValid(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(email));
  };

  const handleStartOnClick = () => {
    axios
      .post('http://127.0.0.1:8000/users', {
        username: userEmail,
        email: userEmail,
        accessCode,
      })
      .then((res) => {
        appContext.setUserId(res.data.id);
        axios
          .get('http://127.0.0.1:8000/')
          .then((res) => {
            appContext.setQuestions(res.data);
            router.push('/test-in-progress');
          })
          .catch((error) => {
            console.log(error);
            appContext.setQuestions(mockData.setOfQuestions);
          });
      })
      .catch((error) => {
        console.log(error);
        router.push('/error');
      });
  };

  return (
    <PageLayout>
      <div className="p-4 max-w-4xl flex-col justify-center mx-auto">
        <h1 className="text-center">Are you ready to take your test?</h1>
        <Callout title="Important!" className="mb-4 !bg-accent-light">
          Please make sure you have read the instructions and completed the
          example question first.
        </Callout>
        <FormGroup className="bg-light text-grey-darkest p-4 rounded-lg max-w-md !mx-auto !my-10 shadow">
          <Label className="pb-3">
            Full Name
            <InputGroup leftIcon="person" placeholder="Full name" large />
            <InlineError errorStatus={isEmailValid} />
          </Label>
          <Label className="pb-3">
            Email address
            <InputGroup
              type="email"
              leftIcon="envelope"
              placeholder="Email address"
              large
              value={userEmail}
              onChange={(e) => {
                setUserEmail(e.target.value);
                validateEmail(e.target.value);
              }}
            />
            {isEmailValid ? (
              <div className="h-5 mb-2.5"></div>
            ) : (
              <p className="h-5"> Please enter a valid email address</p>
            )}
          </Label>
          <Label className="pb-3">
            Entry code
            <Tooltip2 content="This code was emailed to you with your invitation to take this test">
              <InputGroup
                leftIcon="lock"
                placeholder="Entry code"
                large
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
              />
            </Tooltip2>
            {isEmailValid ? (
              <div className="h-5 mb-2.5"></div>
            ) : (
              <p className="h-5"> Please enter a valid email address</p>
            )}
          </Label>
          <CustomButton
            title="Start your test"
            onClick={handleStartOnClick}
            type="submit"
            disabled={!isEmailValid}
          />
        </FormGroup>
      </div>
    </PageLayout>
  );
};

export default StartTest;
