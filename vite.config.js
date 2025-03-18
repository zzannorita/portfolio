import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [react(), eslint()],
  server: {
    host: true, // 외부 접속 허용
    port: 5173, // Vite 기본 포트
    strictPort: true, // 지정한 포트 유지
    allowedHosts: ["bf18-110-12-78-98.ngrok-free.app"], // ngrok 도메인 추가
  },
});
