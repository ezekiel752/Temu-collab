const SearchBar = () => {
  return (
    <form className="bg-white h-10 w-full max-w-[487px] rounded-4xl flex items-center px-2">
      <input
        type="text"
        placeholder="Search Temu"
        className="w-full px-3 py-1 text-sm text-black placeholder:text-gray-500 bg-transparent outline-none"
      />
      <button type="submit" className="rounded-4xl bg-black w-11 h-8.5 text-white flex items-center justify-center shrink-0 hover:bg-gray-900 transition-colors">
        <span className="material-symbols-outlined text-lg">search</span>
      </button>
    </form>
  );
};

export default SearchBar;
