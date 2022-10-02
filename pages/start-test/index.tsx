import type { NextPage } from 'next';
import PageLayout from '../PageLayout';
import {
  Button,
  Callout,
  FormGroup,
  InputGroup,
  Label,
} from '@blueprintjs/core';
import { Tooltip2 } from '@blueprintjs/popover2';

const StartTest: NextPage = () => {
  return (
    <PageLayout>
      <h1>Are you ready to take your test?</h1>
      <Callout title="Important!" className="mb-4 !bg-lightest">
        Please make sure you have read the instructions and completed the
        example question first.
      </Callout>
      <FormGroup className="bg-light p-4 rounded-lg max-w-md !mx-auto !my-10">
        <Label className="pb-3">
          Full Name
          <InputGroup leftIcon="person" placeholder="Full name" />
        </Label>
        <Label className="pb-3">
          Email address
          <InputGroup leftIcon="envelope" placeholder="Email address" />
        </Label>
        <Label className="pb-3">
          Entry code
          <Tooltip2 content="This code was emailed to you with your invitation to take this test">
            <InputGroup leftIcon="lock" placeholder="Entry code" />
          </Tooltip2>
        </Label>
        <Button type="submit" className="!bg-accent-dark !text-white">
          Start test
        </Button>
      </FormGroup>
    </PageLayout>
  );
};

export default StartTest;
