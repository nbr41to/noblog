import fs from 'fs';

export const getFileNames = (path: string, excludePaths: string | string[]) => {
  const excludePathsArray = Array.isArray(excludePaths)
    ? excludePaths
    : [excludePaths];
  const fileList = fs.readdirSync(path);

  return fileList
    .map((file) => {
      return file.replace('.tsx', '');
    })
    .filter((file) => !excludePathsArray.includes(file));
};
