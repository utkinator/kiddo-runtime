import {
    runtimeContextKey,
    rootElementId
} from '../lib/constants.js'

export const getRuntimeContextKey = (name, version) => {
    return `${runtimeContextKey}:${name}-${version}`
}

export const getRootElementId = (name, version) => {
    return `${rootElementId}:${name}-${version}`
}