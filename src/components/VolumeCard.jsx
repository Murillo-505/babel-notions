function VolumeCard({ title }) {
  return(
    <div className="bg-zinc-900 border border-zinc-800 round-xl p-4 hover:bg-zinc-800 transition">
      <h3 className="font-semibold">
        {title}
      </h3>
    </div>
  )
}

export default VolumeCard