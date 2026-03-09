import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.join(__dirname, '..');

const logoPath = path.join(ROOT, 'public/villa-olivia-clara-logo.webp');
const image1Path = path.join(ROOT, 'src/assets/villa-gallery/Villa-Olivia-Clara_001_pool-side-cabana.webp');
const image2Path = path.join(ROOT, 'src/assets/villa-gallery/Villa-Olivia-Clara_040_dining-at-the-terrace.jpg');

async function optimizeImage(inputPath, isJpg, isLogo) {
    if (!fs.existsSync(inputPath)) {
        console.warn(`File not found: ${inputPath}`);
        return;
    }

    const originalSize = fs.statSync(inputPath).size;
    const inputBuffer = fs.readFileSync(inputPath);

    let pipeline = sharp(inputBuffer);

    if (isLogo) {
        pipeline = pipeline.resize(620, null, { withoutEnlargement: true }).webp({ quality: 80 });
    } else {
        // Images are large, 1920 max width is more than sufficient for high quality web display
        pipeline = pipeline.resize({ width: 1920, withoutEnlargement: true });
        if (isJpg) {
            pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
        }
    }

    const outputBuffer = await pipeline.toBuffer();
    fs.writeFileSync(inputPath, outputBuffer);

    const newSize = outputBuffer.length;
    console.log(`Optimized ${path.basename(inputPath)}: ${(originalSize / 1024).toFixed(2)}KB -> ${(newSize / 1024).toFixed(2)}KB`);
}

async function run() {
    console.log('Optimizing images...');
    await optimizeImage(logoPath, false, true);
    await optimizeImage(image1Path, true, false);
    await optimizeImage(image2Path, true, false);
    console.log('Optimization complete.');
}

run().catch(console.error);
