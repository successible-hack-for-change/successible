import type { NextPage } from 'next';
import PageLayout from '../PageLayout';
import OptionalExtras from '../../components/optionalExtras';
import { Radio, RadioGroup } from '@blueprintjs/core';

const ExampleQuestion: NextPage = () => {
  return (
    <PageLayout>
      <h1 className="text-center">Example question</h1>
      <div className="flex gap-5 bg-light rounded-lg p-5">
        <div className="flex-1">
          <h3>Question:</h3>
          <p>
            If Daves Corner Shop had 16 employees in 2020 and and 21 employees
            in 2022 what percentage increase of employees was there between 2020
            and 2022?
          </p>
        </div>
        <div className="flex-1 bg-lightest rounded-lg px-3">
          <h3>Answers:</h3>
          <RadioGroup onChange={() => {}}>
            <Radio label="110% increase" />
            <Radio label="14.7% increase" />
            <Radio label="31.25% increase" />
            <Radio label="20% increase" />
          </RadioGroup>
        </div>
      </div>
      <OptionalExtras
        hightlightContent="Sometimes I hide because I&#39;m shy."
        diagramContent="I like to be center of attention so everything else should be closed
        when I&#39;m open."
        definitionsContent="I&#39;m just here to watch the fight."
      />
    </PageLayout>
  );
};

export default ExampleQuestion;
