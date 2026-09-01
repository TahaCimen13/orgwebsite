import Image from "next/image";
import type { ComponentProps } from "react";
import { blurFor } from "@/lib/blur";

type Props = Omit<ComponentProps<typeof Image>, "placeholder" | "blurDataURL"> & {
  src: string;
};

/** next/image + otomatik blur önizleme (src yerel bir /images/... yolu olduğunda). */
export function Photo({ src, alt, ...rest }: Props) {
  const blurDataURL = blurFor(src);
  return (
    <Image
      src={src}
      alt={alt}
      {...(blurDataURL ? { placeholder: "blur" as const, blurDataURL } : {})}
      {...rest}
    />
  );
}
