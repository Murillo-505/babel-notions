import ShelfRow from "./ShelfRow";

const MAX_SHELVES = 4;

function BookshelfPreview({ library, readOnly = true }) {
  const shelves = library.shelves ?? [];
  const visibleShelves = shelves.slice(0, MAX_SHELVES);
  const hiddenShelves = shelves.length - visibleShelves.length;

  return (
    <div className="library-bookshelf-body space-y-2 p-3">
      {visibleShelves.length === 0 ? (
        <div className="library-shelf-surface flex min-h-[4.5rem] items-center justify-center" />
      ) : (
        visibleShelves.map((shelf) => (
          <ShelfRow key={shelf.id} shelf={shelf} readOnly={readOnly} />
        ))
      )}

      {hiddenShelves > 0 ? (
        <p className="text-center text-[10px] text-zinc-600" aria-hidden="true">
          +{hiddenShelves}
        </p>
      ) : null}
    </div>
  );
}

export default BookshelfPreview;
