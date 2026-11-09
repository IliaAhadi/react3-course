// session 6
export default function Banner({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center bg-linear-to-r from-[#fb7185] via-[#ef4444] to-[#ea580c] h-90">
      <h3 className="text-orange-400 text-shadow-md text-shadow-orange-950 text-7xl font-semibold">
        {title}
      </h3>
    </div>
  );
}
// end of session 6
