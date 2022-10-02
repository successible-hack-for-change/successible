import { Callout, Card } from '@blueprintjs/core';
import type { NextPage } from 'next';
import PageLayout from './PageLayout';

const Home: NextPage = () => {
  return (
    <div>
      <PageLayout>
        <div className="max-w-4xl flex-col justify-center mx-auto">
          <h1 className="text-center">Successible</h1>
          <Callout title="Our Vision" className="!bg-lightest">
            We aim to level the playing field for everyone by providing an equal
            opportunity of employment regardless of background, neurodiversity,
            or additional requirements.
          </Callout>
          <h2>What we do</h2>
          <p>
            Successible provides automated pre-employment tests, with an
            emphasis on accessibility, creating one test for everyone.
          </p>
          <h2>Why this is important</h2>
          <p>
            Having a more divergent workforce brings talents, perspectives and
            skills that can be beneficial in many work environments. Hiring
            diverse and neurodiverse employees can provide companies with a
            competitive edge that brings measurable benefits, both financially
            and in terms of workplace culture.
          </p>
          <h2>How we achieve this</h2>
          <div className="flex flex-row gap-4">
            <Card className="flex-1">
              <h4>Unlimited break time between questions</h4>
              <p>
                Tests can be a very stressful ordeal for many, leading them to
                not perform as well as they can do in their future workplaces.
                By allowing candidates to have breaks between questions, it can
                allow them to perform to their full potential.
              </p>
            </Card>
            <Card className="flex-1">
              <h4>Optional extras</h4>
              <p>
                Many traditional tests cater best for candidates who interpret
                information in a specific way. Our tests allow candidates to
                choose to view each question in multiple ways, such as diagrams
                and audio. This means they choose the way that works best for
                them.
              </p>
            </Card>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default Home;
