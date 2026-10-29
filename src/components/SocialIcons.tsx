import { site } from "@/lib/site";

type IconProps = { className?: string };

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function SocialLinks({ className = "" }: { className?: string }) {
  const links = [
    { href: site.socials.facebook, label: "Facebook", Icon: FacebookIcon },
    { href: site.socials.instagram, label: "Instagram", Icon: InstagramIcon },
  ];

  return (
    <div className={`flex gap-3 ${className}`}>
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GoldAcres on ${label}`}
          className="grid size-10 place-items-center rounded-full border border-current/20 transition hover:border-gold-400 hover:bg-gold-400 hover:text-ink"
        >
          <Icon className="size-5" />
        </a>
      ))}
    </div>
  );
}
