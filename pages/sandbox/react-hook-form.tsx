import type { NextPage } from 'next';
import type { SubmitHandler } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { CodeHighlight } from '@mantine/code-highlight';
import Head from 'next/head';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { PageTitle } from '~/commons/PageTitle';

const schema = z.object({
  name: z.string().min(1, { message: 'Required' }),
  age: z.number().min(10),
  email: z.string().min(1, { message: '必須' }).email({ message: 'not email' }),
});

type FormValues = z.infer<typeof schema>;

const ReactHookForm: NextPage = () => {
  const [submittedValue, setSubmittedValue] = useState<FormValues | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      age: 0,
      email: '',
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => setSubmittedValue(data);
  // eslint-disable-next-line no-console, @typescript-eslint/no-explicit-any
  const onError = (errors: any) => console.log(errors);

  return (
    <div>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <PageTitle title="react-hook-form" />

      <div className="w-main mx-auto">
        <CodeHighlight
          code={'yarn add react-hook-form zod @hookform/resolvers'}
        />

        <a href="https://react-hook-form.com/" target="_blank" rel="noreferrer">
          React Hook Form
        </a>

        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <input placeholder="name" {...register('name', { required: true })} />
          {errors.name && (
            <div className="text-sm text-red-600">
              {errors.name.message as string}
            </div>
          )}
          <br />
          <input
            placeholder="age"
            {...register('age', { valueAsNumber: true })}
          />
          {errors.age && (
            <div className="text-sm text-red-600">
              {errors.age.message as string}
            </div>
          )}
          <br />
          <input placeholder="email" {...register('email')} />
          {errors.email && (
            <div className="text-sm text-red-600">
              {errors.email.message as string}
            </div>
          )}
          <br />
          <input type="submit" />
        </form>

        {submittedValue && (
          <>
            <div>result:</div>
            <pre className="mt-2 rounded-md bg-white p-4 font-firaCode text-slate-600">
              {JSON.stringify(submittedValue, null, 2)}
            </pre>
          </>
        )}
      </div>
    </div>
  );
};

export default ReactHookForm;
