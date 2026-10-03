-- ============================================================
--  Derman Derneği — veritabanı kurulumu
--  Supabase panelinde:  SQL Editor  →  New query  →  yapıştır  →  Run
--  Tek seferde çalıştırılır; tekrar çalıştırmak güvenlidir.
-- ============================================================

-- ------------------------------------------------------------
--  PROJELER
-- ------------------------------------------------------------
create table if not exists public.projects (
  id          uuid primary key default gen_random_uuid(),
  slug        text unique not null,
  title       text not null,
  area        text not null,
  summary     text not null,
  -- her eleman bir paragraf
  body        text[] not null default '{}',
  image       text,
  gallery     text[] not null default '{}',
  featured    boolean not null default false,
  -- küçük sayı önce listelenir
  position    integer not null default 0,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create index if not exists projects_position_idx on public.projects (position, created_at desc);
create index if not exists projects_area_idx on public.projects (area);

-- updated_at otomatik güncellensin
create or replace function public.touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists projects_touch_updated_at on public.projects;
create trigger projects_touch_updated_at
  before update on public.projects
  for each row execute function public.touch_updated_at();

-- ------------------------------------------------------------
--  FORM MESAJLARI  (iletişim + gönüllü başvuruları)
-- ------------------------------------------------------------
create table if not exists public.messages (
  id          uuid primary key default gen_random_uuid(),
  form_type   text not null default 'contact',   -- contact | volunteer
  name        text not null,
  email       text,
  phone       text,
  subject     text,
  message     text not null,
  is_read     boolean not null default false,
  created_at  timestamptz not null default now()
);

create index if not exists messages_created_at_idx on public.messages (created_at desc);
create index if not exists messages_unread_idx on public.messages (is_read) where is_read = false;

-- ------------------------------------------------------------
--  GÜVENLİK (Row Level Security)
--
--  Her iki tabloda da RLS açık.
--  * projects: herkes OKUYABİLİR (site içeriği), kimse yazamaz.
--  * messages: hiç kimseye politika verilmez → anonim anahtarla
--    ne okunur ne yazılır. Kişisel veri içerdiği için (ad, e-posta,
--    telefon) yalnızca sunucudaki service_role anahtarı erişir;
--    o anahtar RLS'i atlar ve tarayıcıya asla gönderilmez.
-- ------------------------------------------------------------
alter table public.projects enable row level security;
alter table public.messages enable row level security;

drop policy if exists "projeler herkese acik okunur" on public.projects;
create policy "projeler herkese acik okunur"
  on public.projects for select
  to anon, authenticated
  using (true);

-- messages için bilerek HİÇBİR politika tanımlanmadı.

-- ------------------------------------------------------------
--  GÖRSEL DEPOSU
--  Proje fotoğrafları bu kovada tutulur. Okuma herkese açık,
--  yükleme yalnızca sunucudan (service_role) yapılır.
-- ------------------------------------------------------------
insert into storage.buckets (id, name, public)
values ('proje-gorselleri', 'proje-gorselleri', true)
on conflict (id) do nothing;

drop policy if exists "proje gorselleri herkese acik okunur" on storage.objects;
create policy "proje gorselleri herkese acik okunur"
  on storage.objects for select
  to anon, authenticated
  using (bucket_id = 'proje-gorselleri');
