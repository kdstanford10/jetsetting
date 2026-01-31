const fs = require('fs');
const path = require('path');

const files = [
    'src/app/components/hero/hero.html',
    // Add other files if needed, but hero.html is the last big one
];

files.forEach(file => {
    const filePath = path.resolve(__dirname, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        // Replace literal  sequence with empty string or newline if appropriate
        // Based on analysis, replacing  with nothing seems best as real newlines exist
        content = content.replace(//g, ''); 
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed ${file}`);
    } else {
        console.log(`File not found: ${file}`);
    }
});