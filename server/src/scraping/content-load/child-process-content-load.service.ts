import { Injectable } from "@nestjs/common";
import ContentLoadService from "./content-load.interface";
import { exec } from "child_process";

@Injectable()
class ChildProcessContentLoadService implements ContentLoadService {
  async load(
    url: string,
    { signal }: { signal?: AbortSignal } = {},
  ): Promise<string> {
    const command =
      `curl '${url}' \\\n` +
      "  -H 'Upgrade-Insecure-Requests: 1' \\\n" +
      "  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \\\n" +
      '  -H \'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"\' \\\n' +
      "  -H 'sec-ch-ua-mobile: ?0' \\\n" +
      "  -H 'sec-ch-ua-platform: \"macOS\"' \\\n" +
      "  --compressed";

    return new Promise((resolve, reject) => {
      const child = exec(command, (error, stdout, stderr) => {
        if (error !== null) {
          reject(error);
          return;
        }

        resolve(stdout);
      });
    });
  }
}

export default ChildProcessContentLoadService;
