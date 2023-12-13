class PromiseTracker {
  private promiseSet = new Set();

  track = async (promise: Promise<any>) => {
    this.promiseSet.add(promise);

    try {
      const result = await promise;

      return result;
    } finally {
      this.promiseSet.delete(promise);
    }
  };

  get promise() {
    return Promise.all(this.promiseSet);
  }
}

export default PromiseTracker;
