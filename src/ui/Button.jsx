function Button({ children, onClick }) {
  return (
    <button
      className="px-4 py-3 rounded-md text-xl font-semibold border-2 normal-button tracking-wide"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
