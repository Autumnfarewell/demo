import React from 'react'
import './styles.less'

function parseUrl(url) {
  const parsedUrl = new URL(url);

  // 解析的URL 协议 主机 路径
  const protocol = parsedUrl.protocol.replace(':', '');
  const host = parsedUrl.hostname;
  const path = parsedUrl.pathname;
  // 删除 #
  const hash = parsedUrl.hash.substring(1);

  // 转 searchParams 
  const queryParams = parsedUrl.searchParams;
  const params = {};
  for (const [key, value] of queryParams.entries()) {
    if (params[key]) {
      if (Array.isArray(params[key])) {
        params[key].push(value);
      } else {
        params[key] = [params[key], value];
      }
    } else {
      params[key] = value;
    }
  }

  return {
    protocol,
    host,
    path,
    params,
    hash
  };
}

export default function Home (props) {
  const url = "http://www.bbkedu.com/product/list?id=123456&sort=discount&name=a&name=b#title"
  const parsedUrlObj = parseUrl(url)

  console.log(parsedUrlObj)

  return (
    <div className="App">
      <pre>{JSON.stringify(parsedUrlObj, null, '\t')}</pre>
    </div>
  )
}





