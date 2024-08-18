import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// 変数
const SITEBASEDIR = '/test-dir'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: SITEBASEDIR,
})