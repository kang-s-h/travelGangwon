import { useEffect, useState } from 'react';

interface MapProps {
  lat: string | number;
  lng: string | number;
}

function useKakaoMap({ lat, lng }: MapProps) {
  const [map, setMap] = useState<kakao.maps.Map | null>(null);

  useEffect(() => {
  if (!window.kakao || !window.kakao.maps) return;
  
  const container = document.getElementById('map');
  if (!container || !lat || !lng) return;

  const latitude = Number(lat);
  const longitude = Number(lng);

  const position = new window.kakao.maps.LatLng(latitude, longitude);
  
  const options = {
    center: position,
    level: 5,
  };

  const newMap = new window.kakao.maps.Map(container, options);
  const marker = new window.kakao.maps.Marker({ position });
  marker.setMap(newMap);

  setMap(newMap);
}, [lat, lng]);

  return map;
}

export default useKakaoMap;
