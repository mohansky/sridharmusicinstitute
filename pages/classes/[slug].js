import { useRouter } from 'next/router'
// import ErrorPage from 'next/error'
// import Container from '../../components/container'
// import PostBody from '../../components/post-body'
// import Header from '../../components/header'
// import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostItem from '../../components/post-item'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import { Container, Col } from "react-bootstrap";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <div>Loading…</div>
  }
  return (
    < >
      <Container>
        {/* <Header /> */}
        {router.isFallback ? (
          <div>Loading…</div>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title} | Sridhar Music Institute 
                </title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
 

              <PostItem
                title={post.title}
                img={post.img}
                duration={post.duration}
                admission={post.admission}
                fees={post.fees}
                crashCourse={post.crashCourse}
                overview={post.overview}
              />
              <div content={post.content} />
            </article>
          </>
        )}
      </Container>
    </ >
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug', 
    'content', 
    'img',
    'duration',
    'admission',
    'fees',
    'crashCourse',
    'overview',
    'content',
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