import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    image?: string;
    url?: string;
    type?: string;
    jsonLd?: Record<string, any>;
}

export const SEO = ({ title, description, image, url, type = 'website', jsonLd }: SEOProps) => {
    const siteTitle = 'Enki Ascend';
    const fullTitle = `${title} | ${siteTitle}`;
    const defaultImage = '/og-image.svg'; // Make sure this image exists or use a placeholder
    const absoluteUrl = url ? `https://enkicorp.com.br${url}` : 'https://enkicorp.com.br';

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{fullTitle}</title>
            <meta name='description' content={description} />

            {/* Facebook tags */}
            <meta property='og:type' content={type} />
            <meta property='og:title' content={fullTitle} />
            <meta property='og:description' content={description} />
            <meta property='og:image' content={image || defaultImage} />
            <meta property='og:url' content={absoluteUrl} />

            {/* Twitter tags */}
            <meta name='twitter:creator' content='@enkiascend' />
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:title' content={fullTitle} />
            <meta name='twitter:description' content={description} />
            <meta name='twitter:image' content={image || defaultImage} />

            {/* JSON-LD */}
            {jsonLd && (
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            )}
        </Helmet>
    );
};
