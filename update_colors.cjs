const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Replace #875A45 with #110B0A
content = content.replace(/text-\[#875A45\]/g, 'text-[#110B0A]');
content = content.replace(/bg-\[#875A45\]/g, 'bg-[#110B0A]');
content = content.replace(/border-\[#875A45\]/g, 'border-[#110B0A]');

// Let's change the active tab border to yellow for accent
// Find: 'text-[#110B0A] border-b-2 border-[#110B0A] pb-1'
content = content.replace(/'text-\[#110B0A\] border-b-2 border-\[#110B0A\] pb-1'/g, "'text-[#110B0A] border-b-2 border-[#F3C324] pb-1'");

// Change footer text "Prohibido irse con hambre"
// Find: text-[#110B0A]
// Wait, it is already replaced above.

// The image tag is <img src="./logo.jpg"
// We should make sure it points to /logo.jpg just in case. Wait, earlier they changed it to `./logo.jpg` in vite config or something, but public assets usually use `/logo.jpg` or `logo.jpg`. Let's see if there's any `./logo.jpg`
content = content.replace(/src="\.\/logo\.jpg"/g, 'src="/logo.jpg"');

fs.writeFileSync('src/App.tsx', content);
console.log('Colors replaced in App.tsx');
