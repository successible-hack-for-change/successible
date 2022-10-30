import { Button, Icon } from '@blueprintjs/core';

interface CustomButtonProps {
  onClick: (() => {}) | (() => void);
  title: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  id?: string;
  disabled?: boolean;
}

const CustomButton = ({
  onClick,
  title,
  type,
  id,
  disabled,
}: CustomButtonProps): JSX.Element => {
  return (
    <Button
      onClick={onClick}
      className="!p-3 !my-3 !rounded-md !shadow !bg-action !text-white"
      type={type}
      id={id}
      disabled={disabled}
    >
      <div className="flex flex-row items-center">
        <span className="pr-3 text-md">{title}</span>
        <Icon icon="circle-arrow-right" size={20} color="white" />
      </div>
    </Button>
  );
};

export default CustomButton;
