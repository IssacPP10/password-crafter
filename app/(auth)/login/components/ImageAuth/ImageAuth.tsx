import Image from 'next/image';

export function ImageAuth() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src="https://readymadeui.com/login-image.webp"
        className="bg-cover bg-center bg-no-repeat"
        alt="Dining Experience"
        width={500} // Añadir un ancho adecuado
        height={300} // Añadir una altura adecuada
      />
    </div>
  );
}
