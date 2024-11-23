'use client'

interface LoaderProps {
    src: string
    width: number
    quality: number
}

const loaderFunction = ({ src, width, quality }: LoaderProps) => {

  return `https://example.com/${src}?w=${width}&q=${quality || 75}`

}
export default loaderFunction;