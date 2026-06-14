type ColoredIconProps = {
  src: string;
  className?: string;
};

export default function ColoredIcon({ src, className = "" }: ColoredIconProps) {
  return (
    <div
      aria-hidden
      className={`absolute bg-[#839958] mask-(--icon-mask) mask-contain mask-no-repeat mask-center [-webkit-mask-image:var(--icon-mask)] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center] ${className}`}
      style={{ ["--icon-mask" as string]: `url(${src})` }}
    />
  );
}
