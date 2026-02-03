-- Change cleanup_old_booking_submissions to use SECURITY INVOKER instead of SECURITY DEFINER
-- The edge function already uses SUPABASE_SERVICE_ROLE_KEY which bypasses RLS
-- So SECURITY DEFINER is unnecessary and reduces attack surface

CREATE OR REPLACE FUNCTION public.cleanup_old_booking_submissions()
RETURNS void
LANGUAGE plpgsql
SECURITY INVOKER
SET search_path = public
AS $$
BEGIN
  DELETE FROM public.booking_submissions WHERE created_at < now() - interval '24 hours';
END;
$$;

-- Revoke execute from public roles and only allow service role to call it
REVOKE EXECUTE ON FUNCTION public.cleanup_old_booking_submissions() FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.cleanup_old_booking_submissions() FROM anon;
REVOKE EXECUTE ON FUNCTION public.cleanup_old_booking_submissions() FROM authenticated;