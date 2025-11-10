import React, { useMemo, useState } from "react";
import { items as allItems, preferJpg, CONTACT } from "./data/items.js";

function Card({ item, onOpen }) {
  const cover = preferJpg(item.images[0]);
  return (
    <article className="card" onClick={() => onOpen(item)}>
      <img className="thumb" alt={item.name} src={cover} onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = item.images[0]; }} />
      <div className="title">
        <span>{item.name}</span>
        <span className="count">{item.images.length} Foto{item.images.length === 1 ? "" : "s"}</span>
      </div>
    </article>
  );
}

function Modal({ item, onClose }) {
  if (!item) return null;
  return (
    <div className="modal open" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-card">
        <div className="modal-header">
          <h2>{item.name}</h2>
          <button className="modal-close" onClick={onClose} aria-label="Schließen">Schließen</button>
        </div>
        <div className="modal-body">
          <div className="thumbs">
            {item.images.map((src) => {
              const jpg = preferJpg(src);
              return (
                <img key={src} loading="lazy" alt={item.name} src={jpg} onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = src; }} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allItems;
    return allItems.filter((it) =>
      it.name.toLowerCase().includes(q) || (it.tags || []).some((t) => t.toLowerCase().includes(q))
    );
  }, [query]);

  const snapUrl = CONTACT.snapchat ? `https://www.snapchat.com/add/${CONTACT.snapchat}` : "#";

  return (
    <>
      <header>
        <h1>Flohmarkt Galerie</h1>
        <p>Einfach auf einen Artikel klicken, um alle Fotos zu sehen.</p>
      </header>
      <div className="toolbar">
        <input
          placeholder="Suchen: Name, Kategorie (z. B. schuhe, hose, jacke)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <main className="grid">
        {filtered.map((item) => (
          <Card key={item.name} item={item} onOpen={setActive} />
        ))}
      </main>
      <Modal item={active} onClose={() => setActive(null)} />

      <div className="chat">
        <a href={snapUrl} target="_blank" rel="noreferrer">Mit mir chatten (Snapchat)</a>
      </div>
    </>
  );
}


