import { cn } from "@/lib/utils";

/**
 * Hanko-style seal (印章) in shu vermilion — the single accent of the "wa" layer.
 * Purely decorative; kept out of the accessibility tree.
 */
export function Seal({
  className,
  char = "西",
}: {
  className?: string;
  char?: string;
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-grid size-8 place-items-center rounded-[7px] bg-seal text-white shadow-sm ring-1 ring-black/10 select-none",
        className,
      )}
    >
      <span className="font-jp text-base leading-none" lang="ja">
        {char}
      </span>
    </span>
  );
}
