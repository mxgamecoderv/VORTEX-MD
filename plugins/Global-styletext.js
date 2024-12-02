import fs from 'fs';
import path from 'path';

// Load styles from fancyStyles.json
const stylesFile = path.resolve('src/font/fancyStyles.json');

// Check if the styles file exists
if (!fs.existsSync(stylesFile)) {
    throw new Error('⛔ Hey, where’s your fancyStyles.json file? You better get it!');
}

const styles = JSON.parse(fs.readFileSync(stylesFile)).styles;

async function handler(m, { args }) {
    // If no style number is provided, display available styles
    if (!args[0]) {
        let styleList = styles.map((style, index) => `${index + 1}. ${style.styleName || 'Style ' + (index + 1)}`).join('\n');
        await m.reply(`🎄 *Ho ho ho! No style chosen?!* You had ONE job... pick a number from below, idiot:\n\n${styleList}\n\nUsage: .fancy <font_number> <text>`);
        return;
    }

    // Parse style number and validate it
    const styleNumber = parseInt(args[0]);
    if (isNaN(styleNumber) || styleNumber < 1 || styleNumber > styles.length) {
        await m.reply(`🎅 Seriously? Pick a valid number between 1 and ${styles.length}... 😒`);
        return;
    }

    // Extract the text to style
    const textToStyle = args.slice(1).join(' ');
    if (!textToStyle) {
        await m.reply('❌ Are you just going to leave it blank? Give me something to work with, genius!');
        return;
    }

    // Get the selected style map
    const selectedStyleMap = styles[styleNumber - 1];

    // Convert text by replacing each character with the stylized version from selected style map
    const styledText = textToStyle
        .split('')
        .map((char) => selectedStyleMap[char] || char) // Fallback to original if no match
        .join('');

    // Send the styled text
    await m.reply(`🎁 *Merry Christmas, dumbass!* Here’s your stupidly fancy text:\n\n${styledText}\n\n*Happy now?*`);
}

handler.help = ['fancy'];
handler.tags = ['tools'];
handler.command = /^fancy$/i;

export default handler;
