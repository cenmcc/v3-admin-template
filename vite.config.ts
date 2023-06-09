import { defineConfig, loadEnv } from "vite";
import type { ConfigEnv, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path, { resolve } from "path";
import svgLoader from "vite-svg-loader";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import vueJsx from "@vitejs/plugin-vue-jsx";


/** @type {import('vite').UserConfig} */

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const viteEnv = loadEnv(mode, process.cwd());
  return {
    base: viteEnv.VITE_PUBLIC_PATH,
    resolve: {
      alias: {
        /** @ 符号指向 src 目录 */
        "@": resolve(__dirname, "./src"),
      },
    },
    server: {
      /** 是否开启 HTTPS */
      https: false,
      /** 设置 host: true 才可以使用 Network 的形式，以 IP 访问项目 */
      host: true, // host: "0.0.0.0"
      /** 端口号 */
      port: 3333,
      /** 是否自动打开浏览器 */
      open: false,
      /** 跨域设置允许 */
      cors: true,
      /** 端口被占用时，是否直接退出 */
      strictPort: false,
      /** 接口代理 */
      proxy: {
        "/apis": {
          target:
            "https://mock.mengxuegu.com/mock/63218b5fb4c53348ed2bc212/api/v1",
          ws: true,
          /** 是否允许跨域 */
          changeOrigin: true,
          rewrite: (path: string): string => path.replace("/apis", ""),
        },
      },
    },
    build: {
      /** 消除打包大小超过 500kb 警告 */
      chunkSizeWarningLimit: 2000,
      /** Vite 2.6.x 以上需要配置 minify: "terser", terserOptions 才能生效 */
      minify: "terser",
      /** 在打包代码时移除 console.log、debugger 和 注释 */
      terserOptions: {
        compress: {
          drop_console: false,
          drop_debugger: true,
          pure_funcs: ["console.log"],
        },
        format: {
          /** 删除注释 */
          comments: false,
        },
      },
      /** 打包后静态资源目录 */
    },
    plugins: [
      vue(),
      vueJsx(),
      /** 将 SVG 静态图转化为 Vue 组件 */
      svgLoader({ defaultImport: "url" }),
      /** SVG */
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/icons/svg")],
        symbolId: "icon-[dir]-[name]",
      }),
      AutoImport({
        dts: "./types/auto-imports.d.ts",
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: [
          "vue",
          "vue-router",
          "pinia",
          {
            "naive-ui": [
              "useDialog",
              "useMessage",
              "useNotification",
              "useLoadingBar",
            ],
          },
        ],
        eslintrc: {
          enabled: true, // 默认 false
          filepath: "./types/.eslintrc-auto-import.json", // 默认 "./.eslintrc-auto-import.json"
          globalsPropValue: true, // 默认 true (true | false | "readonly" | "readable" | "writable" | "writeable")
        },
        resolvers: [],
      }),
      Components({
        dts: "./types/components.d.ts",
        // 指定自动导入的组件位置，默认是 src/components
        dirs: ["src/components"],
        resolvers: [NaiveUiResolver()],
      }),
    ],
  };
});
