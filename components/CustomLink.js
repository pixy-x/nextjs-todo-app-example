import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";

export default function CustomLink({ children, url }) {
  return (
    <Link href={url} className="underline inline-flex items-center gap-1">
      <span>{children}</span>
      <TbExternalLink size={14} />
    </Link>
  );
}
