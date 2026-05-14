const fs = require('fs');
const path = require('path');

const tokensPath = path.join(process.cwd(), 'design-tokens.tokens.json');
const outputPath = path.join(process.cwd(), 'src/app/tokens.css');

const tokens = JSON.parse(fs.readFileSync(tokensPath, 'utf8'));

let cssVariables = {};

function normalize(str) {
  return str.trim().replace(/\s+/g, '-').replace(/-+/g, '-').toLowerCase();
}

// 1. Semantic Color Mapping
const colorRoles = tokens['color roles'] || {};
for (const [key, obj] of Object.entries(colorRoles)) {
  if (!obj.value) continue;
  
  let varName = '';
  if (key.includes('primary')) varName = '--color-primary';
  else if (key.includes('secondary-bg')) varName = '--color-surface-secondary';
  else if (key.includes('text-primary')) varName = '--color-text-primary';
  else if (key.includes('text-muted')) varName = '--color-text-muted';
  else if (key.includes('border') && !key.includes('hover')) varName = '--color-border';
  else if (key.includes('surface')) varName = '--color-surface';
  else if (key.includes('focus -ring')) varName = '--color-focus-ring';
  else if (key.includes('link-hover')) varName = '--color-link-hover';
  else if (key.includes('secondary -hover')) varName = '--color-secondary-hover';
  else if (key.includes('border hover')) varName = '--color-border-hover';
  else varName = '--' + normalize(key.replace(/color[-\s]*/i, 'color-'));
  
  cssVariables[varName] = obj.value;
}

// Ensure interaction states are explicitly grabbed from 'color' object if they were missing in color roles
const rawColor = tokens['color'] || {};
if (rawColor['primary color'] && rawColor['primary color']['button link hover']) {
  if (!cssVariables['--color-link-hover']) cssVariables['--color-link-hover'] = rawColor['primary color']['button link hover'].value;
}
if (rawColor['secondary background'] && rawColor['secondary background']['hover background']) {
  if (!cssVariables['--color-secondary-hover']) cssVariables['--color-secondary-hover'] = rawColor['secondary background']['hover background'].value;
}
if (rawColor['border color'] && rawColor['border color']['border hover']) {
  if (!cssVariables['--color-border-hover']) cssVariables['--color-border-hover'] = rawColor['border color']['border hover'].value;
}

// 2. Spacing Variables
const spacing = tokens['spacing variables'] || {};
for (const [key, obj] of Object.entries(spacing)) {
  if (!obj.value && obj.value !== 0) continue;
  let val = obj.value;
  if (typeof val === 'number') val = val + 'px';
  cssVariables['--' + normalize(key)] = val;
}

// 3. Border Radius
const radius = tokens['border radius'] || {};
for (const [key, obj] of Object.entries(radius)) {
  if (!obj.value && obj.value !== 0) continue;
  let val = obj.value;
  if (typeof val === 'number') val = val + 'px';
  cssVariables['--' + normalize(key)] = val;
}

// 4. Typography Scale
const font = tokens['font'] || {};
for (const [category, styles] of Object.entries(font)) {
  for (const [styleName, obj] of Object.entries(styles)) {
    if (obj.value) {
      const prefix = '--' + normalize(styleName);
      const v = obj.value;
      if (v.fontSize) cssVariables[`${prefix}-size`] = `${v.fontSize / 16}rem`;
      if (v.lineHeight) cssVariables[`${prefix}-line-height`] = v.lineHeight / v.fontSize;
      if (v.fontWeight) cssVariables[`${prefix}-weight`] = v.fontWeight;
      if (v.fontFamily) cssVariables[`${prefix}-family`] = `'${v.fontFamily}', sans-serif`;
      if (v.letterSpacing) cssVariables[`${prefix}-letter-spacing`] = `${v.letterSpacing / v.fontSize}em`;
    }
  }
}

// Generate CSS Output
let css = ':root {\n  /* Explicitly Mapped Tokens based on System Rules */\n';
for (const [key, val] of Object.entries(cssVariables)) {
  css += `  ${key}: ${val};\n`;
}
css += '}\n';

fs.writeFileSync(outputPath, css);
console.log('Fixed tokens generated successfully with explicit mappings!');
