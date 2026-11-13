import { useEffect, useRef, type MouseEvent as ReactMouseEvent } from 'react'
import s from './MagazinePage.module.css'

const MV_TITLE = "체포하겠어 (You're Under Arrest)"
const MV_EMBED_URL = 'https://www.youtube-nocookie.com/embed/V2V9-9VhYJo?autoplay=1&rel=0&playsinline=1'

interface MvDialogProps {
  readonly open: boolean
  readonly onClose: () => void
}

export default function MvDialog({ open, onClose }: MvDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  // 영상 바깥(어두운 여백)을 누르면 닫는다
  const handleClick = (event: ReactMouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) onClose()
  }

  return (
    <dialog ref={dialogRef} className={s.sheet} aria-label={`${MV_TITLE} 뮤직비디오`} onClose={onClose} onClick={handleClick}>
      <button type="button" className={s.close} aria-label="닫기" onClick={onClose}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
      <div className={s.sheetInner}>
        <div className={s.player}>
          {open && (
            <iframe
              src={MV_EMBED_URL}
              title={`${MV_TITLE} 뮤직비디오`}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </dialog>
  )
}
