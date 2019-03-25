import { topHeadlinesUrl } from './newsApi';
window.addEventListener('load', () => {
	fetchNews();
});

async function fetchNews() {
	const res = await fetch(topHeadlinesUrl);
	const json = await res.json();

	const main = document.querySelector('main');

	json.articles.forEach(article => {
		const el = document.createElement('news-article');
		el.article = article;
		main.appendChild(el);
	});
}
