import { Button, Icon } from '@blueprintjs/core';
import Image from 'next/image';
import CustomButton from '../customButton';

interface BreakProps {
  handleContinueOnClick: () => void;
}

const Break = ({ handleContinueOnClick }: BreakProps): JSX.Element => {
  return (
    <div className="p-4 max-w-4xl flex-col justify-center items-center text-center mx-auto my-10">
      <Image
        src="/coffee-icon.svg"
        alt="coffee cup icon"
        width={120}
        height={120}
      />
      <h1 className="p-4">Break Page</h1>
      <p>
        This is an opportunity for you to take a break if you need one. This
        page is not being timed.
      </p>
      <p>
        If you had selected an answer but not submitted it when the timer ran
        out, your answer will have been submitted.
      </p>
      <CustomButton onClick={handleContinueOnClick} title="Continue" />
    </div>
  );
};

export default Break;
