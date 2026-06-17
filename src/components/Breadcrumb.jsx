import { Link } from "react-router-dom";

function Breadcrumb({ items }) {
  return (
    <div className="flex items-center gap-2 text-sm text-zinc-400 mb-6 flex-wrap">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.path ? (
            <Link
              to={item.path}
              className="hover:text-white transition cursor-pointer"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-white">{item.label}</span>
          )}

          {index < items.length - 1 && <span>{">"}</span>}
        </div>
      ))}
    </div>
  );
}

export default Breadcrumb;
