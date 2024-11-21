export default function SearchBar() {
  return (
    <div className="flex-1 max-w-2xl mx-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Rechercher..."
          className="w-full px-4 py-2 rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 
                   focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent
                   placeholder-gray-300 text-white"
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2">
          <svg
            className="w-5 h-5 text-white/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
} 