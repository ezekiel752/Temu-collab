const SearchBar = () => {
  return (
    <form className="bg-white h-10 w-[487px] rounded-4xl flex justify-end items-center ">
      <input
        type="text"
        placeholder="Search Temu"
        className="placeholder:text-gray-500"
      />
      <button className="rounded-4xl bg-black w-11 h-8.5 mx-2 text-[11px] pt-1 ">
        <span className="material-symbols-outlined ">search</span>
      </button>
    </form>
  );
};

export default SearchBar;
