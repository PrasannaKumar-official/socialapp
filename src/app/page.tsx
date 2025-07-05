import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ModeToggle";

export default function Home() {
  return (
    <div>
       <SignedOut>
              <SignInButton mode = "modal">
                <Button>
                  Sign in
                </Button>
              </SignInButton>
       </SignedOut>
      <ModeToggle />
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
