module.exports = function(eleventyConfig) {
  // Statische Dateien kopieren
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/fontawesome");
  eleventyConfig.addPassthroughCopy("src/images");

  // WICHTIG: Erstellt eine .nojekyll-Datei, damit GitHub Pages die Dateien nicht mit Jekyll verarbeitet
  eleventyConfig.addPassthroughCopy({ "src/_github/.nojekyll": ".nojekyll" });

  // Eigene Ausgabeverzeichnis konfigurieren
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
