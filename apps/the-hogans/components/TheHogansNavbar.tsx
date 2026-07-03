interface TheHogansNavbarProps {
  title?: string;
}

const TheHogansNavbar = ({ title }: TheHogansNavbarProps) => {
  return (
    <header className="w-full max-w-4xl mx-auto text-center py-1 md:py-8 lg:relative lg:p-4">
      <nav className="max-w-4xl relative rounded-full border border-transparent bg-white shadow-input flex justify-center space-x-4 px-8 py-6">
        <div className="flex items-center justify-center space-x-4">
          <code className="font-mono font-bold text-xl">{title}</code>
        </div>
      </nav>
    </header>
  );
};

export default TheHogansNavbar;
