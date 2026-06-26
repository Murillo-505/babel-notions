function CreateEntityForm({
  entityName,
  isOpen,
  onToggle,
  onSubmit,
  children,
}) {
  return (
    <>
      <button type="button" onClick={onToggle} className="btn-primary mb-6">
        {isOpen ? "Cancelar" : `+ Nova ${entityName}`}
      </button>

      {isOpen && (
        <div className="card mb-8">
          <h2 className="text-xl font-bold mb-4">Nova {entityName}</h2>

          <form onSubmit={onSubmit} className="space-y-4">
            {children}

            <button type="submit" className="btn-primary">
              Criar {entityName}
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default CreateEntityForm;
