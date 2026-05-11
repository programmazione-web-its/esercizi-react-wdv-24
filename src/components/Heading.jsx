export default function Heading({ level = 2, color = 'inherit', children }) {
  let tag
  if (level <= 1) {
    tag = 'h1'
  } else if (level === 2) {
    tag = 'h2'
  } else if (level === 3) {
    tag = 'h3'
  }
  const Tag = tag

  return <Tag style={{ color }}>{children}</Tag>
}
