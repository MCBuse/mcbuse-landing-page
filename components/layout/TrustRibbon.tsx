const items = ["MVP · pilot preparation", "Berlin & Munich", "4 core systems", "Licensed partners only"];

export function TrustRibbon() {
  return (
    <div className="grid grid-cols-2 divide-x divide-near-black/15 bg-brand sm:grid-cols-4">
      {items.map((item) => (
        <div key={item} className="px-4 py-3 text-center font-mono text-xs text-near-black">
          {item}
        </div>
      ))}
    </div>
  );
}
