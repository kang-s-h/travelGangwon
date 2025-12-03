import type { RoomInfoItem } from "@/api/TourismInformationService/entity";

interface RoomInfoProps {
  rooms: RoomInfoItem[];
}
export default function AccommodationRoomList({ rooms }: RoomInfoProps) {
  if (rooms.length === 0) return null;

  return (
    <div className="space-y-3 rounded-2xl bg-white/90 p-4 shadow-sm ring-1 ring-slate-200/70">
      <p className="text-sm font-semibold text-slate-900">
        객실 정보 ({rooms.length}개)
      </p>
      <div className="flex max-h-64 flex-col gap-2 overflow-y-auto pr-1 text-xs">
        {rooms.map((room, index) => (
          <div key={`${room.roomcode || 'room'}-${index}`} className="flex flex-col gap-1 rounded-xl bg-slate-50 px-3 py-2">
            <p className="font-medium text-slate-900">{
              room.roomtitle}
            </p>
            <p className="text-slate-600">
              기준 {room.roombasecount}명 / 최대 {room.roommaxcount}명
            </p>
            {(room.roomoffseasonminfee1 || room.roompeakseasonminfee1) && (
              <p className="text-slate-600">
                비수기 {room.roomoffseasonminfee1 || "-"}원 / 성수기 {room.roompeakseasonminfee1 || "-"}원
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
