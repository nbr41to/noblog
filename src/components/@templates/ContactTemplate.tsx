import type { FC } from 'react';

import { PageTitle } from '~/commons/PageTitle';
import { ContactBySns } from '~/components/features/contact/ContactBySns';
import { ContactForm } from '~/components/features/contact/ContactForm';

export const ContactTemplate: FC = () => {
  return (
    <div>
      <PageTitle title="Contact" />
      <div className="w-main mx-auto mt-6 space-y-8">
        <ContactBySns />
        <ContactForm />
      </div>
    </div>
  );
};
