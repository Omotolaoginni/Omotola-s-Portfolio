const fs = require('fs');
const path = require('path');

const tokensPath = path.join(process.cwd(), 'design-tokens.tokens.json');
const outputPath = path.join(process.cwd(), 'src/app/tokens.css');

const tokens = JSON.parse(fs.readFileSync(tokensPath, 'utf8'));

let css = ':root {\n';

// Normalize key
function normalize(key) {
  return '--' + key.trim().replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^-+/, '').toLowerCase();
}

// Color Roles
if (tokens['color roles']) {
  css += '  /* Color Roles */\n';
  for (const [key, obj] of Object.entries(tokens['color roles'])) {
    let cleanKey = key.replace(/color[-\s]*/i, 'color-');
    css += `  ${normalize(cleanKey)}: ${obj.value};\n`;
  }
}

// Spacing Variables
if (tokens['spacing variables']) {
  css += '\n  /* Spacing Variables */\n';
  for (const [key, obj] of Object.entries(tokens['spacing variables'])) {
    let val = obj.value;
    if (typeof val === 'number') val = val + 'px';
    css += `  ${normalize(key)}: ${val};\n`;
  }
}

// Border Radius
if (tokens['border radius']) {
  css += '\n  /* Border Radius */\n';
  for (const [key, obj] of Object.entries(tokens['border radius'])) {
    let val = obj.value;
    if (typeof val === 'number') val = val + 'px';
    css += `  ${normalize(key)}: ${val};\n`;
  }
}

// Font Variables
if (tokens['font']) {
  css += '\n  /* Typography */\n';
  for (const [category, styles] of Object.entries(tokens['font'])) {
    for (const [styleName, obj] of Object.entries(styles)) {
      if (obj.value) {
        const val = obj.value;
        const prefix = normalize(styleName);
        if (val.fontSize) css += `  ${prefix}-size: ${val.fontSize / 16}rem;\n`;
        if (val.lineHeight) css += `  ${prefix}-line-height: ${val.lineHeight / val.fontSize};\n`;
        if (val.fontWeight) css += `  ${prefix}-weight: ${val.fontWeight};\n`;
        if (val.fontFamily) css += `  ${prefix}-family: '${val.fontFamily}', sans-serif;\n`;
        if (val.letterSpacing) css += `  ${prefix}-letter-spacing: ${val.letterSpacing / val.fontSize}em;\n`;
      }
    }
  }
}

css += '}\n';

fs.writeFileSync(outputPath, css);
console.log('tokens.css generated successfully!');
