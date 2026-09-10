const fs = require('fs');
const heicConvert = require('heic-convert');

(async () => {
  try {
    const inputBuffer = fs.readFileSync('D:\\prjct\\portofolio\\images\\pkm.HEIF');
    const outputBuffer = await heicConvert({
      buffer: inputBuffer,
      format: 'JPEG',
      quality: 0.9
    });
    fs.writeFileSync('D:\\prjct\\portofolio\\public\\images\\pkm.jpeg', outputBuffer);
    console.log('Conversion successful!');
  } catch (err) {
    console.error('Error:', err);
  }
})();
