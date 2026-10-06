const fs = require('fs');
const files = [
    'src/pages/ResetPassword.jsx',
    'src/pages/Register.jsx',
    'src/pages/OAuthConsent.jsx',
    'src/pages/Login.jsx',
    'src/pages/ForgotPassword.jsx',
    'src/lib/PageNotFound.jsx',
    'src/lib/AuthContext.jsx',
    'src/components/ui/image-helpers.js',
    'src/components/ui/image.jsx'
];

files.forEach(f => {
    const filePath = 'd:/sush/fermor/' + f;
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');
    const snippet = `const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };`;

    if (content.startsWith(snippet)) {
        // Remove the snippet from the top
        content = content.replace(snippet, '').trimStart();

        // Find the last import statement
        const importRegex = /^import\s+.*?(?:from\s+['"].*?['"]|['"].*?['"]);?$/gm;
        let match;
        let lastIndex = 0;
        while ((match = importRegex.exec(content)) !== null) {
            lastIndex = match.index + match[0].length;
        }

        // Insert snippet after the last import
        content = content.slice(0, lastIndex) + '\n\n' + snippet + '\n\n' + content.slice(lastIndex).trimStart();
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Fixed:', f);
    }
});
