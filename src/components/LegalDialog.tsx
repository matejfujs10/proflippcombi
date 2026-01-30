import { useLanguage } from "@/lib/LanguageContext";
import { legalTranslations } from "@/lib/legalTranslations";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LegalDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: "terms" | "privacy" | "cookies";
}

const LegalDialog = ({ open, onOpenChange, type }: LegalDialogProps) => {
  const { lang } = useLanguage();
  
  const content = legalTranslations[type];
  const title = content.title[lang];
  const text = content.content[lang];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh]">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl">
            {title}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="prose prose-sm max-w-none">
            <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-foreground">
              {text}
            </pre>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default LegalDialog;
