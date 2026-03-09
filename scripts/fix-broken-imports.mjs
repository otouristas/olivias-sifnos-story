import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');

const filesToCheck = [
    path.join(ROOT, 'src/pages/Index.tsx'),
    path.join(ROOT, 'src/pages/Villa.tsx'),
    path.join(ROOT, 'src/data/villa-images.ts')
];

filesToCheck.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    const importRegex = /@\/assets\/villa-gallery\/(Villa-Olivia-Clara_[^'"]+)\.jpg/g;
    content = content.replace(importRegex, (match, baseName) => {
        const webpPath = path.join(ROOT, 'src/assets/villa-gallery', baseName + '.webp');
        if (fs.existsSync(webpPath)) {
            modified = true;
            return `@/assets/villa-gallery/${baseName}.webp`;
        }
        return match; // keep .jpg if not .webp
    });

    if (modified) {
        fs.writeFileSync(file, content);
        console.log(`Fixed imports in ${path.basename(file)}`);
    }
});
