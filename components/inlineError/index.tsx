import { Icon } from '@blueprintjs/core';

interface InlineErrorProps {
  errorStatus: boolean;
  field: string;
}

const InlineError = ({ errorStatus, field }: InlineErrorProps): JSX.Element => {
  return (
    <>
      {errorStatus && (
        <div className="flex flex-row mt-1.5 align-center">
          <span>
            <Icon icon="issue" size={14} />
          </span>
          <p className="ml-2 mb-0"> Please enter a valid {field}</p>
        </div>
      )}
    </>
  );
};

export default InlineError;
