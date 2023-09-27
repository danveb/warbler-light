/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: "./setupTests.ts",
    // speed up since tests don't rely on css
    // https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib/vite.config.ts#L14-L16
		css: false,
  },
})
