---
title: AI 代理接入
description: 用本地 AI 代理通过 MCP 驱动字面 Live 制作歌词 PV。
order: 6
---

字面 Live 内置一个 MCP 服务器，把编辑器暴露给本地 AI 代理（ZCode、Claude 等流式 HTTP 客户端）。
代理可以用 17 个工具读状态、写歌词、调风格手法、控制预览、发起导出 —— 全程不需要碰界面。

## 端点

服务器只监听回环地址，从 `8642` 起向后探测 10 个端口：

```
POST http://127.0.0.1:8642/mcp
```

协议是 JSON-RPC 2.0，无状态 Streamable HTTP。只接受精确路径 `/mcp`，跨站来源会被拒。

## 客户端配置

以 ZCode 为例，在工作区配置里加一个服务器：

```json
{
  "mcp": {
    "servers": {
      "jizura": {
        "type": "http",
        "url": "http://127.0.0.1:8642/mcp"
      }
    }
  }
}
```

工具在客户端表现为 `mcp__jizura__get_state` 这类名字 —— 服务器名 `jizura` 加上工具名，**没有 `jizura_` 前缀**。

## 17 个工具

`get_state` · `list_options` · `set_lyrics` · `update_settings` · `set_timing` · `edit_line` · `edit_cut` ·
`set_techniques` · `set_locks` · `randomize` · `history` · `preview` · `tap_sync` · `project` ·
`start_export` · `get_export_status` · `reset_project`

## 两条硬契约

- **revision**：写操作必须带 `get_state` 返回的最新 `revision`。每次写操作会返回新的 revision，用它做下一次写。收到 `stale_revision` 说明有别的修改插了进来，重新 `get_state`。
- **行号与切分号是 1 起始**，且歌词或设置变化后重新规划，编号会变。跨过一次写操作之后再引用行号，先 `get_state` 确认。

## 两个注意点

- `set_lyrics` 是**整体替换**、立即自动保存，且不走撤销历史。改歌词前建议先把当前工程存一份。
- 音频、字体、工程包文件只能用户通过界面投入，工具不接收文件路径。没有音频无法导出成片。

## 完整文档

- [MCP 接入文档](../ref/mcp/)：架构、请求生命周期、错误码映射、故障排查
- [AI 代理操作指南](../ref/agent/)：代理侧的完整操作流程与避坑
