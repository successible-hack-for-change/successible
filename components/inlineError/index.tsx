import { Icon } from '@blueprintjs/core';

interface InlineErrorProps {
  errorStatus: boolean;
  field: string;
}

const InlineError = ({ errorStatus, field }: InlineErrorProps): JSX.Element => {
  return (
    <>
      {errorStatus ? (
        <div className="h-5 my-2.5"></div>
      ) : (
        <div className="flex flex-row mt-2.5">
          <Icon icon="issue" />
          <p className="h-5 ml-2"> Please enter a valid {field}</p>
        </div>
      )}
    </>
  );
};

export default InlineError;
