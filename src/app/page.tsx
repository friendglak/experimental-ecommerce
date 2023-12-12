import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Unique for every {""}
          <span className="text-rose-500">ocassion</span>.
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Find the perfect outfit for every ocassion and celebrate life in style
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/products" className={buttonVariants()}>
            Browse Trending
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
