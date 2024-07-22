import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer fixed bottom-0 bg-black text-[#d4d4d4] font-medium p-3 w-full z-[1000]">
      <div className="container mx-auto flex gap-4 justify-center">
        <Link href="https://www.linkedin.com/in/francireearellan/">
          <p className="text-sm hover:underline">LinkedIn</p>
        </Link>
        <Link href="https://www.github.com">
          <p className="text-sm hover:underline">GitHub</p>
        </Link>
      </div>
    </footer>
  )
}

export { Footer };