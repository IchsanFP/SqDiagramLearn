export default function SectionTitle({ title }: { title: string }) {
    return (
      <h1 className="text-xl md:text-2xl px-6 font-bold text-black font-poppins text-center">
        {title}
      </h1>
    );
  }
  