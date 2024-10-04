export const generateData = (days) => {
    return Array.from({ length: days }, (_, i) => ({
      date: new Date(Date.now() - (days - i - 1) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      followers: Math.floor(Math.random() * 1000) + 5000,
      likes: Math.floor(Math.random() * 500) + 1000,
      shares: Math.floor(Math.random() * 200) + 100,
    }));
  };
  
  export const generatePlatformData = () => [
    { name: 'Facebook', value: Math.floor(Math.random() * 1000) + 2000 },
    { name: 'Twitter', value: Math.floor(Math.random() * 1000) + 1500 },
    { name: 'Instagram', value: Math.floor(Math.random() * 1000) + 2500 },
    { name: 'LinkedIn', value: Math.floor(Math.random() * 1000) + 1000 },
  ];