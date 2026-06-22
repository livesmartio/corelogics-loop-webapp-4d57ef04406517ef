import { Separator } from "./ui/separator";



export default function Footer() {
  return (
    <footer className="mt-auto px-4 pb-4 md:px-6 md:pb-6">
      <Separator className="mb-3" />
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} CoreLogics LOOP · Hierarchy observability and comparison workflow.
      </p>
    </footer>
  );
}