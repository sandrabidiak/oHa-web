import serviceConstants from '../constants/serviceConstants';

export function getProxyUrl(url) {
  if(url) {
    let proxyUrl = '';
    const urlArrayHttps = url.split('https://');
    const urlArrayHttp = url.split('http://')
    if(urlArrayHttps.length > 1) {
      proxyUrl = serviceConstants.proxyUrl + urlArrayHttps[1];
    } else if(urlArrayHttp.length > 1) {
      proxyUrl = serviceConstants.proxyUrl + urlArrayHttp[1];
    } else {
      proxyUrl = url;
    }
    return proxyUrl;
  } else {
    return url;
  }
}
