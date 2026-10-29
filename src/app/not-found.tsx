import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-[80svh] place-items-center bg-ink px-5 pt-24 text-center text-paper">
      <div>
        <Image src="/brand/logo.png" alt="Gold Acres" width={374} height={198} className="mx-auto h-28 w-auto animate-float" />
        <h1 className="mt-8 font-display text-5xl font-medium">This page wandered off.</h1>
        <p className="mt-4 text-paper/70">Let&rsquo;s get you back to somewhere familiar.</p>
        <Link href="/" className="btn-gold mt-8">
          Back home
        </Link>
      </div>
    </section>
  );
}
