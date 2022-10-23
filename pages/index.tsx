import { Callout, Card, UL } from '@blueprintjs/core';
import type { NextPage } from 'next';
import LineHeading from '../components/lineHeading';
import PageLayout from './PageLayout';
import Image from 'next/image';
import { Icon } from '@blueprintjs/core';

const Home: NextPage = () => {
  return (
    <PageLayout>
      <section className="p-28 bg-gradient-to-r from-light to-lightest justify-center">
        <div className="flex items-center justify-center pb-10">
          <Image
            src="/successible-logo.svg"
            alt="Successible logo"
            height={100}
            width={100}
          />
          <div className="pl-3">
            <h1 className="p-0">Successible</h1>
            <h3 className="p-0">One test for everyone</h3>
          </div>
        </div>
        <Callout className="!bg-white/0 text-center max-w-lg mx-auto">
          We provide automated pre-employment tests, with an emphasis on
          accessibility for all. We aim to level the playing field for everyone
          by providing an equal opportunity of employment regardless of
          background, neurodiversity, or additional requirements.
        </Callout>
      </section>
      <section className="p-4 max-w-4xl flex-col justify-center mx-auto">
        <LineHeading title="The future of the work place" />
        <p>
          Having a more diverse workforce brings talents, perspectives and
          skills that can be beneficial in many work environments. Hiring
          diverse and neurodiverse employees can provide companies with a
          competitive edge that brings measurable benefits, both financially and
          in terms of workplace culture.
        </p>
        <LineHeading title="What makes Successible different" />
        <div className="flex flex-row gap-10 mb-5">
          <Card className="flex-1 !p-10 !rounded-xl !bg-mid !shadow text-white">
            <div className="text-center py-4">
              <Icon icon="time" size={80} />
            </div>
            <h3 className="text-center">
              Unlimited break time between questions
            </h3>
            <p>
              Tests can be a very stressful ordeal for many, leading them to not
              perform as well as they can do in their future workplaces. By
              allowing candidates to have breaks between questions, it can allow
              them to perform to their full potential.
            </p>
          </Card>
          <Card className="flex-1 !p-10 !rounded-xl !bg-accent !shadow text-white">
            <div className="text-center py-4">
              <Icon icon="add" size={80} />
            </div>
            <h3 className="text-center">Optional extras</h3>
            <p>
              Many traditional tests cater best for candidates who interpret
              information in a specific way. Our tests allow candidates to
              choose to view each question in multiple ways. This means they
              choose the way that works best for them.
            </p>
            <p>Options will vary depending on the question, but may include:</p>
            <UL className="list-disc">
              <li>Diagrams</li>
              <li>Audio</li>
              <li>Definitions</li>
              <li>Highlights</li>
              <li>Visual aids</li>
            </UL>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
