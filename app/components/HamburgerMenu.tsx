export default function HamburgerMenu ({
  isOpen,
  openMenu,
}: {
  isOpen: boolean;
  openMenu: (value: boolean) => void;
}) {
  return (
    <div className="md:hidden">
      <button
        onClick={() => openMenu(!isOpen)}
        aria-label="Menu"
        className="relative flex flex-col justify-center items-center w-8 h-8 cursor-pointer"
      >
        <span
          className={`absolute block h-0.5 w-6 bg-dark_gray transform transition duration-300 ease-in-out
          ${isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"}`}
        />
        <span
          className={`absolute block h-0.5 w-6 bg-dark_gray transition-all duration-300 ease-in-out
          ${isOpen ? "opacity-0" : "opacity-100"}`}
        />
        <span
          className={`absolute block h-0.5 w-6 bg-dark_gray transform transition duration-300 ease-in-out
          ${isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"}`}
        />
      </button>
    </div>
  );
}
