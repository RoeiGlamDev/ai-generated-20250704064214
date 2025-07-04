import Image from 'next/image';

export function Hero() {
  return (
    <div className="bg-black p-4">
      <Image
        src="https://images.pexels.com/photos/6037741/pexels-photo-6037741.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt="Man in glasses and brown jacket relaxing indoors while smoking. Moody atmosphere."
        width={940}
        height={650}
        className="w-full h-96 object-cover"
      />
    </div>
  );
}