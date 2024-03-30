function Button({ children, onClick }) {
  return (
    <button
      className="px-4 py-3 rounded-md text-xl font-semibold text-stone-800 bg-blue-400"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
