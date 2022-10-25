import { NextPage } from 'next';
import PageLayout from '../PageLayout';
import Image from 'next/image';
import { ShepherdTourContext } from 'react-shepherd';
import { useContext } from 'react';
import dynamic from 'next/dynamic';

const ShepherdTour = dynamic(
  () => import('react-shepherd').then((module) => module.ShepherdTour),
  { ssr: false },
);

const newSteps = [
  {
    id: 'logo',
    attachTo: { element: '#logo' },
    text: 'Hello',
    buttons: [
      {
        classes: 'shepherd-button-secondary',
        text: 'Exit',
        type: 'cancel',
      },
      {
        classes: 'shepherd-button-primary',
        text: 'Back',
        type: 'back',
      },
      {
        classes: 'shepherd-button-primary',
        text: 'Next',
        type: 'next',
      },
    ],
  },
];

const tourOptions = {
  defaultStepOptions: {
    cancelIcon: {
      enabled: true,
    },
  },
  useModalOverlay: true,
};

function Button() {
  const tour = useContext(ShepherdTourContext);

  return (
    <button className="button dark" onClick={tour.start}>
      Start Tour
    </button>
  );
}

const Completed: NextPage = () => {
  return (
    <PageLayout>
      <ShepherdTour tourOptions={tourOptions} steps={newSteps}>
        <Button />

        <div className="p-4 max-w-4xl flex-col justify-center items-center text-center mx-auto my-10">
          <Image
            src="/successible-logo.svg"
            alt="Successible logo"
            height={140}
            width={140}
            id="logo"
          />
          <h1 className="p-5">Congratulations</h1>
          <p>
            You have reached the end of your test and your answers have been
            submitted. Your employers will contact you directly with the next
            steps of your application.
          </p>
          <p>You may now close the page.</p>
        </div>
      </ShepherdTour>
    </PageLayout>
  );
};

export default Completed;
