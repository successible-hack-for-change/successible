import { NextPage } from 'next';
import PageLayout from '../PageLayout';
import Image from 'next/image';

const Error: NextPage = () => {
  return (
    <PageLayout>
      <div className="p-4 max-w-4xl flex-col justify-center items-center text-center mx-auto my-10">
        <Image
          src="/successible-logo.svg"
          alt="Successible logo"
          height={140}
          width={140}
        />
        <h1 className="p-5">Don&#39;t worry</h1>
        <p>
          There&#39;s been an error during your test. We&#39;re sorry this has
          happened and we won&#39;t let this negatively affect your application.
        </p>
        <p>
          Please contact us at help@successible.com and we&#39;ll help you to
          finish your test.
        </p>
      </div>
    </PageLayout>
  );
};

export default Error;
