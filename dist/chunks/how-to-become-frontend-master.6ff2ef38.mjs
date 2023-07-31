import { j as createVNode, F as Fragment, s as spreadAttributes } from './astro.951b5972.mjs';
import '@astrojs/internal-helpers/path';
import 'html-escaper';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>Sample</p>");

				const frontmatter = {"draft":true,"title":"Sample","snippet":"Ornare cum cursus laoreet sagittis nunc fusce posuere per euismod dis vehicula a, semper fames lacus maecenas dictumst pulvinar neque enim non potenti. Torquent hac sociosqu eleifend potenti.","image":{"src":"https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?&fit=crop&w=430&h=240","alt":"frontend master"},"publishDate":"2022-11-07 15:39","category":"Tutorials","author":"Connor Lopez","tags":["astro","tailwindcss","frontend"]};
				const file = "C:/Users/socra/Documents/Webtoon Studio/src/content/blog/how-to-become-frontend-master.md";
				const url = undefined;
				function rawContent() {
					return "\nSample\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
