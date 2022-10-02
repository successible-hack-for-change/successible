import type { NextPage } from 'next';
import PageLayout from '../PageLayout';
import { Button, FormGroup, InputGroup, Label } from '@blueprintjs/core';
import { Tooltip2 } from '@blueprintjs/popover2';

const StartTest: NextPage = () => {
  return (
    <PageLayout>
      <h1>Are you ready to take your test?</h1>
      <h2>
        Please make sure you have read the instructions and completed the
        example question first.
      </h2>
      <FormGroup>
        <Label>
          Full Name
          <InputGroup leftIcon="person" placeholder="Full name" />
        </Label>
        <Label>
          Email address
          <InputGroup leftIcon="envelope" placeholder="Email address" />
        </Label>
        <Label>
          Entry code
          <Tooltip2 content="This code was emailed to you with your invitation to take this test">
            <InputGroup leftIcon="lock" placeholder="Entry code" />
          </Tooltip2>
        </Label>
        <Button type="submit">Start test</Button>
      </FormGroup>
    </PageLayout>
  );
};

export default StartTest;
