// assets/js/supabase.js
// استدعاء مكتبة Supabase عبر CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// ضع هنا بيانات مشروعك الفعلي من لوحة تحكم Supabase (Settings -> API)
const SUPABASE_URL = "https://fwpwiptdwwdwbvzebmot.supabase.co";
const SUPABASE_ANON_KEY = 'sb_publishable_CIc-B_X0h7G1H2FR3eG73w_wv2d41W0';

// إنشاء وثيقة الاتصال الموحدة
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
