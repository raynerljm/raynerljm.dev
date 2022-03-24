import { NextSeo } from "next-seo";
import { FC } from "react";
import { useRouter } from "next/router";

const MyHead: FC = () => {
    const title = "Rayner Loh";
    const desc =
        "Hey! My name is Rayner, and I love building software that makes a positive difference.";
    const ogImgRelativePath = "/images/untame.jpg";

    const siteURL = "https://raynerljm.me";
    const ogImageURL = `${siteURL}${ogImgRelativePath}`;
    const pathName = useRouter().pathname;
    const pageURL = pathName === "/" ? siteURL : siteURL + pathName;
    const siteName = "raynerljm.me";

    return (
        <NextSeo
            title={title}
            description={desc}
            canonical={pageURL}
            openGraph={{
                type: "website",
                locale: "en_US", //  Default is en_US
                url: pageURL,
                title,
                description: desc,
                images: [
                    {
                        url: ogImageURL,
                        width: 1200,
                        height: 630,
                        alt: "raynerljm.me - Rayner's Portfolio",
                    },
                ],
                site_name: siteName,
            }}
            additionalMetaTags={[
                {
                    property: "author",
                    content: title,
                },
            ]}
            additionalLinkTags={[
                {
                    rel: "icon",
                    href: `${siteURL}/favicon.ico`,
                },
                // {
                //   rel: "manifest",
                //   href: "/site.manifest",
                // },
            ]}
        />
    );
};

export default MyHead;
