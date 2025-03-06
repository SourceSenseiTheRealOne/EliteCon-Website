export async function GET() {
	// List of static pages
	const staticPages = [
		'/',
		'/about',
		'/contact'
		// Add more static pages here...
	];

	// For dynamic pages (e.g., [uid] pages), you can retrieve this data from Prismic
	const dynamicPages = await getDynamicPages(); // Assuming a function to fetch dynamic pages

	// Combine both static and dynamic pages
	const allPages = [...staticPages, ...dynamicPages];

	// Generate XML content
	const sitemapXml = `
	<?xml version="1.0" encoding="UTF-8" ?>
	<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
	        xmlns:xhtml="https://www.w3.org/1999/xhtml"
	        xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
	        xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
	        xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
	        xmlns:video="https://www.google.com/schemas/sitemap-video/1.1">

		${allPages
			.map((url) => {
				return `
				<url>
					<loc>https://www.elitecon.ca${url}</loc>
					<lastmod>${new Date().toISOString()}</lastmod>
					<priority>0.5</priority>
				</url>
				`;
			})
			.join('')}
		
	</urlset>
	`.trim();

	return new Response(sitemapXml, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}

// Function to fetch dynamic pages from Prismic (replace with your own logic)
async function getDynamicPages() {
	// Example: You can fetch dynamic pages from Prismic API
	// This is just a placeholder for how you'd handle dynamic content
	const response = await fetch('https://your-prismic-repository-url.com/api/v2/documents/search');
	const data = await response.json();

	// Assuming 'data.results' contains dynamic pages like /page/[uid]
	const dynamicPages = data.results.map((page) => `/page/${page.uid}`);
	return dynamicPages;
}
