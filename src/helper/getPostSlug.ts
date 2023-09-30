import fs from 'fs'

export const getSlugData = () => {
    const folder = "src/posts"
    const files = fs.readdirSync(folder)
    const markdownPosts = files.filter(file => file.endsWith(".md"))
    const slugs = markdownPosts.map(file => file.replace(".md",""))
    return slugs
}