import {App} from '@vue/composition-api'

import * as components from './components/index'
export * from './components/index'

const myPlugin: any = {
    install: (app: App) => {
        for (const name in components) {
            app.use(components[name])
        }
    }
}

export default myPlugin
