import type { NextPage } from 'next';

import { useRouter } from 'next/router';

import { Breadcrumbs } from '~/layouts/Breadcrumbs';
import { ProfileTemplate } from '~/templates/ProfileTemplate';

const Profile: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Breadcrumbs currentPath={router.pathname} />
      <ProfileTemplate />
    </>
  );
};

export default Profile;
