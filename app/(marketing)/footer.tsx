import Image from "next/image";

import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div className="hidden h-20 w-full border-t-2 border-slate-200 p-2 lg:block">
      <div className="mx-auto flex h-full max-w-screen-lg items-center justify-evenly">
        <Button size="lg" variant="ghost" className="w-full cursor-default">
          <Image
            src="/SocialSkills.svg"
            alt="Social Skills"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Social Skills
        </Button>

        <Button size="lg" variant="ghost" className="w-full cursor-default">
          <Image
            src="/signLanguage.svg"
            alt="Sign System"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Sign System
        </Button>

        <Button size="lg" variant="ghost" className="w-full cursor-default">
          <Image
            src="/math.svg"
            alt="Mathematics"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Mathematics
        </Button>

        <Button size="lg" variant="ghost" className="w-full cursor-default">
          <Image
            src="/uk.svg"
            alt="English"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          English
        </Button>

        <Button size="lg" variant="ghost" className="w-full cursor-default">
          <Image
            src="/malay.svg"
            alt="Malay"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Malay
        </Button>
      </div>
    </div>
  );
};
