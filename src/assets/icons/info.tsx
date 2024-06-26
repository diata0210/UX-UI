
type Props = {
  width?: string;
  height?: string;
}

export default function InfoIcon({ 
  width = '24',
  height = '24'
}: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
      <path d="M10.8 6H13.2V8.4H10.8V6ZM10.8 10.8H13.2V18H10.8V10.8ZM12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM12 21.6C6.708 21.6 2.4 17.292 2.4 12C2.4 6.708 6.708 2.4 12 2.4C17.292 2.4 21.6 6.708 21.6 12C21.6 17.292 17.292 21.6 12 21.6Z" fill="#343C6A" />
    </svg>
  )
}
