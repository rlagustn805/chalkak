import { regionData } from "../../array";

export default function Region() {
  return (
    <div className="mt-8 text-center">
      <b className="text-2xl font-semibold">어디서 사진을 찍어드릴까요?</b>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {regionData.map((r) => (
          <div
            key={r.id}
            className="p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg 
                       transition-all duration-200 cursor-pointer text-gray-700 font-medium 
                       flex items-center justify-center bg-white hover:bg-gray-100">
            {r.content}
          </div>
        ))}
      </div>
    </div>
  );
}
