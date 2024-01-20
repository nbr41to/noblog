/* eslint-disable no-console */
import type { NextPage } from 'next';

import { CodeHighlight } from '@mantine/code-highlight';
import Head from 'next/head';
import { useMemo, useRef, useState } from 'react';

import { PageTitle } from '~/commons/PageTitle';

const MyInputFileListComponent = () => {
  const [inputFiles, setInputFiles] = useState<FileList | null>(null);
  console.log('MyInputFileListComponent inputFiles', inputFiles);

  return <input type="file" onChange={(e) => setInputFiles(e.target.files)} />;
};
const MyInputFileComponent = () => {
  const [inputFiles, setInputFiles] = useState<File[]>([]);
  console.log('MyInputFileComponent inputFiles', inputFiles);

  return (
    <input
      type="file"
      onChange={(e) =>
        setInputFiles(e.target.files ? [...Array.from(e.target.files)] : [])
      }
    />
  );
};
const MyInputMultiFileListComponent = () => {
  const [inputFiles, setInputFiles] = useState<FileList | null>(null);
  console.log('MyInputMultiFileListComponent inputFiles', inputFiles);

  return (
    <input
      type="file"
      multiple
      onChange={(e) => setInputFiles(e.target.files)}
    />
  );
};
const MyInputMultiFileListControlComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputFiles, setInputFiles] = useState<FileList | null>(null);
  console.log('MyInputMultiFileListControlComponent inputFiles', inputFiles);

  const selectedFileArray: File[] = useMemo(() => {
    return inputFiles ? [...Array.from(inputFiles)] : [];
  }, [inputFiles]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    if (!inputRef.current?.files) return;
    const newFileArray = [
      ...selectedFileArray,
      ...Array.from(e.target.files),
    ].filter(
      (file, index, self) =>
        self.findIndex((f) => f.name === file.name) === index, // 重複を削除
    );
    const dt = new DataTransfer();
    newFileArray.forEach((file) => dt.items.add(file));
    inputRef.current.files = dt.files; // input内のFileListを更新
    setInputFiles(dt.files); // Reactのstateを更新
  };

  const handleDelete = (index: number) => {
    if (!inputRef.current?.files) return;
    const dt = new DataTransfer();
    selectedFileArray.forEach((file, i) => i !== index && dt.items.add(file));
    inputRef.current.files = dt.files; // input内のFileListを更新
    setInputFiles(dt.files); // Reactのstateを更新
  };

  return (
    <div>
      <input type="file" multiple onChange={handleChange} ref={inputRef} />
      <div className="w-fit space-y-3">
        {selectedFileArray.map((file, index) => (
          <div
            key={file.name}
            className="flex items-center justify-between gap-2"
          >
            <div>{file.name}</div>
            <button onClick={() => handleDelete(index)}>削除</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const InputFileList: NextPage = () => {
  return (
    <div>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <PageTitle title="input multiple FileList" />

      <div className="w-main mx-auto mt-8 space-y-3">
        <h3>MyInputFileListComponent</h3>
        <MyInputFileListComponent />
        <CodeHighlight
          code={`const MyInputFileListComponent = () => {
  const [inputFiles, setInputFiles] = useState<FileList | null>(null);
  console.log('MyInputFileListComponent inputFiles', inputFiles);

  return <input type="file" onChange={(e) => setInputFiles(e.target.files)} />;
};`}
        />
        <h3>MyInputFileComponent</h3>
        <CodeHighlight
          code={`const MyInputFileComponent = () => {
  const [inputFiles, setInputFiles] = useState<File[]>([]);
  console.log('MyInputFileComponent inputFiles', inputFiles);

  return (
    <input
      type="file"
      onChange={(e) =>
        setInputFiles(e.target.files ? [...Array.from(e.target.files)] : [])
      }
    />
  );
};`}
        />
        <MyInputFileComponent />
        <h3>MyInputMultiFileListComponent</h3>
        <MyInputMultiFileListComponent />
        <CodeHighlight
          code={`const MyInputMultiFileListComponent = () => {
  const [inputFiles, setInputFiles] = useState<FileList | null>(null);
  console.log('MyInputMultiFileListComponent inputFiles', inputFiles);

  return (
    <input
      type="file"
      multiple
      onChange={(e) => setInputFiles(e.target.files)}
    />
  );
};`}
        />
        <h3>MyInputMultiFileListControlComponent</h3>
        <MyInputMultiFileListControlComponent />
        <CodeHighlight
          code={`const MyInputMultiFileListControlComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputFiles, setInputFiles] = useState<FileList | null>(null);
  console.log('MyInputMultiFileListControlComponent inputFiles', inputFiles);

  const selectedFileArray: File[] = useMemo(() => {
    return inputFiles ? [...Array.from(inputFiles)] : [];
  }, [inputFiles]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    if (!inputRef.current?.files) return;
    const newFileArray = [
      ...selectedFileArray,
      ...Array.from(e.target.files),
    ].filter(
      (file, index, self) =>
        self.findIndex((f) => f.name === file.name) === index // 重複を削除
    );
    const dt = new DataTransfer();
    newFileArray.forEach((file) => dt.items.add(file));
    inputRef.current.files = dt.files; // input内のFileListを更新
    setInputFiles(dt.files); // Reactのstateを更新
  };

  const handleDelete = (index: number) => {
    if (!inputRef.current?.files) return;
    const dt = new DataTransfer();
    selectedFileArray.forEach((file, i) => i !== index && dt.items.add(file));
    inputRef.current.files = dt.files; // input内のFileListを更新
    setInputFiles(dt.files); // Reactのstateを更新
  };`}
        />
      </div>
    </div>
  );
};

export default InputFileList;
