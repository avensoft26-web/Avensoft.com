const fs = require('fs');

let content = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

// 1. Remove theme state
content = content.replace(/const \[theme, setTheme\].*?;?\n/g, '');

// 2. Remove useEffect theme logic
content = content.replace(/const savedTheme = localStorage.*?setTheme\(isDark \? "dark" : "light"\);\s*\}\s*\}/s, '');

// 3. Remove toggleTheme function
content = content.replace(/const toggleTheme = \(\) => \{.*?localStorage\.setItem\("avensoft_theme", "light"\);\s*\}\s*\};\s*/s, '');

// 4. Remove desktop toggle button
content = content.replace(/\{\/\* Theme Toggle Button \(Light \/ Dark\) \*\/\}.*?<\/button>\s*/s, '');

// 5. Remove mobile theme toggle
content = content.replace(/\{\/\* Mobile Theme Toggle \*\/\}.*?<\/button>\s*<\/div>\s*/s, '');

fs.writeFileSync('src/components/Navbar.tsx', content, 'utf8');
console.log('Navbar updated successfully');
