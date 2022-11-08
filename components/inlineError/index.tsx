import { Icon } from '@blueprintjs/core';
import { Tooltip2 } from '@blueprintjs/popover2';

interface InlineErrorProps {
  errorStatus: boolean;
  field: string;
}

const InlineError = ({ errorStatus, field }: InlineErrorProps): JSX.Element => {
  return (
    <>
      {errorStatus ? (
        <Tooltip2
          content={`Please enter a valid ${field}`}
          className="absolute right-2 bottom-2.5"
        >
          <Icon icon="delete" size={16} color="#8B1818" />
        </Tooltip2>
      ) : (
        <div className="absolute right-2 bottom-2.5">
          <Icon icon="tick-circle" size={16} color="#246B45" />
        </div>
      )}
    </>
  );
};

export default InlineError;
