import Image from "next/image";

const images = Array.from(Array(10).keys());

/*
<div>
    <p className="font-sans text-lg text-center font-bold my-3">Images</p>

    <div className="grid md:grid-cols-2 gap-2 h-full">
    {images.map((key) => (
        <div
        key={key}
        className="relative flex flex-col md:flex-row justify-between align-middle"
        >
        <div className="flex-shrink-1">
            <Image
            src="/dashboard/test.jpg"
            alt="dog"
            height={200}
            width={300}
            objectFit="contain"
            />
        </div>

        <div className="w-full p-3 bg-slate-200">
            <h2 className="text-pink-400">Golden Retriever</h2>

            <p> This is a very pink dog that can bark at you.</p>
        </div>
        </div>
    ))}
    </div>
</div>
*/

export default function Page() {
  return <p>Dashboard Page</p>;
}
