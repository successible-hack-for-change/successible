import React from 'react';

interface LineHeadingProps {
  title: string;
}

const LineHeading = ({ title }: LineHeadingProps): JSX.Element => {
  return (
    <div className="flex flex-row items-center mt-5 mb-3">
      <hr className="w-full" />
      <h2 className="text-center whitespace-nowrap px-4">{title}</h2>
      <hr className="w-full" />
    </div>
  );
};

export default LineHeading;
