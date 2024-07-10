/* eslint-disable react/prop-types */

const ToolCard = ({icon, title, subTitle}) => {
  return (
    <div className="shadow-md flex items-center gap-6 p-4 rounded-md">
      <div className="text-white bg-primary size-10 text-xl flex items-center justify-center rounded-full">{icon}</div>
      <div className="space-y-2">
        <h3 className="font-bold">{title}</h3>
        <p className="font-light">{subTitle}</p>
      </div>
    </div>
  )
}

export default ToolCard
