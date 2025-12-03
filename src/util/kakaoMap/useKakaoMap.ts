import { useEffect, useState } from 'react';

interface MapProps {
  lat: string | number;
  lng: string | number;
}

function useKakaoMap({ lat, lng }: MapProps) {
  const [map, setMap] = useState<kakao.maps.Map | null>(null);

  useEffect(() => {
    const container = document.getElementById('map');
    if (!container || !lat || !lng) return;

    const latitude = Number(lat);
    const longitude = Number(lng);

    const position = new kakao.maps.LatLng(latitude, longitude);
    
    const options = {
      center: position,
      level: 5,
    };

    const newMap = new kakao.maps.Map(container, options);

    const marker = new kakao.maps.Marker({
      position: position,
    });
    marker.setMap(newMap);


    return () => {
      setMap(null);
    };

  }, [lat, lng]);

  return map;
}

export default useKakaoMap;
