interface InlineErrorProps {
  errorStatus: boolean;
}

const InlineError = ({ errorStatus }: InlineErrorProps): JSX.Element => {
  return (
    <>
      {errorStatus ? (
        <div className="h-5 mb-2.5"></div>
      ) : (
        <p className="h-5"> Please enter a valid email address</p>
      )}
    </>
  );
};

export default InlineError;
