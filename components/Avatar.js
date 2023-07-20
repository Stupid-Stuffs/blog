export default function Avatar({ imageSrc, width = 42, height = 42, ...rest }) {
  return (
    <img
      src={imageSrc}
      className="m-0 rounded-full"
      style={{
        width,
        height,
      }}
      {...rest}
    />
  )
}
