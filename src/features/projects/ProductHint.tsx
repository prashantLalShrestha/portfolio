export function ProductHint({ src }: { src: string }) {
  return <img className="product-hint" src={src} alt="" loading="lazy" decoding="async" draggable={false} onError={event => { event.currentTarget.hidden = true; }} />;
}
