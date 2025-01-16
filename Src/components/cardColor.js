const getCardColor = () => {
    const colors = [
      '#FFE4E1', // Misty Rose
      '#E0FFFF', // Light Cyan
      '#F0FFF0', // Honeydew
      '#FFF0F5', // Lavender Blush
      '#F5F5DC', // Beige
      '#E6E6FA', // Lavender
    ];
    return colors[Math.floor(Math.random() * colors.length)];
};

export default getCardColor;
