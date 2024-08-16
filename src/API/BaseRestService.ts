interface IBaseRestService {
  get: (
    url: string,
    params?: Record<string, string>
  ) => Promise<Record<string, any>>;
}

export class BaseRestService implements IBaseRestService {
  baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get<T>(url: string, params?: Record<string, string>): Promise<T> {
    const response = await fetch(url, params);
    return BaseRestService.checkResponse<T>(response);
  }

  static checkResponse = <T>(response: Response): Promise<T> => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Failed response");
    }
  };
}
