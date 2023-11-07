export const getTodo = async () => {
  /* 疑似ローディング */
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();

  return data;
};
