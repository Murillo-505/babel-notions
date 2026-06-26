import BookSpine from "./BookSpine";

const MAX_SPINES = 24;

function ShelfRow({ shelf, readOnly = false }) {
  const visibleVolumes = (shelf.volumes ?? []).slice(0, MAX_SPINES);
  const hiddenCount = (shelf.volumes?.length ?? 0) - visibleVolumes.length;

  return (
    <div className="library-shelf-row">
      <div className="library-shelf-surface flex min-h-[3.25rem] items-end gap-0.5 px-1 pb-1 pt-2">
        {visibleVolumes.map((volume) => (
          <BookSpine key={volume.id} volume={volume} readOnly={readOnly} />
        ))}

        {hiddenCount > 0 ? (
          <span
            aria-hidden="true"
            className="mb-0.5 w-5 shrink-0 rounded-sm border border-zinc-700/80 bg-zinc-800/80"
          />
        ) : null}
      </div>
    </div>
  );
}

export default ShelfRow;
