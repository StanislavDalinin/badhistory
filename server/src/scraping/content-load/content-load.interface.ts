import { Injectable } from "@nestjs/common";

@Injectable()
abstract class ContentLoadService {
  abstract load(
    url: string,
    options?: { signal?: AbortSignal },
  ): Promise<string>;
}

export default ContentLoadService;
