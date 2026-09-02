
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black px-2 py-4">
      <div className=" flex  flex-col items-center gap-2">
        <p className="font-mono text-xs text-gray-400">
          © {year} Aina — Built with React &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

export default Footer;