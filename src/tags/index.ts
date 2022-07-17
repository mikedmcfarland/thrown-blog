import { FaBook, FaCodeBranch, FaJava, FaNodeJs } from 'react-icons/fa'
import { DiDatabase, DiJavascript, DiScala, DiUnitySmall } from 'react-icons/di'
import { FC } from 'react'

const tagToIcon: [RegExp, FC][] = [
  [/javascript|js/gi, DiJavascript],
  [/java?!script/gi, FaJava],
  [/scala/gi, DiScala],
  [/code/gi, FaCodeBranch],
  [/unity(3d)/gi, DiUnitySmall],
  [/sql/gi, DiDatabase],
  [/node/gi, FaNodeJs],
]

export function heroIcon(tags: string[]) {
  return firstIcon(tags) || FaBook
}

export function firstIcon(tags: string[]) {
  return tags.map((t) => iconForTag(t)).find((i) => i !== undefined)
}

export function iconForTag(tag: string) {
  const [_, icon] = tagToIcon.find(([pattern, _]) => tag.match(pattern)) || []
  return icon
}
