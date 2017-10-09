# Contributing

## Tips and Tricks

### Error Handling with Axios

As described in the [axios documentation](https://github.com/axios/axios#handling-errors), when a request fails, it returns an `error` object that wraps the response. This means that errors need to be handled like so:

```
axios.get(url)
  .then((response) => { console.log('Data:', response.data); })
  .catch((error) => { console.log('Error:', error.response.data); });
```
