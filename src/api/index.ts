const API_KEY = import.meta.env.VITE_SERVICE_KEY;
const TOURISM_INFORMATION_API_URL = import.meta.env.VITE_TOURISM_INFORMATION_SERVICE_PATH;
const PHOTO_API_URL = import.meta.env.VITE_TOURISM_PHOTO_SERVICE_PATH;
const DURUNUBI_API_URL = import.meta.env.VITE_DURUNUBI_SERVICE_PATH;
const DURUNUBI_GPX_URL = import.meta.env.VITE_DURUNUBI_GPX_PATH;

export const tourismInformationApiClient = createApiClient(TOURISM_INFORMATION_API_URL);
export const photoApiClient = createApiClient(PHOTO_API_URL);
export const durunubiApiClient = createApiClient(DURUNUBI_API_URL);
export const gpxApiClient = createApiClient(DURUNUBI_GPX_URL);

if (!TOURISM_INFORMATION_API_URL) {
  throw new Error('ATTRACTION_API 경로 환경변수가 설정되지 않았습니다.');
}

interface FetchOptions extends Omit<RequestInit, 'body'> {
  headers?: Record<string, string>;
  params?: Record<string, string | number | boolean>;
}

const commonParams = {
  MobileOS: 'ETC',
  MobileApp: 'AppTest',
  _type: 'json',
  serviceKey: API_KEY,
} as const;


function createApiClient(BASE_URL: string) {
  return {
    get: async <T>(endPoint: string, options: FetchOptions = {}) => {
      const response = await sendRequest<{ response: { body: T } }>(
        `${BASE_URL}/${endPoint}`, 
        { ...options, method: 'GET' }
      );
      return response.response.body;
    },
    post: async <T>(endPoint: string, options: FetchOptions = {}) => {
      const response = await sendRequest<{ response: { body: T } }>(
        `${BASE_URL}/${endPoint}`, 
        { ...options, method: 'POST' }
      );
      return response.response.body;
    },
    put: async <T>(endPoint: string, options: FetchOptions = {}) => {
      const response = await sendRequest<{ response: { body: T } }>(
        `${BASE_URL}/${endPoint}`, 
        { ...options, method: 'PUT' }
      );
      return response.response.body;
    },
    delete: async <T>(endPoint: string, options: FetchOptions = {}) => {
      const response = await sendRequest<{ response: { body: T } }>(
        `${BASE_URL}/${endPoint}`,
        { ...options, method: 'DELETE' }
      );
      return response.response.body;
    },
    patch: async <T>(endPoint: string, options: FetchOptions = {}) => {
      const response = await sendRequest<{ response: { body: T } }>(
        `${BASE_URL}/${endPoint}`,
        { ...options, method: 'PATCH' }
      );
      return response.response.body;
    },
  };
}


async function sendRequest<T = unknown>(
  url: string,
  options: FetchOptions = {},
  timeout: number = 10000,
): Promise<T> {
  const { headers, method, params, ...restOptions } = options;

  if (!method) {
    throw new Error('HTTP method가 설정되지 않았습니다.');
  }

  const mergedParams = { ...commonParams, ...params };

  if (mergedParams && Object.keys(mergedParams).length > 0) {
    const query = new URLSearchParams(
      Object.entries(mergedParams).reduce(
        (acc, [key, val]) => {
          acc[key] = String(val);
          return acc;
        },
        {} as Record<string, string>,
      ),
    ).toString();
    url += `?${query}`;
  }

  const abortController = new AbortController();
  const timeoutId = setTimeout(() => {
    abortController.abort();
  }, timeout);

  try {
    const fetchOptions: RequestInit = {
      headers,
      method,
      signal: abortController.signal,
      ...restOptions,
    };

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      throw new Error(`API 요청 실패: ${response.status} ${response.statusText}`);
    }

    return await response.json();
    
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error('요청 시간이 초과되었습니다.');
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}
