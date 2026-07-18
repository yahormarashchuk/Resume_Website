export function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center overflow-hidden pt-40 pb-20">
      <p className="text-base leading-[1.4] text-warmgray">
        © {new Date().getFullYear()} Yahor Marashchuk
      </p>
    </footer>
  );
}
