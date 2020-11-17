const generateAltTexts = (images) => {
  let altTexts = {};
  images.map((image) => {
    if (image.originalName.includes("mim")) {
      altTexts["mim"] = "Master Incident Manager website";
    } else if (image.originalName.includes("hp")) {
      altTexts["hp"] = "Harry Potter Wiki website";
    } else if (image.originalName.includes("azahares")) {
      altTexts["azahares"] = "Azahares Leslie website";
    } else if (image.originalName.includes("chatify")) {
      altTexts["chatify"] = "Chatify website";
    }
  });

  return altTexts;
};
export default generateAltTexts;
