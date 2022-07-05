export type NodeComponent<NodeType, CType = (JSX.Element[] | JSX.Element)> = (props: { node: NodeType, props: any, children: CType }) => JSX.Element
