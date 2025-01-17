import { assertAuthenticated } from '@/lib/auth';

const DashBoard = async () => {
  const user = await assertAuthenticated();

  return <div className="max-w-3xl text-wrap">{JSON.stringify(user)}</div>;
};

export default DashBoard;
