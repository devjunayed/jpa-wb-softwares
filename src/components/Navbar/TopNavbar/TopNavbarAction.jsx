/* eslint-disable react/prop-types */

const TopNavbarAction = ({icon, title, subTitle}) => {
  return (
    <div className="flex items-center pl-[18px] gap-2">
      <div>
        {icon}
      </div>
      <div className="text-white">
        <h2 className="text-semibold">{title}</h2>
        <p className="text-fc1">{subTitle}</p>
      </div>
    </div>
  )
}

export default TopNavbarAction
