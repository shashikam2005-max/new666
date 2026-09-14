import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

function videoUploadPlugin() {
  return {
    name: 'video-upload-handler',
    configureServer(server: any) {
      server.middlewares.use('/api/upload-video', (req: any, res: any) => {
        if (req.method === 'POST') {
          const publicDir = path.resolve(process.cwd(), 'public');
          if (!fs.existsSync(publicDir)) {
            fs.mkdirSync(publicDir, { recursive: true });
          }
          const targetPath = path.join(publicDir, 'Stylecue_video.mp4');
          const fileStream = fs.createWriteStream(targetPath);
          req.pipe(fileStream);
          fileStream.on('finish', () => {
            const stats = fs.statSync(targetPath);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true, path: '/Stylecue_video.mp4', size: stats.size }));
          });
          fileStream.on('error', (err: any) => {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: false, error: err.message }));
          });
        } else {
          res.writeHead(405, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Method not allowed' }));
        }
      });

      server.middlewares.use('/api/video-status', (req: any, res: any) => {
        const publicDir = path.resolve(process.cwd(), 'public');
        const targetPath = path.join(publicDir, 'Stylecue_video.mp4');
        const exists = fs.existsSync(targetPath);
        let size = 0;
        if (exists) {
          try {
            size = fs.statSync(targetPath).size;
          } catch {}
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ exists, size, url: '/Stylecue_video.mp4' }));
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), videoUploadPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      allowedHosts: true as const,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify - file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {
        ignored: ['**/public/Stylecue_video.mp4'],
      },
    },
  };
});

