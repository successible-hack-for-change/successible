import type { NextPage } from 'next';
import FaqQuestion from '../../components/faqQuestion';
import PageLayout from '../PageLayout';

const FAQs: NextPage = () => {
  return (
    <PageLayout>
      <div className="p-4 max-w-4xl flex-col justify-center mx-auto">
        <h1 className=" flex-2 text-center">FAQs</h1>
        <FaqQuestion
          question="Do I need to use the optional extras?"
          answer="No. All information that you need to select an answer is given to you in the question. The optional extras provide another way of interpreting the same information."
        />
        <FaqQuestion
          question="Will the optional extras always be the same?"
          answer="No. The company may choose to disable some optional extras for some questions in order to test specific skills."
        />
        <FaqQuestion
          question="Do you record which optional extras I use?"
          answer="No. If you choose to use any of the optional extras, it is not recorded."
        />
        <FaqQuestion
          question="Do you record how much time I take to answer each question?"
          answer="No. We do not record how much time it takes you to answer each question."
        />
        <FaqQuestion
          question="What happens if I run out of time?"
          answer="If you run out of time before you have submitted an answer, you will be redirected to the break page. If you had selected an answer but not submitted it yet, then the answer you had selected will be submitted and it will not be recorded that you ran out of time."
        />
        <FaqQuestion
          question="Are the break pages timed?"
          answer="No. You can take as much time as you like, just don't close or refresh the page."
        />
        <FaqQuestion
          question="Will I receive a score at the end?"
          answer="The answers you have chosen will be sent directly to the company you are applying for. Depending on their policy, they may or may not choose to share your results with you."
        />
      </div>
    </PageLayout>
  );
};

export default FAQs;
