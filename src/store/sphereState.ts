import { bind } from "@react-rxjs/core"
import { createSignal } from "@react-rxjs/utils"

// A signal is an entry point to react-rxjs. It's equivalent to using a subject
export const [active$, setActive] = createSignal<any>();

export const [useActive, isActive$] = bind(active$, false)