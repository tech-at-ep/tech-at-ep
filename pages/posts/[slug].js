import {useRouter} from 'next/router'
import ErrorPage from 'next/error'
import PostBody from '../../components/PostBody'
import {getPostBySlug, getAllPosts} from '../../lib/api'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import Navbar from "../../components/Navbar";

export default function Post({post, morePosts, preview}) {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404}/>
    }
    return (
        <div>
            <Navbar/>
            {router.isFallback ? (
                <h1>Loading…</h1>
            ) : (
                <>
                    <article className="mb-32 prose lg:prose-lg mx-auto mt-28">
                        <Head>
                            <title>
                                {post.title} | Build at Brown
                            </title>
                            <meta property="og:image" content={post.ogImage.url}/>
                        </Head>

                        <div className="mx-4">
                            <h1 className="font-display">
                                {post.title}
                            </h1>

                            <PostBody content={post.content}/>
                        </div>
                    </article>
                </>
            )}
        </div>
    )
}

export async function getStaticProps({params}) {
    const post = getPostBySlug(params.slug, [
        'title',
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImage',
        'course',
    ])
    const content = await markdownToHtml(post.content || '')

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            }
        }),
        fallback: false,
    }
}
