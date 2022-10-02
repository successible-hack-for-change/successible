import { H1 } from '@blueprintjs/core';
import { useRouter } from 'next/router';

const Question = (): JSX.Element => {
  const router = useRouter();
  const { id } = router.query;
  return <H1>Question {id}</H1>;
};

export default Question;
