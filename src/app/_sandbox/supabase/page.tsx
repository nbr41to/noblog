'use client';

import { CodeHighlight } from '@mantine/code-highlight';
import { createClient } from '@supabase/supabase-js';
import Head from 'next/head';
import { useEffect, useState } from 'react';

import { PageTitle } from '~/commons/PageTitle';

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
);

type Book = {
  id: number;
  title: string;
  description: string;
  created_at: string;
};

const Supabase = () => {
  const [books, setBooks] = useState<Book[]>([]);
  useEffect(() => {
    (async () => {
      const response = (await supabase.from('book').select('*')) as {
        data: Book[];
      };
      setBooks(response.data);
    })();
  }, []);

  return (
    <div className="w-main mx-auto">
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <PageTitle title="Supabase" />

      <div>
        <CodeHighlight code={`yarn add @supabase/supabase-js`} />
      </div>

      <div>
        {books.map((book) => (
          <div key={book.id}>
            <h3>title: {book.title}</h3>
            <p>description: {book.description}</p>
            <p>created_at: {book.created_at}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Supabase;
