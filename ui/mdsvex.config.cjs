module.exports = {
    extensions: [`.md`],
    smartypants: {
        dashes: `oldschool`,
    },
    remarkPlugins: [
        [
            require(`remark-github`),
            {
                repository: `https://github.com/splinefi/spline.git`,
            },
        ],
        require(`remark-abbr`),
    ],
    rehypePlugins: [
        require(`rehype-slug`),
        [
            require(`rehype-autolink-headings`),
            {
                behavior: `wrap`,
            },
        ],
    ],
};
