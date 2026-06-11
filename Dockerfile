# Thin stdio shim that proxies MCP requests to the hosted Roomcomm endpoint.
# Used by registries (e.g. Glama) to start and introspect the server.
FROM node:22-slim
RUN npm install -g mcp-remote@latest
ENTRYPOINT ["mcp-remote", "https://roomcomm.ru/mcp"]
