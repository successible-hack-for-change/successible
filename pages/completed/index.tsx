import { NextPage } from 'next';
import PageLayout from '../PageLayout';
import Image from 'next/image';

const Completed: NextPage = () => {
  return (
    <PageLayout>
      <div className="p-4 max-w-4xl flex-col justify-center items-center text-center mx-auto my-10">
        <Image
          src="/successible-logo.svg"
          alt="Successible logo"
          height={140}
          width={140}
        />
        <h1 className="p-5">Congratulations</h1>
        <p>
          You have reached the end of your test and your answers have been
          submitted. Your employers will contact you directly with the next
          steps of your application.
        </p>
        <p>You may now close the page.</p>
      </div>
    </PageLayout>
  );
};

export default Completed;
