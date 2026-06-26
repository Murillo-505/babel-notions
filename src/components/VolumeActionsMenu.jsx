import { useEffect, useRef, useState } from "react";

function ActionsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M10 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 14a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
    </svg>
  );
}

function VolumeActionsMenu({
  isDeleting,
  onExportText,
  onExportMarkdown,
  onStartDelete,
  onCancelDelete,
  onConfirmDelete,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;

    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);

        if (isDeleting) {
          onCancelDelete?.();
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen, isDeleting, onCancelDelete]);

  return (
    <div ref={menuRef} className="entity-actions-menu relative shrink-0">
      <button
        type="button"
        className="entity-actions-trigger flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800/80 text-zinc-300 transition-colors duration-200 hover:border-zinc-600 hover:bg-zinc-800 hover:text-zinc-100 cursor-pointer"
        aria-label="Ações do volume"
        aria-expanded={menuOpen}
        aria-haspopup="menu"
        onClick={() => setMenuOpen((current) => !current)}
      >
        <ActionsIcon />
      </button>

      {menuOpen ? (
        <div
          className="entity-actions-dropdown absolute right-0 top-full z-20 mt-1 min-w-[11rem] overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 py-1 shadow-xl"
          role="menu"
        >
          {isDeleting ? (
            <>
              <p className="px-3 py-2 text-xs text-zinc-400">Excluir volume?</p>
              <button
                type="button"
                role="menuitem"
                className="entity-actions-item entity-actions-item-danger w-full px-3 py-2 text-left text-sm"
                onClick={() => {
                  onConfirmDelete?.();
                  setMenuOpen(false);
                }}
              >
                Sim, excluir
              </button>
              <button
                type="button"
                role="menuitem"
                className="entity-actions-item w-full px-3 py-2 text-left text-sm"
                onClick={() => {
                  onCancelDelete?.();
                  setMenuOpen(false);
                }}
              >
                Cancelar
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                role="menuitem"
                className="entity-actions-item w-full px-3 py-2 text-left text-sm"
                onClick={() => {
                  onExportText?.();
                  setMenuOpen(false);
                }}
              >
                Exportar .txt
              </button>
              <button
                type="button"
                role="menuitem"
                className="entity-actions-item w-full px-3 py-2 text-left text-sm"
                onClick={() => {
                  onExportMarkdown?.();
                  setMenuOpen(false);
                }}
              >
                Exportar .md
              </button>
              <button
                type="button"
                role="menuitem"
                className="entity-actions-item entity-actions-item-danger w-full px-3 py-2 text-left text-sm"
                onClick={() => onStartDelete?.()}
              >
                Excluir
              </button>
            </>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default VolumeActionsMenu;
