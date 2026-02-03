-- Create explicit deny-all RLS policies for booking_submissions table
-- This table contains sensitive PII (emails, IP addresses) for rate limiting
-- It is only accessed by the send-booking Edge Function using SUPABASE_SERVICE_ROLE_KEY
-- which bypasses RLS, so public access should be completely blocked

-- Deny SELECT access
CREATE POLICY "Deny all SELECT access to booking submissions"
ON public.booking_submissions
FOR SELECT
TO anon, authenticated
USING (false);

-- Deny INSERT access (only service role should insert)
CREATE POLICY "Deny all INSERT access to booking submissions"
ON public.booking_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (false);

-- Deny UPDATE access
CREATE POLICY "Deny all UPDATE access to booking submissions"
ON public.booking_submissions
FOR UPDATE
TO anon, authenticated
USING (false);

-- Deny DELETE access
CREATE POLICY "Deny all DELETE access to booking submissions"
ON public.booking_submissions
FOR DELETE
TO anon, authenticated
USING (false);