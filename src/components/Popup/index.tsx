import { XCircle } from 'lucide-react'
import React from 'react'
import ReactDOM from 'react-dom'

interface ModalProps {
  open: boolean
  title?: string
  children?: JSX.Element | undefined | Array<JSX.Element> | string
  key?: string
  handleCancel?: () => void
  className?: string
	isOutSide: boolean
}
const Popup = ({
	isOutSide,
  open,
  title,
  children,
  key,
  handleCancel,
  className = 'w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4',
}: ModalProps) =>
  ReactDOM.createPortal(
    <React.Fragment>
      {open && (
        <div className="fixed w-screen h-screen left-0 right-0 bottom-0 top-0 flex justify-center items-center z-[1000]">
          <div
            className="bg-black/30 absolute top-0 left-0 right-0 bottom-0 h-full w-full z-50"
            onClick={() => {
							if(isOutSide){
								handleCancel && handleCancel()
							}
						}}
          />
          <div className={`bg-black rounded-lg shadow-md overscroll-y-hidden z-[60] ${className}`} style={{    boxShadow: "1px 1px 10px 13px #FFFFFF"}}>
            <div className="flex justify-between items-center p-3 text-white ml-[15px]">
              <p className="sm:text-lg font-semibold m-auto">{title}</p>
              <XCircle
                className="cursor-pointer transition-all hover:scale-90 text-white"
                onClick={() => handleCancel && handleCancel()}
              />
            </div>
            <hr className={`border-black/[0.08]`} />
            <div className="p-3">
              {typeof children === 'string' ? (
                <p className="sm:text-medium">{children}</p>
              ) : (
                children
              )}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>,
    document.body,
    key
  )

export default Popup
