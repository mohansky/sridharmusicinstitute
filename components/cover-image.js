// import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

export default function CoverImage({ title, src, img, slug, height, width }) {
  const image = (
    <Image
      src={src} 
      alt={`Cover Image for ${title}`}
      className="post-img" 
      layout="responsive"
      width="320"
      height="180"
      placeholder="blurDataURL"
    />
  )
  return (
    <div className="p-0">
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}