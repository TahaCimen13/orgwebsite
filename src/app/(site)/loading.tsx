export default function Loading() {
  return (
    <div className="container-x flex min-h-[50vh] items-center justify-center py-24">
      <div className="flex flex-col items-center gap-4">
        <span
          className="h-9 w-9 animate-spin rounded-full border-2 border-sand-300 border-t-clay-600"
          aria-hidden="true"
        />
        <p className="text-[14px] text-ink-400">Yükleniyor…</p>
      </div>
    </div>
  );
}
