import { Provider } from "react-redux"
import { store } from "../store/store"
import type { PropsWithChildren } from "react"

const ReactReduxProvider = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default ReactReduxProvider