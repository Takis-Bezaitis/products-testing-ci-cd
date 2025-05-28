import type { PropsWithChildren } from "react"
import ReactReduxProvider from "./ReactReduxProvider"

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ReactReduxProvider>{children}</ReactReduxProvider>
  )
}

export default Providers