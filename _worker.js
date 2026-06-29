import { connect as 连接 } from 'cloudflare:sockets';
// 兼容日期2026.1.20
const 基础64文本解码器 = new TextDecoder();
function 解码64(文本) {
  const 二进制 = atob(文本);
  const 字节 = new Uint8Array(二进制.length);
  for (let 索引 = 0; 索引 < 二进制.length; 索引++) 字节[索引] = 二进制.charCodeAt(索引);
  return 基础64文本解码器.decode(字节);
}

const 错误_无效数据 = 解码64('aW52YWxpZCBkYXRh');
const 错误_无效用户 = 解码64('aW52YWxpZCB1c2Vy');
const 错误_不支持命令 = 解码64('Y29tbWFuZCBpcyBub3Qgc3VwcG9ydGVk');
const 错误_仅支持DNS_UDP = 解码64('VURQIHByb3h5IG9ubHkgZW5hYmxlIGZvciBETlMgd2hpY2ggaXMgcG9ydCA1Mw==');
const 错误_无效地址类型 = 解码64('aW52YWxpZCBhZGRyZXNzVHlwZQ==');
const 错误_空地址 = 解码64('YWRkcmVzc1ZhbHVlIGlzIGVtcHR5');
const 错误_无效标识字符串 = 解码64('U3RyaW5naWZpZWQgaWRlbnRpZmllciBpcyBpbnZhbGlk');
const 错误_SOCKS格式无效 = 解码64('SW52YWxpZCBTT0NLUyBhZGRyZXNzIGZvcm1hdA==');
const 错误_SOCKS认证缺失 = 解码64('cGxlYXNlIHByb3ZpZGUgdXNlcm5hbWUvcGFzc3dvcmQ=');

const 日志_流关闭 = 解码64('c3RyZWFtIGNsb3NlZA==');
const 日志_流中止 = 解码64('c3RyZWFtIGFib3J0');
const 日志_管道错误 = 解码64('c3RyZWF0IHBpcGUgZXJyb3I=');
const 日志_连接成功 = 解码64('Y29ubmVjdGVk');
const 日志_重试错误 = 解码64('cmV0cnkgZXJy');
const 日志_关闭错误 = 解码64('Y2xvc2UgZXJy');
const 日志_远程关闭 = 解码64('cmVtb3RlIGNsb3NlLCBkYXRhOg==');
const 日志_远程中止 = 解码64('cmVtb3RlIGFib3J0');
const 日志_传输错误 = 解码64('dHJhbnNmZXIgZXJyb3I=');
const 日志_DNS错误 = 解码64('ZG5zIGVycjo=');
const 日志_DNS成功 = 解码64('ZG5zIHJlc29sdmUgc3VjY2Vzczo=');
const 日志_套接字错误 = 解码64('c29ja2V0IGVycg==');
const 日志_流取消 = 解码64('c3RyZWF0IGNhbmNlbDo=');
const 日志_套接字关闭 = 解码64('c29ja2V0IGNsb3NlZA==');
const 日志_发送握手 = 解码64('c2VudCBzb2NrcyBncmVldGluZw==');
const 日志_版本错误 = 解码64('c29ja3Mgc2VydmVyIHZlcnNpb24gZXJyb3I=');
const 日志_无认证方法 = 解码64('bm8gYWNjZXB0YWJsZSBtZXRob2Rz');
const 日志_需要认证 = 解码64('c29ja3Mgc2VydmVyIG5lZWRzIGF1dGg=');
const 日志_认证失败 = 解码64('ZmFpbCB0byBhdXRoIHNvY2tzIHNlcnZlcg==');
const 日志_请求发送 = 解码64('c2VudCBzb2NrcyByZXF1ZXN0');
const 日志_连接打开 = 解码64('c29ja3MgY29ubmVjdGlvbiBvcGVuZWQ=');
const 日志_连接失败 = 解码64('ZmFpbCB0byBvcGVuIHNvY2tzIGNvbm5lY3Rpb24=');

const 响应_未找到 = 解码64('Tm90IGZvdW5k');
const 内容类型_纯文本 = 解码64('dGV4dC9wbGFpbjtjaGFyc2V0PXV0Zi04');
const 升级头名称 = 解码64('VXBncmFkZQ==');
const 协议_WebSocket = 解码64('d2Vic29ja2V0');
const 协议_早期数据 = 解码64('c2VjLXdlYnNvY2tldC1wcm90b2NvbA==');
const 内容类型头 = 解码64('Y29udGVudC10eXBl');
const 日志_UDP标签 = 解码64('dWRwIA==');
const 日志_TCP标签 = 解码64('dGNwIA==');

const UUID正则 = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

let 认证令牌 = '5b75df69-62e0-4f8d-82f4-c4763c6a9ec3';
let 代理IP = 'ProxyIP.JP.CMLiussss.net;
let socks5地址 = '';
let 解析的socks5地址 = {};
let 启用socks = false;

if (!验证UUID(认证令牌)) throw new Error(错误_无效标识字符串);

export default {
  async fetch(请求, 环境, 上下文) {
    try {
      认证令牌 = 环境.UUID || 认证令牌;
      代理IP = 环境.PROXYIP || 代理IP;
      socks5地址 = 环境.SOCKS5 || socks5地址;
      if (socks5地址) {
        try {
          解析的socks5地址 = 解析socks5地址(socks5地址);
          启用socks = true;
        } catch (错误) {
          console.log(错误.toString());
          启用socks = false;
        }
      }
      const 升级头 = 请求.headers.get(升级头名称);
      if (!升级头 || 升级头 !== 协议_WebSocket) {
        const 网址 = new URL(请求.url);
        switch (网址.pathname) {
          case '/':
            return fetch('https://global.cctv.com/');
          default:
            return new Response(响应_未找到, { status: 404 });
        }
      } else {
        return await 处理WebSocket(请求);
      }
    } catch (错误) {
      return new Response(错误.toString());
    }
  },
};

async function 处理WebSocket(请求) {
  const 套接字对 = new WebSocketPair();
  const [客户端, 服务端] = Object.values(套接字对);
  服务端.accept();

  let 目标地址 = '';
  let 目标端口 = '';
  const 记录日志 = (信息, 错误) => console.log(`[${目标地址}:${目标端口}] ${信息}`, 错误 || '');
  const 早期数据协议 = 请求.headers.get(协议_早期数据) || '';
  const 可读流 = 创建可读流(服务端, 早期数据协议, 记录日志);

  let 远程套接字包装 = { value: null };
  let 是否DNS = false;

  可读流.pipeTo(
    new WritableStream({
      async write(数据块, 控制器) {
        if (是否DNS) {
          return await 处理DNS查询(数据块, 服务端, null, 记录日志);
        }
        if (远程套接字包装.value) {
          const 写入器 = 远程套接字包装.value.writable.getWriter();
          await 写入器.write(数据块);
          写入器.releaseLock();
          return;
        }

        const {
          hasError: 有错误,
          message: 消息,
          addressType: 地址类型,
          portRemote: 远程端口 = 443,
          addressRemote: 远程地址 = '',
          rawDataIndex: 原始数据索引,
          wVersion: 版本 = new Uint8Array([0, 0]),
          isUDP: 是否UDP,
        } = 解析w头(数据块, 认证令牌);

        目标地址 = 远程地址;
        目标端口 = `${远程端口}--${Math.random()} ${是否UDP ? 日志_UDP标签 : 日志_TCP标签}`;
        if (有错误) throw new Error(消息);
        if (是否UDP) {
          if (远程端口 === 53) {
            是否DNS = true;
          } else {
            throw new Error(错误_仅支持DNS_UDP);
          }
        }

        const 版本头 = new Uint8Array([版本[0], 0]);
        const 剩余数据 = 数据块.slice(原始数据索引);

        if (是否DNS) {
          return 处理DNS查询(剩余数据, 服务端, 版本头, 记录日志);
        }
        处理TCP出站(
          远程套接字包装,
          地址类型,
          远程地址,
          远程端口,
          剩余数据,
          服务端,
          版本头,
          记录日志
        );
      },
      close() {
        记录日志(日志_流关闭);
      },
      abort(原因) {
        记录日志(日志_流中止, JSON.stringify(原因));
      },
    })
  ).catch((错误) => 记录日志(日志_管道错误, 错误));

  return new Response(null, {
    status: 101,
    webSocket: 客户端,
  });
}

async function 处理TCP出站(
  远程套接字包装,
  地址类型,
  远程地址,
  远程端口,
  原始数据,
  服务端,
  版本头,
  记录日志
) {
  async function 连接并写入(目标地址, 目标端口, 使用socks = false) {
    const 套接字 = 使用socks
      ? await socks5连接(地址类型, 目标地址, 目标端口, 记录日志)
      : 连接({ hostname: 目标地址, port: 目标端口 });
    远程套接字包装.value = 套接字;
    记录日志(`${日志_连接成功} ${目标地址}:${目标端口}`);
    const 写入器 = 套接字.writable.getWriter();
    await 写入器.write(原始数据);
    写入器.releaseLock();
    return 套接字;
  }

  async function 重试() {
    let 套接字;
    if (启用socks) {
      套接字 = await 连接并写入(远程地址, 远程端口, true);
    } else {
      套接字 = await 连接并写入(代理IP || 远程地址, 远程端口);
    }
    套接字.closed
      .catch(错误 => console.log(日志_重试错误, 错误))
      .finally(() => 安全关闭WebSocket(服务端));
    远程套接字到WebSocket(套接字, 服务端, 版本头, 重试, 记录日志);
  }

  let 套接字 = await 连接并写入(远程地址, 远程端口);
  远程套接字到WebSocket(套接字, 服务端, 版本头, 重试, 记录日志);
}

function 创建可读流(服务端, 早期数据, 记录日志) {
  let 已取消 = false;
  return new ReadableStream({
    start(控制器) {
      服务端.addEventListener('message', (事件) => {
        if (已取消) return;
        控制器.enqueue(事件.data);
      });
      服务端.addEventListener('close', () => {
        安全关闭WebSocket(服务端);
        if (已取消) return;
        控制器.close();
      });
      服务端.addEventListener('error', (错误) => {
        记录日志(日志_套接字错误);
        控制器.error(错误);
      });
      const { earlyData: 早期数据字节, error: 错误 } = 解码早期数据(早期数据);
      if (错误) 控制器.error(错误);
      else if (早期数据字节) 控制器.enqueue(早期数据字节.buffer);
    },
    pull() {},
    cancel(原因) {
      if (已取消) return;
      记录日志(`${日志_流取消} ${原因}`);
      已取消 = true;
      安全关闭WebSocket(服务端);
    },
  });
}

function 解析w头(数据块, 用户密钥) {
  if (数据块.byteLength < 24) return { hasError: true, message: 错误_无效数据 };
  const 版本 = new Uint8Array(数据块.slice(0, 1));
  let 是否UDP = false;
  const 用户ID字节 = new Uint8Array(数据块.slice(1, 17));
  if (字节转UUID字符串(用户ID字节) !== 用户密钥) {
    return { hasError: true, message: 错误_无效用户 };
  }

  const 可选长度 = new Uint8Array(数据块.slice(17, 18))[0];
  const 命令 = new Uint8Array(数据块.slice(18 + 可选长度, 19 + 可选长度))[0];
  if (命令 === 2) 是否UDP = true;
  else if (命令 !== 1) {
    return { hasError: true, message: 错误_不支持命令 };
  }

  const 端口起始 = 18 + 可选长度 + 1;
  const 端口字节 = 数据块.slice(端口起始, 端口起始 + 2);
  const 远程端口 = new DataView(端口字节).getUint16(0);

  const 地址起始 = 端口起始 + 2;
  const 地址类型 = new Uint8Array(数据块.slice(地址起始, 地址起始 + 1))[0];
  let 地址长度 = 0;
  let 地址值起始 = 地址起始 + 1;
  let 远程地址 = '';

  switch (地址类型) {
    case 1:
      地址长度 = 4;
      远程地址 = new Uint8Array(数据块.slice(地址值起始, 地址值起始 + 地址长度)).join('.');
      break;
    case 2:
      地址长度 = new Uint8Array(数据块.slice(地址值起始, 地址值起始 + 1))[0];
      地址值起始 += 1;
      远程地址 = new TextDecoder().decode(数据块.slice(地址值起始, 地址值起始 + 地址长度));
      break;
    case 3:
      地址长度 = 16;
      const 视图 = new DataView(数据块.slice(地址值起始, 地址值起始 + 地址长度));
      const 片段 = [];
      for (let i = 0; i < 8; i++) 片段.push(视图.getUint16(i * 2).toString(16));
      远程地址 = 片段.join(':');
      break;
    default:
      return { hasError: true, message: 错误_无效地址类型 };
  }

  if (!远程地址) return { hasError: true, message: 错误_空地址 };
  return {
    hasError: false,
    addressRemote: 远程地址,
    addressType: 地址类型,
    portRemote: 远程端口,
    rawDataIndex: 地址值起始 + 地址长度,
    wVersion: 版本,
    isUDP: 是否UDP,
  };
}

async function 远程套接字到WebSocket(远程套接字, 服务端, 版本头, 重试函数, 记录日志) {
  let 已收到数据 = false;
  let 版本头副本 = 版本头;
  await 远程套接字.readable
    .pipeTo(
      new WritableStream({
        async write(数据块, 控制器) {
          已收到数据 = true;
          if (服务端.readyState !== 1) 控制器.error(日志_套接字关闭);
          if (版本头副本) {
            服务端.send(await new Blob([版本头副本, 数据块]).arrayBuffer());
            版本头副本 = null;
          } else {
            服务端.send(数据块);
          }
        },
        close() {
          记录日志(`${日志_远程关闭} ${已收到数据}`);
        },
        abort(原因) {
          console.error(日志_远程中止, 原因);
        },
      })
    )
    .catch((错误) => {
      console.error(日志_传输错误, 错误.stack || 错误);
      安全关闭WebSocket(服务端);
    });

  if (!已收到数据 && 重试函数) {
    记录日志(日志_重试错误);
    重试函数();
  }
}

function 解码早期数据(字符串) {
  if (!字符串) return { error: null };
  try {
    字符串 = 字符串.replace(/-/g, '+').replace(/_/g, '/');
    const 二进制 = atob(字符串);
    const 字节数组 = Uint8Array.from(二进制, (字符) => 字符.charCodeAt(0));
    return { earlyData: 字节数组.buffer, error: null };
  } catch (错误) {
    return { error: 错误 };
  }
}

function 验证UUID(字符串) {
  return UUID正则.test(字符串);
}

const 十六进制表 = [];
for (let i = 0; i < 256; i++) 十六进制表.push((i + 256).toString(16).slice(1));

function 字节转UUID字符串(字节数组, 偏移 = 0) {
  return (
    十六进制表[字节数组[偏移 + 0]] +
    十六进制表[字节数组[偏移 + 1]] +
    十六进制表[字节数组[偏移 + 2]] +
    十六进制表[字节数组[偏移 + 3]] +
    '-' +
    十六进制表[字节数组[偏移 + 4]] +
    十六进制表[字节数组[偏移 + 5]] +
    '-' +
    十六进制表[字节数组[偏移 + 6]] +
    十六进制表[字节数组[偏移 + 7]] +
    '-' +
    十六进制表[字节数组[偏移 + 8]] +
    十六进制表[字节数组[偏移 + 9]] +
    '-' +
    十六进制表[字节数组[偏移 + 10]] +
    十六进制表[字节数组[偏移 + 11]] +
    十六进制表[字节数组[偏移 + 12]] +
    十六进制表[字节数组[偏移 + 13]] +
    十六进制表[字节数组[偏移 + 14]] +
    十六进制表[字节数组[偏移 + 15]]
  ).toLowerCase();
}

const WS_打开 = 1;
const WS_关闭中 = 2;
function 安全关闭WebSocket(套接字) {
  try {
    if (套接字.readyState === WS_打开 || 套接字.readyState === WS_关闭中) {
      套接字.close();
    }
  } catch (错误) {
    console.error(日志_关闭错误, 错误);
  }
}

async function 处理DNS查询(数据块, 服务端, 版本头, 记录日志) {
  try {
    const DNS服务器 = '8.8.4.4';
    const DNS端口 = 53;
    let 版本头副本 = 版本头;
    const 套接字 = 连接({ hostname: DNS服务器, port: DNS端口 });
    记录日志(`${日志_连接成功} ${DNS服务器}:${DNS端口}`);
    const 写入器 = 套接字.writable.getWriter();
    await 写入器.write(数据块);
    写入器.releaseLock();

    await 套接字.readable.pipeTo(
      new WritableStream({
        async write(响应块) {
          if (服务端.readyState === WS_打开) {
            if (版本头副本) {
              服务端.send(await new Blob([版本头副本, 响应块]).arrayBuffer());
              版本头副本 = null;
            } else {
              服务端.send(响应块);
            }
          }
        },
        close() {
          记录日志(`dns server(${DNS服务器}) tcp is close`);
        },
        abort(原因) {
          console.error(`dns server(${DNS服务器}) tcp abort`, 原因);
        },
      })
    );
  } catch (错误) {
    console.error(日志_DNS错误, 错误.message);
  }
}

async function socks5连接(地址类型, 目标地址, 目标端口, 记录日志) {
  const { username, password, hostname, port } = 解析的socks5地址;
  const 套接字 = 连接({ hostname, port });
  const 写入器 = 套接字.writable.getWriter();
  const 编码器 = new TextEncoder();

  const 握手包 = new Uint8Array([5, 2, 0, 2]);
  await 写入器.write(握手包);
  记录日志(日志_发送握手);

  const 读取器 = 套接字.readable.getReader();
  let 响应 = (await 读取器.read()).value;
  if (响应[0] !== 0x05) {
    记录日志(日志_版本错误);
    return;
  }
  if (响应[1] === 0xff) {
    记录日志(日志_无认证方法);
    return;
  }

  if (响应[1] === 0x02) {
    记录日志(日志_需要认证);
    if (!username || !password) {
      记录日志(错误_SOCKS认证缺失);
      return;
    }
    const 认证请求 = new Uint8Array([
      1,
      username.length,
      ...编码器.encode(username),
      password.length,
      ...编码器.encode(password),
    ]);
    await 写入器.write(认证请求);
    响应 = (await 读取器.read()).value;
    if (响应[0] !== 0x01 || 响应[1] !== 0x00) {
      记录日志(日志_认证失败);
      return;
    }
  }

  let DSTADDR;
  switch (地址类型) {
    case 1:
      DSTADDR = new Uint8Array([1, ...目标地址.split('.').map(Number)]);
      break;
    case 2:
      DSTADDR = new Uint8Array([3, 目标地址.length, ...编码器.encode(目标地址)]);
      break;
    case 3:
      DSTADDR = new Uint8Array([
        4,
        ...目标地址.split(':').flatMap((x) => [
          parseInt(x.slice(0, 2), 16),
          parseInt(x.slice(2), 16),
        ]),
      ]);
      break;
    default:
      记录日志(错误_无效地址类型);
      return;
  }

  const 请求包 = new Uint8Array([
    5,
    1,
    0,
    ...DSTADDR,
    目标端口 >> 8,
    目标端口 & 0xff,
  ]);
  await 写入器.write(请求包);
  记录日志(日志_请求发送);

  响应 = (await 读取器.read()).value;
  if (响应[1] === 0x00) {
    记录日志(日志_连接打开);
  } else {
    记录日志(日志_连接失败);
    return;
  }

  写入器.releaseLock();
  读取器.releaseLock();
  return 套接字;
}

function 解析socks5地址(地址) {
  let [后部, 前部] = 地址.split('@').reverse();
  let username, password, hostname, port;
  if (前部) {
    const 分段 = 前部.split(':');
    if (分段.length !== 2) throw new Error(错误_SOCKS格式无效);
    [username, password] = 分段;
  }
  const 分段后 = 后部.split(':');
  port = Number(分段后.pop());
  if (isNaN(port)) throw new Error(错误_SOCKS格式无效);
  hostname = 分段后.join(':');
  const 正则IPv6 = /^\[.*\]$/;
  if (hostname.includes(':') && !正则IPv6.test(hostname)) {
    throw new Error(错误_SOCKS格式无效);
  }
  return { username, password, hostname, port };
  }
