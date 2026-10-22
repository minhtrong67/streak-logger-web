import { Flame } from 'lucide-react'

/**
 * Logo ngọn lửa trên nền violet phẳng, dùng ở sidebar, header và màn hình chờ.
 * Bo góc tính theo tỉ lệ (22%) để khớp với icon ứng dụng và favicon
 * (public/favicon.svg), dù logo được hiển thị ở kích thước nào.
 */
export default function BrandMark({ size = 36 }) {
  return (
    <span
      style={{ width: size, height: size, borderRadius: size * 0.22 }}
      className="flex items-center justify-center bg-[#7c3aed] text-white shrink-0"
    >
      <Flame size={Math.round(size * 0.52)} strokeWidth={2} />
    </span>
  )
}
