-- Create submission log table for rate limiting
CREATE TABLE public.booking_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_address TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create indexes for efficient rate limit checks
CREATE INDEX idx_booking_submissions_ip ON public.booking_submissions(ip_address, created_at);
CREATE INDEX idx_booking_submissions_email ON public.booking_submissions(email, created_at);

-- Enable RLS (service role will bypass for edge function operations)
ALTER TABLE public.booking_submissions ENABLE ROW LEVEL SECURITY;

-- No public policies - only service role can access (edge function uses service role key)
-- This prevents any client-side access to the rate limit data

-- Create function to clean up old submissions (older than 24 hours)
CREATE OR REPLACE FUNCTION public.cleanup_old_booking_submissions()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  DELETE FROM public.booking_submissions WHERE created_at < now() - interval '24 hours';
END;
$$;