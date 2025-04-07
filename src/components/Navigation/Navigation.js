import Link from 'next/link';

// ... other imports ...

const Navigation = () => {
  return (
    <nav>
      <Link href="/" prefetch>Home</Link>
      <Link href="/services" prefetch>Services</Link>
      <Link href="/about" prefetch>About</Link>
      <Link href="/contact" prefetch>Contact</Link>
      {/* ... other navigation items ... */}
    </nav>
  );
};