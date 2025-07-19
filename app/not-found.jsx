import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-background">
      <Image
        src="/404.svg" // Place in public/illustrations
        alt="Lost doctor illustration"
        width={300}
        height={300}
        className="mb-6"
      />
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-muted-foreground mb-8">
        Looks like this page missed its appointment. Let’s get you back on track.
      </p>
      <div className="flex gap-4">
        <Link href="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    </div>
  );
}
