export default (document) => {
  // BEGIN

        const title = document.querySelector('.content h1').textContent.trim();
        const description = document.querySelector('.content .description').textContent.trim();

        const articles = document.querySelectorAll('.content .links > div');
        const items = Array.from(articles).map(article => {
            const articleTitle = article.querySelector('h2 a').textContent.trim();
            const articleDescription = article.querySelector('p').textContent.trim();
            return { title: articleTitle, description: articleDescription };
        });

        return {
            title,
            description,
            items
        };
    // END
};
