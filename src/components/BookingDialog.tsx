import { useState } from "react";
import { format } from "date-fns";
import { sl, enUS, de, hr } from "date-fns/locale";
import { CalendarIcon, Send, Loader2, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLanguage } from "@/lib/LanguageContext";
import { legalTranslations } from "@/lib/legalTranslations";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import LegalDialog from "./LegalDialog";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookingDialog = ({ open, onOpenChange }: BookingDialogProps) => {
  const { lang } = useLanguage();
  const t = legalTranslations.booking;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const getDateLocale = () => {
    switch (lang) {
      case "SL": return sl;
      case "DE": return de;
      case "HR": return hr;
      default: return enUS;
    }
  };

  const dateLocale = getDateLocale();

  const handleClose = () => {
    onOpenChange(false);
    // Reset success state after dialog closes
    setTimeout(() => setIsSuccess(false), 300);
  };

  const formSchema = z.object({
    firstName: z.string().min(1, t.requiredField[lang]),
    lastName: z.string().min(1, t.requiredField[lang]),
    email: z.string().email(t.invalidEmail[lang]),
    phone: z.string().min(1, t.requiredField[lang]),
    departureDate: z.date({ required_error: t.requiredField[lang] }),
    arrivalDate: z.date({ required_error: t.requiredField[lang] }),
    passengers: z.string().min(1, t.requiredField[lang]),
    message: z.string().optional(),
    agreeTerms: z.boolean().refine((val) => val === true, {
      message: t.mustAgree[lang],
    }),
  });

  type FormData = z.infer<typeof formSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      passengers: "",
      agreeTerms: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const { data: response, error } = await supabase.functions.invoke('send-booking', {
        body: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          departureDate: format(data.departureDate, "PPP", { locale: dateLocale }),
          arrivalDate: format(data.arrivalDate, "PPP", { locale: dateLocale }),
          passengers: data.passengers,
          message: data.message || "",
          lang: lang,
        },
      });

      if (error) {
        throw error;
      }

      setIsSuccess(true);
      form.reset();
    } catch (error) {
      // Silently handle error - fallback to mailto
      const subject = encodeURIComponent(`Rezervacija PROFLIPP KOMBI - ${data.firstName} ${data.lastName}`);
      const body = encodeURIComponent(
        `Ime in priimek: ${data.firstName} ${data.lastName}\n` +
        `E-pošta: ${data.email}\n` +
        `Telefon: ${data.phone}\n` +
        `Datum odhoda: ${format(data.departureDate, "PPP", { locale: dateLocale })}\n` +
        `Datum prihoda: ${format(data.arrivalDate, "PPP", { locale: dateLocale })}\n` +
        `Število potnikov: ${data.passengers}\n` +
        `Sporočilo: ${data.message || "-"}`
      );
      window.location.href = `mailto:info@proflipp.com?subject=${subject}&body=${body}`;
      
      setIsSuccess(true);
      form.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-8 space-y-6">
              <div className="rounded-full bg-primary/10 p-4">
                <CheckCircle2 className="h-16 w-16 text-primary" />
              </div>
              <div className="text-center space-y-2">
                <h2 className="font-heading text-2xl font-bold text-primary">
                  {t.thankYouTitle[lang]}
                </h2>
                <p className="text-muted-foreground max-w-sm">
                  {t.thankYouMessage[lang]}
                </p>
              </div>
              <Button
                onClick={handleClose}
                className="bg-gradient-cta hover:opacity-90"
              >
                {t.close[lang]}
              </Button>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="font-heading text-2xl text-center">
                  {t.title[lang]}
                </DialogTitle>
                <p className="text-muted-foreground text-center text-sm">
                  {t.subtitle[lang]}
                </p>
              </DialogHeader>

              <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Name fields */}
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.firstName[lang]}</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.lastName[lang]}</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Contact fields */}
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.email[lang]}</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.phone[lang]}</FormLabel>
                      <FormControl>
                        <Input type="tel" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Date fields */}
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="departureDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>{t.departureDate[lang]}</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP", { locale: dateLocale })
                              ) : (
                                <span>{t.selectDate[lang]}</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date()}
                            initialFocus
                            className="p-3 pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="arrivalDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>{t.arrivalDate[lang]}</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP", { locale: dateLocale })
                              ) : (
                                <span>{t.selectDate[lang]}</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date()}
                            initialFocus
                            className="p-3 pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Passengers */}
              <FormField
                control={form.control}
                name="passengers"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.passengers[lang]}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={t.selectPassengers[lang]} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {[1, 2, 3, 4, 5].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? t.person[lang] : t.persons[lang]}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.message[lang]}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t.messagePlaceholder[lang]}
                        className="resize-none"
                        rows={3}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Terms checkbox */}
              <FormField
                control={form.control}
                name="agreeTerms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm font-normal cursor-pointer">
                        {t.agreeTerms[lang]}{" "}
                        <button
                          type="button"
                          onClick={() => setTermsOpen(true)}
                          className="text-primary underline hover:text-primary/80"
                        >
                          {t.termsLink[lang]}
                        </button>{" "}
                        {t.and[lang]}{" "}
                        <button
                          type="button"
                          onClick={() => setPrivacyOpen(true)}
                          className="text-primary underline hover:text-primary/80"
                        >
                          {t.privacyLink[lang]}
                        </button>
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              {/* Submit button */}
              <Button
                type="submit"
                className="w-full bg-gradient-cta hover:opacity-90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Send className="mr-2 h-4 w-4" />
                )}
                {t.submit[lang]}
              </Button>
              </form>
            </Form>
            </>
          )}
        </DialogContent>
      </Dialog>

      <LegalDialog
        open={termsOpen}
        onOpenChange={setTermsOpen}
        type="terms"
      />
      <LegalDialog
        open={privacyOpen}
        onOpenChange={setPrivacyOpen}
        type="privacy"
      />
    </>
  );
};

export default BookingDialog;
