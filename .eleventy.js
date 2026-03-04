import handlebarsPlugin from "@11ty/eleventy-plugin-handlebars";

export default function (eleventyConfig) {
    eleventyConfig.addPlugin(handlebarsPlugin);
    eleventyConfig.setLiquidOptions({
        dynamicPartials: true,
        strict_filters: true,
    });

    return {
        dir: {
            input: "build",
            output: "dist",
        },
        templateFormats: [
            "md",
            "css",
            "js",
            "hbs",
            "njk",
            "gif",
            "jpg",
            "jpeg",
            "png",
            "m4a",
            "mp3",
            "mp4",
            "otf",
            "pdf",
            "vtt",
            "txt",
        ],
    };
};
