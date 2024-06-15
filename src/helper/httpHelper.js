import axios from 'axios';

const httpHelper = {
  async makeGetRequest(url, errorMessageBuilder = (res) => res, opts = {}) {
    const headers = {
      Accept: 'application/json',
    };

    const options = {
      headers,
      timeout: 120000,
      ...opts,
    };

    const instance = axios.create(options);

    try {
      const response = await instance.get(url);
      return response;
    } catch (error) {
      return this.getErrorResponse(error, errorMessageBuilder);
    }
  },

  async makePostRequest(
    url,
    baseUrl,
    postBody,
    errorMessageBuilder = (res) => res
  ) {
    let headers = {
      'Content-Type': 'application/json',
    };

    const instance = axios.create({
      baseURL: baseUrl,
      headers: headers,
    });
    let body = JSON.stringify(postBody);
    return instance.post(url, body).catch((error) => {
      return this.getErrorResponse(error, errorMessageBuilder, () =>
        this.makePostRequest(url, baseUrl, postBody, errorMessageBuilder)
      );
    });
  },

  getErrorResponse(error, errorMessageBuilder) {
    let response = {
      errorData: { message: error.message },
      hasError: true,
    };

    if (error.response) {
      response = {
        errorData: error.response.data,
        hasError: true,
        ...error.response,
      };
    } else if (error.request) {
      response = { errorData: {}, hasError: true, ...error.request };
    }

    const errorMessage = errorMessageBuilder(response);
    response.errorData = { ...response.errorData, ...errorMessage };
    return response;
  },
};

export default httpHelper;
