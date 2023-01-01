import type { FC } from 'react';

import { PageTitle } from '~/commons/PageTitle';
import { ContactBySns } from '~/components/features/contact/ContactBySns';
import { ContactForm } from '~/components/features/contact/ContactForm';

type Props = {
  onSubmit: () => Promise<void>;
};

export const ContactTemplate: FC<Props> = ({ onSubmit }) => {
  return (
    <div>
      <PageTitle title="Contact" />
      <div className="w-main mt-6 space-y-8">
        <ContactBySns />
        <ContactForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};
