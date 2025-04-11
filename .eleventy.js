module.exports = function(eleventyConfig) {
  // Statische Dateien kopieren
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/fontawesome");

  // Eigene Ausgabeverzeichnis konfigurieren
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
