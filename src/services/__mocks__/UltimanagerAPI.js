class MockAPI {
  /**
   * Assume the request will succeed and return the expected data.
   */
  static register(userData) {
    return Promise.resolve({ email: userData.email });
  }
}


export default MockAPI;
