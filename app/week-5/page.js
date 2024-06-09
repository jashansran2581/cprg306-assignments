import ItemList from './item-list';

const Page = () => {
  return (
    <main className="bg-black text-white min-h-screen p-1">
      <h1 className="text-3xl font-bold mb-2">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;
