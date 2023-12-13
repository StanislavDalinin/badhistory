type ProcessRequest<T = any> = {
  process: () => Promise<T>;
  resolve: (value: T) => void;
  reject: (reason?: any) => void;
};

const ProcessRequestQueue: ProcessRequest[] = [];

const concurrencyLimit = 2;

let runningProcessCount: number = 0;

const runProcess = ({ process, resolve, reject }: ProcessRequest) => {
  const promise = process();

  promise.finally(cont).catch(reject).then(resolve);
};

const cont = () => {
  if (ProcessRequestQueue.length === 0) {
    runningProcessCount--;

    return;
  }

  runProcess(ProcessRequestQueue.shift()!);
};

export const concurrencyLimitedRun = (process: () => Promise<any>) => {
  let resolve: (value: unknown) => void;
  let reject: (reason?: any) => void;

  const promise = new Promise((localResolve, localRreject) => {
    resolve = localResolve;
    reject = localRreject;
  });

  const processRequest: ProcessRequest = {
    process,
    resolve: resolve!,
    reject: reject!,
  };

  if (runningProcessCount < concurrencyLimit) {
    runningProcessCount++;

    runProcess(processRequest);

    return promise;
  }

  ProcessRequestQueue.push(processRequest);

  return promise;
};
