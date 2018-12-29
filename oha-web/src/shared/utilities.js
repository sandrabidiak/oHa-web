import serviceConstants from '../constants/serviceConstants';

export function getProxyUrl(url) {
  if(url) {
    let proxyUrl = '';
    const urlArray = url.split('https://');
    if(urlArray.length > 1) {
      proxyUrl = serviceConstants.proxyUrl + urlArray[1];
    } else {
      proxyUrl = url;
    }
    return proxyUrl;
  } else {
    return url;
  }
}
