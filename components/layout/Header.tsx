import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import Navigation from "./Navigation";
import ToolSearch from "./ToolSearch";
import DarkToggle from "./DarkToggle";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white dark:bg-black">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <div className="hidden md:flex items-center gap-6">
            <Navigation />
            <ToolSearch />
            <DarkToggle />
          </div>

          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
