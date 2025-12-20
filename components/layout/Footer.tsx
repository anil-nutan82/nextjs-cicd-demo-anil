import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <Container>
        <div className="flex h-14 items-center justify-center text-sm text-gray-600">
          {siteConfig.footerText}
        </div>
      </Container>
    </footer>
  );
}
