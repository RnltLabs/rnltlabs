/**
 * Image Optimization Script
 *
 * Converts images to WebP format and generates responsive sizes
 * for optimal performance and reduced bandwidth.
 *
 * Usage: npm run optimize-images
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function optimizeImages() {
  const publicImages = path.join(__dirname, '../public/images');

  console.log('Starting image optimization...\n');

  // OG Image: PNG → WebP (1200x630 for social media)
  console.log('1. Optimizing OG image (1200x630)...');
  try {
    await sharp(`${publicImages}/og-image.png`)
      .webp({ quality: 85 })
      .toFile(`${publicImages}/og-image.webp`);

    const ogOriginal = fs.statSync(`${publicImages}/og-image.png`);
    const ogOptimized = fs.statSync(`${publicImages}/og-image.webp`);
    const ogSavings = ((1 - ogOptimized.size / ogOriginal.size) * 100).toFixed(1);

    console.log(`   Original: ${(ogOriginal.size / 1024).toFixed(2)} KB`);
    console.log(`   Optimized: ${(ogOptimized.size / 1024).toFixed(2)} KB`);
    console.log(`   Savings: ${ogSavings}%\n`);
  } catch (error) {
    console.error('   Error optimizing OG image:', error.message);
  }

  // Founder image: Generate responsive sizes in WebP
  console.log('2. Optimizing founder image (responsive sizes)...');
  try {
    const founderOriginal = fs.statSync(`${publicImages}/founder-roman-reinelt.jpg`);
    console.log(`   Original: ${(founderOriginal.size / 1024).toFixed(2)} KB\n`);

    // 150px (1x display)
    await sharp(`${publicImages}/founder-roman-reinelt.jpg`)
      .resize(150, 150, { fit: 'cover' })
      .webp({ quality: 85 })
      .toFile(`${publicImages}/founder-roman-reinelt-150.webp`);

    const founder150 = fs.statSync(`${publicImages}/founder-roman-reinelt-150.webp`);
    console.log(`   150px (1x): ${(founder150.size / 1024).toFixed(2)} KB`);

    // 300px (2x display)
    await sharp(`${publicImages}/founder-roman-reinelt.jpg`)
      .resize(300, 300, { fit: 'cover' })
      .webp({ quality: 85 })
      .toFile(`${publicImages}/founder-roman-reinelt-300.webp`);

    const founder300 = fs.statSync(`${publicImages}/founder-roman-reinelt-300.webp`);
    console.log(`   300px (2x): ${(founder300.size / 1024).toFixed(2)} KB`);

    const totalOptimized = founder150.size + founder300.size;
    const founderSavings = ((1 - totalOptimized / (founderOriginal.size * 2)) * 100).toFixed(1);
    console.log(`   Total savings: ${founderSavings}%\n`);
  } catch (error) {
    console.error('   Error optimizing founder image:', error.message);
  }

  console.log('Image optimization complete!');
  console.log('\nNext steps:');
  console.log('1. Update Founder component to use <picture> element');
  console.log('2. Update index.html meta tags to use og-image.webp');
}

optimizeImages().catch(console.error);
