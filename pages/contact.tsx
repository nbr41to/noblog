import type { NextPage } from 'next';

import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import { Breadcrumbs } from '~/layouts/Breadcrumbs';
import { ContactTemplate } from '~/templates/ContactTemplate';

const Contact: NextPage = () => {
  const router = useRouter();
  const handleSubmit = async () => {
    // eslint-disable-next-line no-console
    console.log('submit');
  };

  return (
    <>
      <Breadcrumbs currentPath={router.pathname} />
      <ContactTemplate onSubmit={handleSubmit} />
      {/* meta */}
      <NextSeo
        title="Contact | noblog"
        openGraph={{
          url: 'https://www.nbr41.com/contact/',
        }}
      />
    </>
  );
};

export default Contact;
