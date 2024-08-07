export function convertHexToRgbA(hex: string): string {
    // Remove the hash if it exists
    const cleanHex = hex.replace(/^#/, '');

    // Check if the hex is valid
    if (!/^([A-Fa-f0-9]{3}){1,2}$/.test(cleanHex)) {
        throw new Error('Invalid Hex Color');
    }

    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    const fullHex = cleanHex.length === 3
        ? cleanHex.split('').map(char => char + char).join('')
        : cleanHex;

    // Convert to RGB values
    const r = parseInt(fullHex.substring(0, 2), 16);
    const g = parseInt(fullHex.substring(2, 2), 16);
    const b = parseInt(fullHex.substring(4, 2), 16);

    // Return the RGBA string
    return `rgba(${r},${g},${b},0.2)`;
}