import Image from "next/image";
import { cn } from "@/lib/utils";

/** The approved wordmark, cropped in its frame to remove the artwork's margins. */
export function Logo({
  className,
  preload = false,
  sizes = "208px",
}: {
  className?: string;
  preload?: boolean;
  sizes?: string;
}) {
  return (
    <span
      className={cn(
        "relative block aspect-[7.5/1] w-52 shrink-0 overflow-hidden rounded-sm bg-[#0a0a0b]",
        className,
      )}
    >
      <Image
        src="/brand/nishimoto-logo-dark-v1.png"
        alt="Nishimoto"
        fill
        sizes={sizes}
        className="object-cover object-center"
        preload={preload}
      />
    </span>
  );
}
