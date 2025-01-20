import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        userRegister: "userRegister.html",
        userProfile: "userProfile.html",
      },
    },
  },
});
