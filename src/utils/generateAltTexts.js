const generateAltTexts = (images) => {
  const altTexts = {};
  images.forEach((image) => {
    if (image.originalName.includes('mim')) {
      altTexts.mim = 'Master Incident Manager website';
    } else if (image.originalName.includes('hp')) {
      altTexts.hp = 'Harry Potter Wiki website';
    } else if (image.originalName.includes('chatify')) {
      altTexts.chatify = 'Chatify website';
    }
  });

  return altTexts;
};
export default generateAltTexts;
