const items = ["MVP · pilot preparation", "Berlin & Munich", "4 core systems", "Licensed partners only"];

export function TrustRibbon() {
  return (
    <div className="grid grid-cols-2 divide-x divide-white/15 bg-brand sm:grid-cols-4">
      {items.map((item) => (
        <div key={item} className="px-2 py-3 text-center font-mono text-[11px] text-white sm:px-4 sm:text-xs">
          {item}
        </div>
      ))}
    </div>
  );
}
