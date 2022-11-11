import { Button, Icon } from '@blueprintjs/core';

interface CustomButtonProps {
  onClick: (() => {}) | (() => void);
  title: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  id?: string;
  noColor?: boolean;
  disabled?: boolean;
}

const conditionalButtonStyles = (noColor?: boolean, disabled?: boolean) => {
  if (noColor) return '!border !border-solid  !bg-transparent !shadow-none';
  if (disabled) return '!bg-grey-light !shadow !text-black';
  return '!bg-action !text-white !shadow';
};

const CustomButton = ({
  onClick,
  title,
  type,
  id,
  noColor,
  disabled,
}: CustomButtonProps): JSX.Element => {
  return (
    <Button
      onClick={onClick}
      className={`!p-3 !my-3 !rounded-md ${conditionalButtonStyles(
        noColor,
        disabled,
      )}`}
      type={type}
      id={id}
      disabled={disabled}
    >
      <div className="flex flex-row items-center">
        <span className="pr-3 text-md">{title}</span>
        <Icon
          icon="circle-arrow-right"
          size={20}
          color={`${!(noColor || disabled) && 'white'}`}
        />
      </div>
    </Button>
  );
};

export default CustomButton;
