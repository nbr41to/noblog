import type { NextPage } from 'next';

import { NextSeo } from 'next-seo';

import { ContactTemplate } from '~/templates/ContactTemplate';

const Contact: NextPage = () => {
  return (
    <>
      <ContactTemplate />
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
