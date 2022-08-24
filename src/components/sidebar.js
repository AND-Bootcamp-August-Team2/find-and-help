import Filter from "./filter";

const Sidebar = () => {
  return (
    <aside className="hidden md:block grid-in-sidebar bg-white p-4 ml-6 rounded-2xl">
      <Filter />
    </aside>
  );
};

export default Sidebar;
