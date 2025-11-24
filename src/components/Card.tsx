/*
    Business card component to display info from a business
*/

interface CardProps {
  name: string;
  position: string;
  businessName: string;
  id: string;
  imgSrc: string;
  className?: string;
}
export function Card({
  name,
  position,
  businessName,
  id,
  imgSrc,
  className,
}: CardProps) {
  return (
    <div
      className={`
        flex flex-col justify-between gap-2 rounded-2xl border border-[#6E9E8F] bg-[#F2F4ED]
        min-w-[493px] max-w-[493px] h-[244px] py-7.5 px-7
        ${className ?? ""}
      `}
    >
      {/* Top half */}
      <div className="flex justify-between gap-2">
        <img src={imgSrc} alt="user_pic" />

        <div className="flex flex-col text-right tracking-widest">
          <span className="text-[#6E9E8FCC] text-xl ">
            {name.toUpperCase()}
          </span>
          <span className="text-[#6E9E8F66] text-sm">
            {position.toUpperCase()}
          </span>
          <span className="text-[#6E9E8F66] text-xs mt-4">{id}</span>
        </div>
      </div>

      {/* Bottom half */}
      <div className="flex justify-between">
        <div className="flex flex-col justify-end gap-2">
          <span className="text-[#6E9E8F] text-2xl font-light">
            {businessName}
          </span>

          {/* Skeleton */}
          <div className="flex flex-col gap-1 ">
            <div className="flex gap-0.5">
              <div className="w-[62px] h-1.5 bg-[#6E9E8F26] rounded-full" />
              <div className="w-[97px] h-1.5 bg-[#6E9E8F26] rounded-full" />
              <div className="w-1.5 h-1.5 bg-[#6E9E8F26] rounded-full" />
              <div className="w-[62px] h-1.5 bg-[#6E9E8F26] rounded-full" />
            </div>
            <div className="flex gap-0.5">
              <div className="w-[201px] h-1.5 bg-[#6E9E8F26] rounded-full" />
              <div className="w-[39px] h-1.5 bg-[#6E9E8F26] rounded-full" />
              <div className="w-[63px] h-1.5 bg-[#6E9E8F26] rounded-full" />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-end">
          {/* Bar code */}
          <div className="flex gap-px">
            <div className="w-0.5 h-5 bg-[#6E9E8F26]" />
            <div className="w-0.5 h-5 bg-[#6E9E8F26]" />
            <div className="w-1.5 h-5 bg-[#6E9E8F26]" />
            <div className="w-[13px] h-5 bg-[#6E9E8F26]" />
            <div className="w-1.5 h-5 bg-[#6E9E8F26]" />
            <div className="w-px h-5 bg-[#6E9E8F26]" />
            <div className="w-0.5 h-5 bg-[#6E9E8F26]" />
            <div className="w-1.5 h-5 bg-[#6E9E8F26]" />
            <div className="w-0.5 h-5 bg-[#6E9E8F26]" />
            <div className="w-1.5 h-5 bg-[#6E9E8F26]" />
            <div className="w-px h-5 bg-[#6E9E8F26]" />
            <div className="w-px h-5 bg-[#6E9E8F26]" />
            <div className="w-0.5 h-5 bg-[#6E9E8F26]" />
            <div className="w-1.5 h-5 bg-[#6E9E8F26]" />
            <div className="w-px h-5 bg-[#6E9E8F26]" />
          </div>
        </div>
      </div>
    </div>
  );
}
