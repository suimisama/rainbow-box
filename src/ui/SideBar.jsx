function SideBar({ children }) {
  return (
    <div className="w-[300px] border-r-2 border-stone-300 h-screen">
      {children}
    </div>
  );
}

export default SideBar;
