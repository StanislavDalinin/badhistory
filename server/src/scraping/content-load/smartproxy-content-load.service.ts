import fetch from "node-fetch";
import ContentLoadService from "./content-load.interface";
import { endsWith } from "lodash";

type SmartproxyResult = {
  content: string;
  status_code: number;
  url: string;
  task_id: string;
  created_at: string;
  updated_at: string;
};

type SmartproxyResponse = {
  results: SmartproxyResult[];
};

const htmlEmptyWrapperStartString = "<html><head></head><body>";
const htmlEmptyWrapperEndString = "</body></html>";

export class SmartproxyContentLoadService implements ContentLoadService {
  async load(
    url: string,
    { signal }: { signal?: AbortSignal } = {},
  ): Promise<string> {
    const response = await fetch(
      "https://scraper-api.smartproxy.com/v2/scrape",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Basic VTAwMDAxMzg5NjQ6UFcxODJmZTkxZjk4NjUyMWEwNjdmOGIwYzU2Yjk3YmFlOGQ=",
        },
        body: JSON.stringify({
          target: "universal",
          url: url,
          locale: "en-us",
          // geo: "United States",
          device_type: "desktop",
          headless: "html",
        }),
        signal,
      },
    ).then((response) => response.json() as Promise<SmartproxyResponse>);

    try {
      const [result] = response.results;

      if (result.status_code !== 200) {
        throw result;
      }

      const { content } = result;

      if (
        content.startsWith(htmlEmptyWrapperStartString) &&
        content.endsWith(htmlEmptyWrapperEndString)
      ) {
        return content.substring(
          htmlEmptyWrapperStartString.length,
          content.length - htmlEmptyWrapperEndString.length,
        );
      }

      return content;
    } catch (error) {
      console.log(response);
      throw error;
    }
  }
}
