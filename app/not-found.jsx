import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 text-center bg-white font-sans">
      {/* 404 Блок с кактусом вместо цифры 0 */}
      <div className="flex items-center justify-center select-none mb-6">
        <span className="text-[130px] sm:text-[180px] md:text-[230px] font-black text-[#2e8b2b] leading-none tracking-tight">
          4
        </span>

        <div className="relative w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 mx-1 sm:mx-2 md:mx-4 flex items-center justify-center">
          <img
            src="/cactus.png"
            alt="Cactus 0"
            className="w-full h-full object-contain pointer-events-none drop-shadow-sm"
          />
        </div>

        <span className="text-[130px] sm:text-[180px] md:text-[230px] font-black text-[#2e8b2b] leading-none tracking-tight">
          4
        </span>
      </div>

      {/* Заголовок */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#282828] mb-4 tracking-tight">
        Page Not Found
      </h1>

      {/* Описание */}
      <p className="max-w-md text-sm sm:text-base text-gray-500 font-normal leading-relaxed mb-8">
        We&apos;re sorry, the page you requested could not be found.
        <br className="hidden sm:inline" /> Please go back to the homepage.
      </p>

      {/* Кнопка возврата на главную */}
      <Link
        href="/"
        className="inline-flex items-center justify-center px-10 py-3 rounded-md bg-[#2e8b2b] hover:bg-[#267723] active:scale-[0.98] text-white text-sm sm:text-base font-semibold tracking-wide shadow-sm transition duration-150 ease-in-out cursor-pointer"
      >
        Go Home
      </Link>
    </main>
  );
}