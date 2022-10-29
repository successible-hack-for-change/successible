import type { NextPage } from 'next';
import { useContext, useState } from 'react';
import { Callout, FormGroup, InputGroup, Label } from '@blueprintjs/core';
import { Tooltip2 } from '@blueprintjs/popover2';
import { useRouter } from 'next/router';
import axios from 'axios';
import PageLayout from '../PageLayout';
import CustomButton from '../../components/customButton';
import AppContext from '../../context/AppContext';
import mockData from '../../data/questions.json';

const StartTest: NextPage = () => {
  const router = useRouter();
  const appContext = useContext(AppContext);
  const [userEmail, setUserEmail] = useState<string>('');
  const [accessCode, setAccessCode] = useState<string>('');

  const handleStartOnClick = () => {
    axios
      .post('http://127.0.0.1:8000/users', {
        username: userEmail,
        email: userEmail,
        accessCode,
      })
      .then((res) => {
        appContext.setUserId(res.data.id);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get('http://127.0.0.1:8000/')
      .then((res) => {
        appContext.setQuestions(res.data);
      })
      .catch((err) => {
        appContext.setQuestions(mockData.setOfQuestions);
      });
    router.push('/test-in-progress');
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
          </Label>
          <Label className="pb-3">
            Email address
            <InputGroup
              leftIcon="envelope"
              placeholder="Email address"
              large
              value={userEmail}
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
            />
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
          </Label>
          <CustomButton
            title="Start your test"
            onClick={handleStartOnClick}
            type="submit"
          />
        </FormGroup>
      </div>
    </PageLayout>
  );
};

export default StartTest;
