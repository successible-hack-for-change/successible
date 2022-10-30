import { Button, Icon } from '@blueprintjs/core';

interface CustomButtonProps {
  onClick: (() => {}) | (() => void);
  title: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  id?: string;
  noColor?: boolean;
}

const CustomButton = ({
  onClick,
  title,
  type,
  id,
  noColor,
}: CustomButtonProps): JSX.Element => {
  return (
    <Button
      onClick={onClick}
      className={`!p-3 !my-3 !rounded-md ${
        noColor
          ? '!border !border-solid  !bg-transparent !shadow-none'
          : '!bg-action !text-white !shadow'
      }`}
      type={type}
      id={id}
    >
      <div className="flex flex-row items-center">
        <span className="pr-3 text-md">{title}</span>
        <Icon
          icon="circle-arrow-right"
          size={20}
          color={`${!noColor && 'white'}`}
        />
      </div>
    </Button>
  );
};

export default CustomButton;
