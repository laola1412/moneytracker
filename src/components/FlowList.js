export default function FlowList(props) {
  return (
    <div>
      {props.flowList.map(flow => (
         <p>{flow.name}</p>
      ))}
    </div>
  )
}
