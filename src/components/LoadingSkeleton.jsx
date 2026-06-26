function LoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-8 bg-zinc-800 rounded-lg w-1/3" />
      <div className="h-4 bg-zinc-800 rounded-lg w-2/3" />
      <div className="card h-32" />
      <div className="grid grid-cols-3 gap-4">
        <div className="card-sm h-24" />
        <div className="card-sm h-24" />
        <div className="card-sm h-24" />
      </div>
    </div>
  );
}

export default LoadingSkeleton;
