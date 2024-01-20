// const getProperties = async () => {
//   const { properties } = await getDatabase(blogDatabaseId);

//   return properties;
// };

export default function Layout({ children }: { children: React.ReactNode }) {
  // const properties = getProperties();

  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
