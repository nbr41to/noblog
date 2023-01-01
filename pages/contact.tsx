import type { NextPage } from 'next';

import { NextSeo } from 'next-seo';

import { ContactTemplate } from '~/templates/ContactTemplate';

const Contact: NextPage = () => {
  const handleSubmit = async () => {
    // eslint-disable-next-line no-console
    console.log('submit');
  };

  return (
    <>
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
