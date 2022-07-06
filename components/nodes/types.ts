export type NodeComponent<NodeType, CType = (JSX.Element[] | JSX.Element)> = (props: { node: NodeType, children: CType, i: number }) => JSX.Element
