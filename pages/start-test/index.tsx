import type { NextPage } from 'next';
import { useContext, useState } from 'react';
import {
  Alert,
  Callout,
  FormGroup,
  InputGroup,
  Label,
} from '@blueprintjs/core';
import { Tooltip2 } from '@blueprintjs/popover2';
import { useRouter } from 'next/router';
import axios from 'axios';
import PageLayout from '../PageLayout';
import CustomButton from '../../components/customButton';
import AppContext from '../../context/AppContext';
import InlineError from '../../components/inlineError';

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

  const handleCloseOverlay = () => {
    appContext.setAccessCodeRecognised(true);
  };

  return (
    <PageLayout>
      <div className="p-4 max-w-4xl flex-col justify-center mx-auto">
        <h1 className="text-center">Are you ready to take your test?</h1>
        <Callout title="Important!" className="mb-4 !bg-accent-light">
          Please make sure you have read the instructions and completed the
          example question first. We recommend you take your test on a computer.
        </Callout>
        <FormGroup className="bg-light text-grey-darkest p-4 rounded-lg max-w-md !mx-auto !my-10 shadow">
          <Label className="pb-4">
            <h4 className="font-bold mb-0">Full Name</h4>
            <div className="relative">
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
              <InlineError
                errorStatus={!isFullNameValid}
                field={' full name'}
              />
            </div>
          </Label>
          <Label className="pb-4">
            <h4 className="font-bold mb-0">Email address</h4>
            <div className="relative">
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
              <InlineError
                errorStatus={!isEmailValid}
                field={' email address'}
              />
            </div>
          </Label>
          <Label className="pb-2">
            <h4 className="font-bold mb-0">Entry code</h4>
            <div className="relative">
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
              <InlineError
                errorStatus={!isAccessCodeValid}
                field={' access code'}
              />
            </div>
          </Label>
          <CustomButton
            title="Start your test"
            onClick={handleStartOnClick}
            type="submit"
            disabled={!(isFullNameValid && isEmailValid && isAccessCodeValid)}
          />
        </FormGroup>
      </div>
      <Alert
        isOpen={!appContext.state.accessCodeRecognised}
        confirmButtonText="Okay"
        onClose={handleCloseOverlay}
      >
        <p>The access code you entered was not recognised.</p>
        <p>
          Please check your code and try again. If the issue continues, please
          contact us at help@successible.com.
        </p>
      </Alert>
    </PageLayout>
  );
};

export default StartTest;
