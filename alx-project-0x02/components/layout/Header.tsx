import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h2 className="text-xl font-bold">ALX Project Header</h2>

       <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/home">/home</Link>
        <Link href="/about">/about</Link>
      </nav>
    </header>
  );
};

export default Header;
