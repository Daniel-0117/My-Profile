export const capitalize = (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();

export const formatProjectName = (text) => {
    const words = text.split('-');
    const capitalizedWords = words.map(word => capitalize(word));
    return capitalizedWords.join(' ');
} 